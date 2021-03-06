Rails.application.routes.draw do
  devise_for :users
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html

  # root 'static_pages#index'

  root 'hikes#index'

  # get '/hikes', to: 'static_pages#index'

  resources :hikes, only: [:index, :show]
  resources :users, only: [:index, :show]
  resources :user_hikes, only: [:index, :new, :create, :destroy]


  namespace :api do
    namespace :v1 do
      resources :hikes, only: [:index, :show, :create]
    end
  end

end
