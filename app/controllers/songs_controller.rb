class SongsController < ApplicationController

    def index
        @songs = Song.all
       # respond_to do |format|
        #  format.html {render :show, :layout => false}
         # format.json {render json: @song.to_json}
        #end
       end
    
      def show
        @songs = Song.find(params[:id])
        respond_to do |format|
          format.html {render :show, :layout => false}
          format.json {render json: @setlist.to_json}
        end
      end
    
      def new
        @song = Song.new
        render :layout => false
      end
    
      def create
        @song = Song.new(song_params)
        @song.user_id = current_user.id 
          if @song.save
            respond_to do |format|
              format.html {render :show, :layout => false}
              format.json {render json: @song.to_json}
             end
          else
            render :new
        end
      end

      def new_song
        @song = Song.create(song_params)
        @setlist_song = SetlistSong.create(song_id: @song.id, setlist_id: params[:id])
        @song.save
        @setlist_song.save
        redirect_to setlist_path(params[:id])
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

