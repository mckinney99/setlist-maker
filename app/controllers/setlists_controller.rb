class SetlistsController < ApplicationController

    def index
        @setlists = Setlist.all
            
    end
    
    def show
        @setlists = Setlist.find(params[:id])
    end
    
    def new
        @setlist = Setlist.new
    end
    
    def create
        @setlist = Setlist.new(setlist_params)
        @setlist.user_id = current_user.id 
          if @setlist.save
            session[:Setlist_id] = @setlist.id
            redirect_to setlist_path(@setlist)
            
          else
            render :new
        end
    end

    def edit
        @setlist = Setlist.find(params[:id])
    end
    
    
    
    def update
        @setlist = Setlist.find(params[:id])
          if @setlist.update(setlist_params)
            redirect_to @setlist
          else
            render :edit
        end
      end

    def add_song
        @setlist = Setlist.find(params[:id])
        @setlist_songs = SetlistSong.new
        @setlist_songs.song_id = params[:songs]["song_id"]
        @setlist_songs.setlist_id = @setlist.id
        @setlist_songs.save
        render :edit
    end

    def destroy_song
        @setlist = Setlist.find(params[:id])
        @setlist.songs.destroy(params[:song_id])
        render :edit
    end


   
        
    
    
      private
      def setlist_params
        params.require(:setlist).permit(:name, :comments, :user_id)
      end

      def setlist_song_params
        params.require(:setlist_songs).permit(:setlist_id, :song_id)
      end     

    end


