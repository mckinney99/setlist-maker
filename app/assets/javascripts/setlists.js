 $(document).ready(function() {
     setlistShow();
     songsShow();
     newSongForm();
     songSubmission();
 })

 function setlistShow() {
     $("a.load_setlist_songs").on("click", function(e) {
         e.preventDefault();
         $.ajax({
             method: "GET",
             url: this.href
         }).done(function(response) {
             $("div.load_songs").html(response)
         })
     })
 }

 function songsShow() {
     $(".show_songs").on("click", function(e) {
         e.preventDefault();

         $.ajax({
             method: "GET",
             url: this.href
         }).done(function(response) {
             $("div.show_song").html(response)
         })
     })
 }

 function newSongForm() {
     $("a.new_song_form").on("click", function(e) {
         e.preventDefault();
         $.ajax({
             method: "GET",
             url: this.href
         }).done(function(response) {
             $("div.new_song_form").html(response)
         })
     })
 }

 function songSubmission() {
     $("div.new_song_form").on("submit", function(event) {
         event.preventDefault();
         url = this.action
         data = {
             'authenticity_token': $("input[name='authenticity_token']").val(),
             'song': {
                 'songTitle': $("#song_title").val(),
                 'songArtist': $("#song_artist").val(),
                 'songComments': $("#song_comments").val(),
                 'songSongURL': $("#song_song_url").val()
             }
         }
         $.ajax({
             type: "POST",
             url: url,
             data: data,
             success: function(response) {
               $("#song_title").val("");
               $("#song_artist").val("");
               $("#song_comments").val("");
               $("#song_song_url").val("");
                 $('#song-titles').append(`<li>${ data.song.songTitle }</li>`)
                 
             }
         })
     })
 }
