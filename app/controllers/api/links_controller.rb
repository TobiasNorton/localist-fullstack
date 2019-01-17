class Api::LinksController < ApplicationController

  def create
    link = Link.create(profile_1_id: current_profile.id,
                       profile_2_id: params[:other_profile_id])

    render json: link
  end
  

  def my_links
    my_links = Link.all.select do |link|
      link.profile_1_id == current_profile.id || link.profile_2_id == current_profile.id
    end

    render json: {
      my_links: my_links.map do |link|
        {
          id: link.id,
          profile_1_id: link.profile_1_id,
          profile_2_id: link.profile_2_id, 
        }
      end
    }
  end

  def delete    
    link = current_profile.links_as_1.find_by(profile_2_id: params[:profile_id]) ||
           current_profile.links_as_2.find_by(profile_1_id: params[:profile_id])

    link.destroy

    render json: link
  end

  private

  # def delete_params 
  #   params.require(:link).permit(:id, :profile_1_id, :profile_2_id)
  # end

  def link_params
    params.require(:link).permit(:profile_1_id, :profile_2_id)
  end
end
