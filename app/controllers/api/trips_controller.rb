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
          profile_id: trip.profile.id
        }
      end
    }
  end

end
