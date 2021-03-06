Rails.application.routes.draw do
  root 'home#index'

  get 'users/:id/setlists' => 'setlists#index'
  get 'setlist/:id/edit' => 'setlists#edit'

  post 'songs/show' => 'songs#show'
  post 'song/new' => 'songs#show'

  post 'setlist/new' => 'setlists#show'
  post 'setlists/:id/edit' => 'setlists#add_song', as: 'add_song'
  post 'setlists/:id' => 'songs#new_song', as: 'new_song'
  post 'setlists/:id' => 'setlists#edit'

  post 'users/:id/songs' => 'songs#index'

  post '' => 'songs#create'
  patch 'songs' => 'songs#index'

  delete 'song/:id/edit' => 'songs#destroy', as: 'destroy'
  delete 'setlist/:id/edit' => 'setlists#destroy_song', as: 'destroy_song'

  devise_for :users, controllers: { omniauth_callbacks: 'users/omniauth_callbacks' }

  resources :songs

  resources :setlists do
    resources :songs, except: [:index]
  end
end