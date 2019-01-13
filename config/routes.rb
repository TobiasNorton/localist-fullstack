Rails.application.routes.draw do
        #path             # api/controller name#method name
  get '/api/profiles', to: 'api/profiles#index'
  get '/api/profiles/linked', to: 'api/profiles#linked'
  get '/api/profiles/browse', to: 'api/profiles#browse'
  get '/api/profiles/:id', to: 'api/profiles#my_profile'
  # get '/api/profiles/:id', to: 'api/profiles#their_profile'
  post '/api/profiles/create', to: 'api/profiles#create'

  get '/api/trips', to: 'api/trips#index'
  get '/api/trips/:id', to: 'api/trips#my_trips'

  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
  if Rails.env.production?
    CLIENT_HTML = File.read(Rails.root.join('public/index.html'))

    get "*path", to: proc { [200, {}, [CLIENT_HTML]] }
  end
end
