Rails.application.routes.draw do
  #API
  namespace 'api' do
    namespace 'v1' do
      post '/login', to: 'authentications#login'
      post '/users/sign_up', to: 'users#sign_up'
      resources :users
    end
  end
end
