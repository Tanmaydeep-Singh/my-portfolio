//DarkMode
function DarkMode(){
  var DM = document.body;
  DM.classList.toggle("dark-mode");

}

//Skill
function HideBasic(){    
  var HB = document.getElementById("Basic");
  HB.classList.toggle("Basic-Hidden");
 
  var HD = document.getElementsByClassName("Detailed")[0];
  HD.classList.toggle("Detailed-Display");

  var HSB = document.getElementsByClassName("Skill-Box")[0];
  HSB.classList.toggle("Skill-Box-Display");

  var button = document.getElementsByClassName("bton")[0];
  button.classList.toggle("btn") ;               

};

// //Preloader
var loader = document.getElementById("PreLoader");
window.addEventListener("load", function () {
  loader.style.display = "none";
});
