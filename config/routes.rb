Sandwiches::Application.routes.draw do
  
  # ActiveAdmin.routes(self)
  # devise_for :admin_users, ActiveAdmin::Devise.config

  root :to => 'sandwiches#index'
  resources :sandwiches do
    resources :comments
    member do
      get 'like'
      get 'unlike'
    end
  end
  resources :invitations, :only => [:create]
  resources :users, :only => [:new, :create]
  devise_for :users
  match 'greatest' => 'sandwiches#greatest'
  # NOTE last route to avoid namespace issues
  match ':id' => 'users#show', :as => :user
end