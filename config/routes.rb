Rails.application.routes.draw do

  get 'home/index'
  root 'home#index'

  get 'songs' => 'songs#index'
  get 'song/:id' => 'songs#edit'
  get 'song/new' => 'songs#new'

  get 'users/:id/setlists' => 'setlists#index'
  get 'setlist/:id' => 'setlists#show'
  get 'setlist/:id/edit' => 'setlists#edit'
  get 'setlist/new' => 'setlists#new'

  post 'song/new' => 'songs#show'
  post 'setlist/new' => 'setlists#show'

  post 'setlists/:id' => 'setlists#add_song', as: 'add_song'

  post 'users/:id/songs' => 'songs#index'
  post 'setlists/:id' => 'setlists#edit'

  delete 'song/:id/edit' => 'songs#destroy', as: 'destroy'
  delete 'setlist/:id/edit' => 'setlists#destroy_song', as: 'destroy_song'
  
  devise_for :users, controllers: { omniauth_callbacks: 'users/omniauth_callbacks' }
  
  resources :songs 
  resources :setlists

end
