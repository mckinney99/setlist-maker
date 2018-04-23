 $(document).ready(function() {
     setlistShow();
 })

 class SetList {
   constructor(title, comments){
     this.title = title
     this.comments = comments
   }

   render(){
     document.querySelector('.load_songs').innerHTML += `<a href="/setlist/${this.setlist_id}">Song Title</a>`
   }
 }


  function setlistShow() {
    $(".index_setlists").on("click", function(e) {
        e.preventDefault();

    $.get(this.href + ".json", function(setlist){
      console.log(setlist)

var setlists = $.makeArray(setlist)
$.map(setlists, function(val) {
  let set = val
  console.log(set.name)
  let id = val.id
  
      $(`.load_songs`).html('')
      $(`.load_songs`).append(`<li><a href="/setlists/${id}">${set.name}</a>`)
      $(`.load_songs`).append(`<li>${set.comments}`)
      })
    })
  })
 }



//  function setlistShow() {
//    $(".index_setlists").on("click", function(e) {
//        e.preventDefault();
//
//    $.get(this.href, function(setlist){
//      console.log(setlist)
//
//      $(`.load_songs`).html('')
//      $(`.load_songs`).append(`${setlist}`)
//    })
//  })
// }
