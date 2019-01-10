class Profile < ApplicationRecord
  # has_one_attached :image

  has_many :trips

  has_many :links_as_1, class_name: "Link", foreign_key: :profile_1_id
  has_many :links_as_2, class_name: "Link", foreign_key: :profile_2_id

  has_many :linked_profiles_as_1, through: :links_as_1, source: :profile_2
  has_many :linked_profiles_as_2, through: :links_as_2, source: :profile_1
end
