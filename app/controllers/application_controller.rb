class ApplicationController < ActionController::API

  private

  def current_profile
    token = request.headers["Authorization"].to_s.split(" ").last
    payload, header = *JSONWebToken.verify(token)

    # Use the existing current_profile instance variable, *OR* go find it from the database
    @current_profile ||= Profile.from_auth_hash(payload)
  rescue JWT::VerificationError, JWT::DecodeError
    nil
  end
end
