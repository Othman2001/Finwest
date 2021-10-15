import '../sass/styles.sass';

const menuIndiactor = document.getElementById("meunuIndictor");
const uppernav = document.getElementById("uppernav");
const openMenu = document.getElementById("open");
openMenu.addEventListener("click" , function (){
  const navbar = document.getElementById("navbar");
  navbar.classList.add("block")
  navbar.classList.remove("hidden")
  openMenu.classList.add("hidden");
  uppernav.classList.add("hidden");
})
menuIndiactor.addEventListener("click" , function (){
  const navbar = document.getElementById("navbar");
  navbar.classList.add("hidden");
  openMenu.classList.remove("hidden");
  uppernav.classList.remove("hidden")
})
