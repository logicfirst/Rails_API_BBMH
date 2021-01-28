Rails.application.routes.draw do
  # For details on the DSL available within this file, see https://guides.rubyonrails.org/routing.html
get '/patients', to: 'patients#index'
get '/doctors', to: 'doctors#index'
get '/appointments', to: 'appointments#index'
post '/patients', to: 'patients#create'

post '/patients', to: 'patients#index'

end
