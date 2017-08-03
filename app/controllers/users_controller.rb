class UsersController < ApplicationController
  before_action :authorize_user, only: [:index]

  def index
    @users = User.all
  end

  def show
    @user = User.find(params[:id])
  end

  def destroy
    user = User.find(params[:id])

    if user.destroy
      redirect_to users_path, notice: "User deleted."
    else
      redirect_to users_path, flash: { error: "User could not be deleted." }
    end
  end

  def authorize_user
    if !user_signed_in?
      raise ActionController::RoutingError.new("Not Found")
    end
  end
end
