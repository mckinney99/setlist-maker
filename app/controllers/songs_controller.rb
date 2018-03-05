class SongsController < ApplicationController
    def index
        @songs = Song.all
       end
    
      def show
        @songs = Song.find(params[:id])
      end
    
      def new
        @song = Song.new
      end
    
      def create
        @song = Song.new(song_params)
        @song.user_id = current_user.id 
          if @song.save
            session[:song_id] = @song.id
            redirect_to song_path(@song)
          else
            render :new
        end
      end
    
      def edit
        @song = Song.find(params[:id])
        
      end
    
      def update
        @song = Song.find(params[:id])
          if @song.update(song_params)
            redirect_to @song
          else
            render :edit
        end
      end

      def destroy
        @song = Song.find(params[:id])
        @song.destroy
        render :index
      end
    
    
      private

      
      def song_params
        params.require(:song).permit(:title, :artist, :comments, :song_url, :user_id)
      end
    end

