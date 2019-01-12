class Api::ProfilesController < ApplicationController

  # Lists all profiles in the database
  def index 
    all_profiles_in_db = Profile.all

    render json: {
      profiles: all_profiles_in_db.map do |profile|
        {
          id: profile.id,
          name: profile.name,
          age: profile.age,
          gender: profile.gender,
          location: profile.location,
          about: profile.about,
          why_joined: profile.why_joined,
          facebook: profile.facebook,
          instagram: profile.instagram,
          phone: profile.phone,
          whatsapp: profile.whatsapp,
          email: profile.email,
          latitude: profile.latitude,
          longitude: profile.longitude,
          picture_url: url_for(profile.picture)
          # picture_url: url_for(profile.picture.variant(resize: "384x384"))
        }
      end
    }
  end

  # Lists all profiles I am linked with
  def linked
    # current_profile is a variable we made in 
    # application_controller.rb that changes based on what id we give it
    all_linked_profiles = current_profile.linked_profiles_as_1 + current_profile.linked_profiles_as_2

    render json: {
      profiles: all_linked_profiles.map do |profile|
        {
          id: profile.id,
          name: profile.name,
          age: profile.age,
          gender: profile.gender,
          location: profile.location,
          about: profile.about,
          why_joined: profile.why_joined,
          facebook: profile.facebook,
          instagram: profile.instagram,
          phone: profile.phone,
          whatsapp: profile.whatsapp,
          email: profile.email,
          latitude: profile.latitude,
          longitude: profile.longitude
        }
      end
    }
  end

  # Find all people whose location = my trip location
  # def browse
  #   people_in_my_destination = Profile.all.select do |profile|
  #     profile.location == current_profile.trip.location
  #   end
  # end



  private

  def profile_params
    params.require(:profile).permit(:name, :age, :gender, :location, :about, :why_joined, :facebook, :instagram, :phone, :whatsapp, :email, :latitude, :longitude, :picture)
  end

end
