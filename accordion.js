var acc = document.getElementsByClassName("accordion");
var i;

for (i = 0; i < acc.length; i++) {
  acc[i].addEventListener("click", function() {
    /* Toggle between adding and removing the "active" class,
    to highlight the button that controls the panel */
    this.classList.toggle("active");

    /* Toggle between hiding and showing the active panel */
    var panel = this.nextElementSibling;
    if (panel.style.display === "block") {
      panel.style.display = "none";
    } else {
      panel.style.display = "block";
    }
  });
}

// const signUpButton=document.getElementById('signUpButton');
// const ezbel=document.getElementById('ezzy');
const signInForm=document.getElementById('signInForm');
const signUpForm=document.getElementById('signUpForm');
signUpForm.addEventListener('click',function(){
    signInForm.style.display="none";
    signUpForm.style.display="block";
});

signInForm.addEventListener('click',function(){
    signInForm.style.display="block";
    signUpForm.style.display="none";
});

const person={
  name: "John",
  age: "30",
  City: "New York"
};
let txt="";
for(let x in person){
  text+=person[x]+" ";
};
document.getElementById("demo").innerHTML=txt;

