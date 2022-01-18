Rails.application.routes.draw do
  mount Rswag::Api::Engine => '/api-docs'
  mount Rswag::Ui::Engine => "/api-docs"
  # Define your application routes per the DSL in https://guides.rubyonrails.org/routing.html

  # Defines the root path route ("/")
  # root "articles#index"
  root 'pages#index'

  namespace :api do
    namespace :v1 do
      resources :inventories, param: :id
      resources :warehouses, param: :id
      resources :groups, param: :id
    end
  end

  get '*path', to: 'pages#index', via: :all
  resources :inventories

end
