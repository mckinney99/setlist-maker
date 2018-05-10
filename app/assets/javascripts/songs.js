$(document).ready(function() {
    newSongForm();
    songSubmission();
    showSong();
    setlistSongs();
})

class Song {
  constructor(id, artist, title, comments, songUrl) {
    this.id = id
    this.artist = artist
    this.title = title
    this.comments = comments
    this.songUrl = songUrl
  }

  renderSetListSongs() {
    return `<li>${this.title} - <a href="${this.songUrl}" target="_blank" >Link</a><br>`
  }

  renderForm() {
        return `<li><a class="song-link" data-id=${this.id} href="songs/${this.id}">${this.title}</a></li>
                <li><a href="${this.songUrl}" target="_blank" >Link to Listen</a></li>
                 <br> <div song-id> </div>`
  }

  renderSong() {
    return `<br> <a href="songs/${this.id}/edit">Edit Song</a> <br>
            Comments: <li>${this.comments}</li> <br>
            Artist: <li>${this.artist}</li>`
  }
}

function setlistSongs() {
  $(".setlist-show").on('click', '.setlist-title', function (e) {
    e.preventDefault();

    $.get(this.href + ".json", function(setlists) {
      let setlistId = setlists.id;
      $(`.setlist-${setlistId}`).html('')
      setlists.songs.forEach(function(song) {
      let sl = new Song(song.id, song.artist, song.title, song.comments, song.songUrl)
      $(`.setlist-${setlistId}`).append(sl.renderSetListSongs())
      debugger
      })
    })
  })
}

function showSong() {
  $(document).on('click', '.song-link', function (e) {
    e.preventDefault()
    $.get(this.href + ".json", function(song) {
        let sl = new Song(song.id, song.artist, song.title, song.comments, song.songUrl)
        $(`#song-${song.id}-details`).prepend(sl.renderSong())
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
            $("div.new_song_form").html(response)
        })
    })
  }

function songSubmission() {
    $(".new_song_form").on("submit", function(event) {

        event.preventDefault();

        let songid = $('div#song-id').data("id");

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
            success: function(song) {
              $("#song_id").val(songid);
              $("#song_title").val("");
              $("#song_artist").val("");
              $("#song_comments").val("");
              $("#song_song_url").val("");

              let sl = new Song(song.id, song.artist, song.title, song.comments, song.songUrl)
              $('.song-titles').prepend(sl.renderForm(id));
            }
        })
    })
}
