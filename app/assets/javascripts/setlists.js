 $(document).ready(function() {
     setlistShow();
 })

 class SetList {
   constructor(title, comments){
     this.title = title
     this.comments = comments
   }

   render(){
     document.querySelector('#load_songs').innerHTML = `<div class="load_songs"></div>`
   }
 }

 function setlistShow() {
     $(".index_setlists").on("click", function(e) {
         e.preventDefault();
         $.ajax({
             method: "GET",
             url: `${this.href}.json`
         }).done(function(response) {
         console.log(response)
         res = [{}, {}]
         res.sort()
         res.forEach
         debugger
         let set = setlist(response)

         `<li> ${set.title} </li>`
             $(".load_songs").html(set.renderHTML(response))
         })
     })
 }

 // index = initially render through javascript
 // has_many = setlist (onCLick) => setlist.song

//
// function setlist() {
//   //attributes
//   const setlistId = $("div.info").attr("data")
//   $.get("/setlists/" + setlistId + ".json", function(data) {
// debugger
//   //functions
//   function renderHTML() {
//
//   }
// }
// }
