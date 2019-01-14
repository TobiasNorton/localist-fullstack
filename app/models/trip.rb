class Trip < ApplicationRecord
  belongs_to :profile

  geocoded_by :location

  after_validation :geocode
end
