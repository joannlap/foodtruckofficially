   $(document).ready(function () {
     var hamburger = document.querySelector('.icon');
     var menuLinks = document.querySelector('ul');

     hamburger.addEventListener('click', function () {
       menuLinks.classList.toggle('menuVisible');
     })
     $('.icon').click(function () {
       $('.icon').toggleClass('active');
     })
   })

   //  var buttons = document.querySelectorAll(".categories")
   //  var allItems = document.querySelectorAll(".filter")

   //  function filter() {
   //    //this.id should equal the class that is being shown
   //    var id = this.id
   //    console.log("Currently filtering on class: \"" + id + "\".")