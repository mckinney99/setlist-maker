require 'pry'
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
        
       binding.pry
        
        
        
        
    end
    
    def update
        @setlist = Setlist.find(params[:id])
          if @setlist.update(setlist_params)
            redirect_to @setlist
          else
            render :edit
        end
      end
    
    
      private
      def setlist_params
        params.require(:setlist).permit(:name, :comments, :user_id)
      end

    end

