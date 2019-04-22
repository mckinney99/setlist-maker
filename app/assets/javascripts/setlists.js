 $(document).ready(function() {
     setlistShow();
     // setlistFilter();
     newSetlistForm();
 })

 class SetList {
   constructor(id, name, comments, songs){
     this.id = id
     this.name = name
     this.comments = comments
     this.songs = songs
   }

   renderName(){
     return `<br></br><a class="setlist-title" href="/setlists/${this.id}">${this.name}</a> - ${this.songs.length} songs - <a href=/setlists/${this.id}/edit>Edit</a> <br></br>
            <div class="setlist-${this.id}"></div>`
   }
 }

 function setlistShow() {
    $(".index_setlists").on("click", function(e) {
      $(`.setlist-show`).toggle();
      e.preventDefault();
      $('.setlist-show').html('')
      $.get(this.href + ".json", function(setlists){
          setlists.forEach(function(setlist) {
          let sl = new SetList(setlist.id, setlist.name, setlist.comments, setlist.songs)
            $(`.setlist-show`).append(sl.renderName())
      })
    })
  })
}

function newSetlistForm() {
  $("a.link_to_setlist_form").on("click", function(e) {
    e.preventDefault();
    $("div.new_setlist_form").toggle();

    $.ajax({
        method: "GET",
        url: this.href
    }).done(function(response) {
        $("div.new_setlist_form").html(response)
    })
  })
  }
