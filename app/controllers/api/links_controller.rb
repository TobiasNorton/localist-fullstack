class Api::LinksController < ApplicationController

  def create
    link = Link.create(profile_1_id: current_profile.id,
                       profile_2_id: params[:other_profile_id])

    render json: link
  end

  def delete
    link = Link.delete(profile_1_id: current_profile.id,
    profile_2_id: params[:other_profile_id])
    render json: link
  end

  private

  def link_params
    params.require(:link).permit(:profile_1_id, :profile_2_id)
  end
end
