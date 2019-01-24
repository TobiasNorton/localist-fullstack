class Profile < ApplicationRecord
  require 'net/http'

  has_one_attached :picture

  has_many :trips

  has_many :links_as_1, class_name: "Link", foreign_key: :profile_1_id, dependent: :destroy
  has_many :links_as_2, class_name: "Link", foreign_key: :profile_2_id, dependent: :destroy

  has_many :linked_profiles_as_1, through: :links_as_1, source: :profile_2
  has_many :linked_profiles_as_2, through: :links_as_2, source: :profile_1

  geocoded_by :location

  after_validation :geocode

  def profile_picture_auto_orient
    profile.picture.variant(auto_orient: true)
  rescue ActiveStorage::InvariableError
    profile.picture
  end

  def linked_profiles
    # All the people I am linked to as 1 and all the people I am linked to as 2
    (linked_profiles_as_1 + linked_profiles_as_2).uniq
  end

  def other_profiles_near_my_trips
    # Get all profiles that are not me
    # others = Profile.all.select do |profile|
    #   profile.id != current_profile.id
    # end

    # Get all of my trip locations (Trips belongs_to Profile)
    # my_trip_locations = current_profile.trips.map { |trip| trip.location }
    my_trip_locations = trips.pluck(:location)

    # Get all profiles that have locations in the common
    # profiles_in_browse = others.select do |profile|
    #   # common_locations.include?(profile.location)
    #   profile.location.in?(my_trip_locations)
    # end

    # Take my trip locations
    # Give back a flattened single array of all the profiles that aren't me *AND* are near each location and only give me the unique ones
    my_trip_locations.flat_map { |location| Profile.where.not(id: id).near(location) }.uniq
  end



  def self.from_auth_hash(payload)
    Profile.find_or_create_by(auth_sub: payload["sub"]) do |profile|
      # This code will be called whenever we create a User for the first time.
  
      # This code would save a user's avatar as a URL
      # user.avatar_url = payload["picture"]
  
      # This code would attach an ActiveStorage profile image by downloading the user's profile and storing it locally
      begin
        picture = Down.download(payload["picture"])
        profile.picture.attach(io: picture, filename: picture.original_filename)
      rescue Down::Error => exception
        Rails.logger.info exception
      end
  
      # This code would store their email address
      # user.email = payload["email"]
      profile.name = payload["name"]
    end
  end
end
