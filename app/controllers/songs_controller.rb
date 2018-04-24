class SongsController < ApplicationController

    def index
        @songs = current_user.songs.all
        respond_to do |format|
          format.html {render :index, :layout => true}
          format.json {render json: @songs.to_json}
         end
       end

      def show
        @song = Song.find(params[:id])

         respond_to do |format|
           format.html {render :show, layout: false}
           format.json {render json: @song.to_json}
         end
      end


      def new
        @song = Song.new
        render :new, :layout => false

      end

      def create
        @song = current_user.songs.build(song_params)
        @song.save
        #binding.pry
        #render 'songs/show', :layout => false
        respond_to do |format|
          format.html {render :show, :layout => false}
          format.json {render json: @song.to_json}
         end
      end

      def new_song
        @song = Song.create(song_params)
        @setlist_song = SetlistSong.create(song_id: @song.id, setlist_id: params[:id])
        @setlist_song.save
        respond_to do |format|
          format.html {render :index, :layout => true}
          format.json {render json: @song.to_json}
         end

    end

      def edit
        @song = Song.find(params[:id])
        render :edit
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
