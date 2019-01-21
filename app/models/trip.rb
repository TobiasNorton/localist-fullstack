class Trip < ApplicationRecord
  belongs_to :profile
  
  validates :location, presence: true
  validates :start_date, presence: true
  validates :end_date, presence: true




  # Making Links dependent on Trips
  # has_many :links, dependent:destroy






  geocoded_by :location

  after_validation :geocode
end
