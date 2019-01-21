class Link < ApplicationRecord
  belongs_to :profile_1, class_name: "Profile"
  belongs_to :profile_2, class_name: "Profile"

  # Making a link dependent on a trip
  # belongs_to :trip
  # Now add a column through a migration >>>> AddTripIdToLink trip_id:string -ish etc
  # Pass a trip ID in axios POST when link is created

  def other(me)
    if profile_1 == me
      profile_2
    else
      profile_1
    end
  end
end
