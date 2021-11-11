Rails.application.routes.draw do
  # For details on the DSL available within this file, see https://guides.rubyonrails.org/routing.html
  
  namespace :api do
    namespace :v1 do
      get '/greetings', to: 'greetings#index'
      
    end
  end
  # Forward all request to StaticController#index
  get '*page', to: 'static#index', constraints: ->(req) do
    !req.xhr? && req.format.html?
  end
  # Forward root to StaticController#index
  root 'static#index'
end
