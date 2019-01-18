class Trip < ApplicationRecord
  belongs_to :profile
  
  validates :location, presence: true
  validates :start_date, presence: true
  validates :end_date, presence: true

  geocoded_by :location

  after_validation :geocode
end
