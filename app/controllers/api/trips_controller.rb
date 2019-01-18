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

  def create
    trip = current_profile.trips.create(trip_params)

    if trip.valid?
      render json: trip
    else
      render json: { errors: trip.errors }
    end
  end

  def delete
    trip = current_profile.trips.find(params[:id])

    trip.destroy
    render json: trip
  end

  private

  def trip_params
    params.require(:trip).permit(:location, :start_date, :end_date)
  end

end
