 $(document).ready(function() {
     setlistShow();
     setlistFilter();
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

function setlistFilter() {
  $(".filterSetlist").on("click", function(e) {
    e.preventDefault();
    $.get(this.href + ".json", function(setlists){

      var filterSet = setlists.filter(function (set) {
        return (set.songs.length > 0);
      });

      $(".setlist-show").html('')
      filterSet.forEach(function(setlist) {
        let sl = new SetList(setlist.id, setlist.name, setlist.comments, setlist.songs)
        $(`.setlist-show`).append(sl.renderName())
      })
    })
  })
}
