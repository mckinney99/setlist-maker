class SetlistsController < ApplicationController
    skip_before_action :authenticate_user!, only: [:show]

    def index
        @setlists = current_user.setlists.all
        respond_to do |format|
          format.html {render :index, :layout => false}
          format.json {render json: @setlists}
        end
    end

    def show
        @setlist = Setlist.find(params[:id])
        # respond_to do |format|
          # format.html {render :show, :layout => false}
          # format.json {render json: @setlist}

    end

    def new
        @setlist = Setlist.new
        render :new, :layout => false
    end

    def create
        @setlist = Setlist.new(setlist_params)
        @setlist.user_id = current_user.id
          if @setlist.save
            redirect_to root_path
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
            redirect_to setlist_path
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

    def destroy
        @setlist = Setlist.find(params[:id])
        @setlist.destroy
        render :index
    end


      private


    def setlist_params
        params.require(:setlist).permit(:name, :comments, :user_id, songs_attributes: [:title, :artist, :comments, :song_url, :song_id, :user_id])
    end

    def setlist_song_params
        params.require(:setlist_songs).permit(:setlist_id, :song_id)
    end
end
