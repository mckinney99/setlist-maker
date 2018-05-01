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
    return `<li>${this.title}<br>`
  }

  renderForm() {

        return `<li><a class="song-link" data-id=${this.id} href="songs/${this.id}">${this.title}</a></li>
                <li><a href="${this.song_url}" target="_blank" >Link to Listen</li>
                 <br>`
  }

  renderSong() {
    return `<br> <a href="songs/${this.id}/edit">Edit Song</a> <br>
            Comments: <li>${this.comments}</li> <br>
            Artist: <li>${this.artist}</li>`
  }
}

function setlistSongs() {
  $("body").on('click', '.setlist-title', function (e) {
    e.preventDefault();

    $.get(this.href + ".json", function(setlists) {

      setlists.songs.forEach(function(song) {
      let sl = new Song(song.id, song.artist, song.title, song.comments, song.songUrl)
      console.log(song)
      $(`.load-songs`).append(sl.renderSetListSongs())

      })
    })
  })
}

function showSong() {
  $("body").on('click', '.song-link', function (e) {
  // $('.song-link').on('click', function(e) {
    e.preventDefault()

          // let id = $(this).data("id")
    //
    // $.get(`/songs/${id}.json`, function(song){
    //   console.log(song)
    //
    //   $(`#song-${id}-details`).html('')
    //   $(`#song-${id}-details`).prepend(`<a href="songs/${id}/edit">Edit Song</a>`)
    //   $(`#song-${id}-details`).prepend(`Comments: <li>${song.comments}</li>`)
    //   $(`#song-${id}-details`).prepend(`Artist: <li>${song.artist}</li>`)

    $.get(this.href + ".json", function(song) {

        let sl = new Song(song.id, song.artist, song.title, song.comments, song.songUrl)
        console.log(song)
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
          console.log(response)
            $("div.new_song_form").html(response)
        })
    })
  }

function songSubmission() {
    $("div.new_song_form").on("submit", function(event) {

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
            let id = $("#song_id").val(songid);
            let title = $("#song_title").val("");
            let artist = $("#song_artist").val("");
            let comments = $("#song_comments").val("");
            let song_url = $("#song_song_url").val("");

            let sl = new Song(song.id, song.artist, song.title, song.comments, song.songUrl)

            $('.song-titles').prepend(sl.renderForm(id));

            }
        })
    })
}
