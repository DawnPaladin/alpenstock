Rails.application.routes.draw do
  # Define your application routes per the DSL in https://guides.rubyonrails.org/routing.html

  # Defines the root path route ("/")
  root to: 'site#index'

  namespace :api do
    resources :tasks, only: %i[index show create destroy update]
  end
end
