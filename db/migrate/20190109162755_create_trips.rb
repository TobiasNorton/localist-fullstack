class CreateTrips < ActiveRecord::Migration[5.2]
  def change
    create_table :trips do |t|
      t.string :location
      t.date :start_date
      t.date :end_date
      t.belongs_to :profile, foreign_key: true

      t.timestamps
    end
  end
end
