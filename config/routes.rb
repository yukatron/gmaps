Rails.application.routes.draw do

  devise_for :users
  root 'maps#index'
  resources :maps, except: [:new] do
  	resource :favorites, only: [:create, :destroy]
  end
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
end
