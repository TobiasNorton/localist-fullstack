class Api::ProfilesController < ApplicationController
  # skip_before_action :verify_authenticity_token 

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
          languages: profile.languages,
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
          # picture_url: url_for(profile.picture)
          picture_url: (url_for(profile.picture) if profile.picture.attached?)
          # picture_url: url_for(profile.picture.variant(resize: "384x384"))
        }
      end
    }
  end

  # Lists all profiles I am linked with
  def linked
    # current_profile is a variable we made in 
    # application_controller.rb that changes based on what ID we give it
    all_linked_profiles = current_profile.linked_profiles_as_1 + current_profile.linked_profiles_as_2

    render json: {
      profiles: all_linked_profiles.map do |profile|
        {
          id: profile.id,
          name: profile.name,
          age: profile.age,
          gender: profile.gender,
          languages: profile.languages,
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
        }
      end
    }
  end

  def my_profile

    json = {
      profile: {
        id: current_profile.id,
        name: current_profile.name,
        age: current_profile.age,
        gender: current_profile.gender,
        languages: current_profile.languages,
        location: current_profile.location,
        about: current_profile.about,
        why_joined: current_profile.why_joined,
        facebook: current_profile.facebook,
        instagram: current_profile.instagram,
        phone: current_profile.phone,
        whatsapp: current_profile.whatsapp,
        email: current_profile.email,
        latitude: current_profile.latitude,
        longitude: current_profile.longitude,
        picture_url: url_for(current_profile.picture),
        trips: {
          trips: current_profile.trips.map do |trip|
            {
              id: trip.id,
              location: trip.location,
              start_date: trip.start_date,
              end_date: trip.end_date
            }
          end
        }
      }
    }
    
    Rails.logger.debug json

    render json: json
  end

  def show_profile
    profile = Profile.find(params[:id])
    render json: {
      displaying_profile: {
        id: profile.id,
        name: profile.name,
        age: profile.age,
        gender: profile.gender,
        languages: profile.languages,
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
        picture_url: url_for(profile.picture),
        trips: {
          trips: displaying_profile.trips.map do |trip|
            {
              id: trip.id,
              location: trip.location,
              start_date: trip.start_date,
              end_date: trip.end_date
            }
          end
        }
      }
    }
  end

  def browse
    render json: {
      profiles: current_profile.other_profiles_near_my_trips.map do |profile|
        {
          id: profile.id,
          name: profile.name,
          age: profile.age,
          gender: profile.gender,
          languages: profile.languages,
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
          picture_url: (url_for(profile.picture) if profile.picture.attached?)
        } 
      end
    }
  end

  def create
    new_profile = Profile.create(profile_params)
    render json: new_profile
  end

  # Browse step 4?
  # Store the common locations in a variable
    # common_locations = others_locations & my_trip_locations


  # This method will be for both "my" and "their" profile
  # def show_profile

  #   show_profile = 

  #   render json: {
  #     my_profile: {
  #       id: current_profile.id,
  #       name: current_profile.name,
  #       age: current_profile.age,
  #       gender: current_profile.gender,
  #       location: current_profile.location,
  #       about: current_profile.about,
  #       why_joined: current_profile.why_joined,
  #       facebook: current_profile.facebook,
  #       instagram: current_profile.instagram,
  #       phone: current_profile.phone,
  #       whatsapp: current_profile.whatsapp,
  #       email: current_profile.email,
  #       latitude: current_profile.latitude,
  #       longitude: current_profile.longitude
  #     }
  #   }
  # end

  # Find all people whose location = my trip location
  # def browse
  #   people_in_my_destination = Profile.all.select do |profile|
  #     profile.location == current_profile.trip.location
  #   end
  # end



  private

  def profile_params
    params.require(:profile).permit(:name, :age, :gender, :languages, :location, :about, :why_joined, :facebook, :instagram, :phone, :whatsapp, :email, :latitude, :longitude, :picture)
  end

end
