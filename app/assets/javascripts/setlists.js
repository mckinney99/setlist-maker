 $(document).ready(function() {
     setlistShow();
 })

 class SetList {
   constructor(id, name, comments, songs){
     this.id = id
     this.name = name
     this.comments = comments
     this.songs = songs
   }

   renderName(){
     return `<a class="setlist-title" href="/setlists/${this.id}">${this.name}</a> - ${this.songs.length} songs <br>`
   }
 }

  function setlistShow() {
    $(".index_setlists").on("click", function(e) {
      e.preventDefault();

    $.get(this.href + ".json", function(setlists){

    setlists.forEach(function(setlist) {
      let sl = new SetList(setlist.id, setlist.name, setlist.comments, setlist.songs)
      console.log(sl)
      $(`.setlist-show`).append(sl.renderName())
      })
    })
  })
 }
