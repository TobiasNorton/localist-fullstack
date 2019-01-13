class Api::LinksController < ApplicationController

  def index
    all_links = Link.all
    render json: {
      links: all_links.map do |link|
        {
          id: link.id,
          profile_1_id: link.profile_1_id,
          profile_2_id: link.profile_2_id,
        }
      end
    }
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
    }
  end





end
