class Link < ApplicationRecord
  belongs_to :profile_1, class_name: "Profile"
  belongs_to :profile_2, class_name: "Profile"

  def other(me)
    if profile_1 == me
      profile_2
    else
      profile_1
    end
  end
end
