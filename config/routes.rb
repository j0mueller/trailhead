Rails.application.routes.draw do
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html

  # root 'static_pages#index'

  root 'hikes#index'

  # get '/hikes', to: 'static_pages#index'

  resources :hikes, only: [:index, :show]

  namespace :api do
    namespace :v1 do
      resources :hikes, only: [:index, :show]
    end
  end

end
