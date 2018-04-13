$(document).ready(function() {
    //songsShow();
    newSongForm();
    songSubmission();
})

function newSongForm() {
    $("a.link_to_song_form").on("click", function(event) {
        event.preventDefault();
        $.ajax({
            method: "GET",
            url: this.href
        }).done(function(response) {
          console.log(response)
            $("div.new_song_form").html(response)
        })
    })
}

//still working on... 

function songSubmission() {
    $("div.new_song_form").on("submit", function(event) {
        event.preventDefault();
        url = this.action
        data = {
            'authenticity_token': $("input[name='authenticity_token']").val(),
            'song': {
                'title': $("#song_title").val(),
                'artist': $("#song_artist").val(),
                'comments': $("#song_comments").val(),
                'song_url': $("#song_song_url").val()
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
                // $('#song-titles').append(`<li><a href="songs/${data.song.id}">${data.song.title}</li>`);
                // $('#song-titles').append(`<li><a href="${data.song.song_url}">Link to Listen</li> <br>`);
                $("div.load_songs").html(renderHTML())
                // $('#song-titles').append(`<a href="song/${data.song.id}"> ${data.song.title} </a>`)
            }
        })
    })
}

class Song {
  constructor(artist, title, comments, song_url){
    this.artist = artist
    this.title = title
    this.comments = comments
    this.songUrl = song_url
  }


  render(){
   debugger
   }
 }


//show songs render index through js -- js class songs object
