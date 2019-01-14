class Api::TripsController < ApplicationController

  # Lists all trips
  def index
    all_trips_in_database = Trip.all

    render json: {
      trips: all_trips_in_database.map do |trip|
        {
          id: trip.id,
          location: trip.location,
          start_date: trip.start_date,
          end_date: trip.end_date,
          latitude: trip.latitude,
          longitude: trip.longitude,
          profile_id: trip.profile.id
        }
      end
    }
  end

  def my_trips
    render json: {
      trips: current_profile.trips.map do |trip|
        {
          id: trip.id,
          location: trip.location,
          start_date: trip.start_date,
          end_date: trip.end_date,
          latitude: trip.latitude,
          longitude: trip.longitude,
          profile_id: current_profile.id
        }
      end
    }
  end

  private

  def profile_params
    params.require(:trip).permit(:location, :start_date, :end_date)
  end

end
