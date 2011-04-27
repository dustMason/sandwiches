Sandwiches::Application.routes.draw do
  root :to => 'sandwiches#index'
  resources :sandwiches do
    resources :comments
  end
  resources :invitations, :only => [:create]
  resources :users, :only => [:new, :create]
  devise_for :users
  # NOTE last route to avoid namespace issues
  match ':id' => 'users#show', :as => :user
end