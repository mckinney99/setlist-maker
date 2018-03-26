 $(document).ready(function() {
     setlistShow();
     songsShow();
     newSongForm();
 })

 function setlistShow() {
     $("a.load_setlist_songs").on("click", function(e) {

         $.ajax({
             method: "GET",
             url: this.href
         }).done(function(response) {
             $("div.load_songs").html(response)
         })
         e.preventDefault();
     })
 }

 function songsShow() {
     $(".show_songs").on("click", function(e) {


         $.ajax({
             method: "GET",
             url: this.href
         }).done(function(response) {
             $("div.show_song").html(response)
         })
         e.preventDefault();
     })
 }

 function newSongForm() {
     $("a.new_song_form").on("click", function(e) {

         $.ajax({
             method: "GET",
             url: this.href
         }).done(function(response) {
             $("div.new_song_form").html(response)
         })
         e.preventDefault();
     })
 }