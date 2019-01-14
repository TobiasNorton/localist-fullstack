class AddLatitudeAndLongitudeToTrip < ActiveRecord::Migration[5.2]
  def change
    add_column :trips, :latitude, :decimal
    add_column :trips, :longitude, :decimal
  end
end
