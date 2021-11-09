Rails.application.routes.draw do
  # For details on the DSL available within this file, see https://guides.rubyonrails.org/routing.html
  roots 'static#index'
  namespace :api do
    namespace :v1 do
      get '/greetings', to: 'greetings#index'
      
    end
  end
end
