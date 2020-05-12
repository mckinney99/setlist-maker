class HomeController < ApplicationController
  skip_before_action :authenticate_user!, only: [:index]

  def index
    if current_user
      render :user_home
    else
      render :index
    end
  end
end
