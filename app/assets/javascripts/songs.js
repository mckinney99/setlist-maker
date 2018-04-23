$(document).ready(function() {
    //songsShow();
    newSongForm();
    songSubmission();
    showSong();
})

class Song {
  constructor(artist, title, comments, song_url){
    this.artist = artist
    this.title = title
    this.comments = comments
    this.songUrl = song_url
  }

  render(response){
    document.querySelector('.song-titles').innerHTML += `<a href="/songs/${this.song_id}">Song Title</a>`
  }
}

function renderHTML(response) {

  if (document.querySelector('.song-titles')) {

    let id = response.id;

    $.get(`/songs/${id}.json`, function(song){
      $('.song-titles').append(`<li><a href="songs/${data.song.id}">${data.song.title}</li>`);
      $('.song-titles').append(`<li><a href="${data.song.song_url}" target="_blank" >Link to Listen</li> <br>`);

    })
  }
}

function showSong() {
  $('.song-link').on('click', function(e) {
    e.preventDefault()

    let id = $(this).data("id")

    $.get(`/songs/${id}.json`, function(song){
      console.log(song)
      $(`#song-${id}-details`).html('')
      $(`#song-${id}-details`).append(`Arist: <li>${song.artist}</li>`)
      $(`#song-${id}-details`).append(`Comments: <li>${song.comments}</li>`)
    })
  })
}

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

        let id = $('div#song-id').data("id");

        url = this.action
        data = {
            'authenticity_token': $("input[name='authenticity_token']").val(),
            'song': {
                'id': $("#song_id").val(),
                'title': $("#song_title").val(),
                'artist': $("#song_artist").val(),
                'comments': $("#song_comments").val(),
                'song_url': $("#song_song_url").val()
            }
        }
        $.ajax({
            type: "POST",
            url: "/songs" + ".json",
            data: data,
            success: function(response) {
              $("#song_id").val(id);
              $("#song_title").val("");
              $("#song_artist").val("");
              $("#song_comments").val("");
              $("#song_song_url").val("");

                $("div.song-titles").html(renderHTML(response))

            }
        })
    })
}
