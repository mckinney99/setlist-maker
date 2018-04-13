 $(document).ready(function() {
     setlistShow();
     // setlist();
 })

 function setlistShow() {
     $("a.index_setlists").on("click", function(e) {
         e.preventDefault();
         $.ajax({
             method: "GET",
             url: `${this.href}.json`
         }).done(function(response) {
         console.log(response)
         res = [{}, {}]
         res.sort()
         res.forEach
         // let set = new SetList(response)
         set.id
         `<li> ${set.id} </li>`
             $("div.load_songs").html(set.renderHTML())
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
