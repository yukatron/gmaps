Rails.application.routes.draw do
  root 'maps#index'
  resources :maps, except: [:index, :new]
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
end
