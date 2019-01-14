class ApplicationController < ActionController::API

  private

  def current_profile
    # If we have a current profile, just return it
    @current_profile ||= begin
      token = request.headers["Authorization"].to_s.split(" ").last
      payload, header = *JSONWebToken.verify(token)

      # Use the existing current_profile instance variable, *OR* go find it from the database
      Profile.from_auth_hash(payload)
    end
  rescue JWT::VerificationError, JWT::DecodeError
    nil
  end
end
