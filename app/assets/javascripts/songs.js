/* function songSubmission() {
    $("#new_song").on("submit", function(event) {
        event.preventDefault();

        $.ajax({

            url: this.action,
            method: 'POST',
            data: $(this).serialize(),
            success: function(response) {
                $("#song_title").val("")
                $("#load_setlist_songs").append(response)
            }
        })
    })
}

*
/ */











/* $(function songSubmission() {
    $("#new_song").on("submit", function(e) {

        e.preventDefault();

        url = this.action

        data = {
            'authenticity_token': $("input[name='authenticity_token']").val(),
            'song': {
                'songTitle': $("#song_title").val(),
                'songArtist': $("#song_artist").val(),
                'songComments': $("#song_comments").val(),
                'songSong_url': $("#song_song_url").val()
            }
        };

        $.ajax({

            type: "POST",
            url: url,
            data: data,
            success: function(response) {
                $("#song_title").val("")
                $("#load_setlist_songs").append(response)

            }
        });

    })
}) */