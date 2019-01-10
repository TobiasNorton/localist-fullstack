class ApplicationController < ActionController::API

  private

  def current_profile
    # Eventually authentication will do this for us! (e.g. we will know who WE are)
    # When we have auth working, remove this line
    Profile.find(6)
  end
end
