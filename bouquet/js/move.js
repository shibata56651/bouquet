const mov = document.getElementById('to-movie');
const photo = document.getElementById('to-photo');
const list = document.getElementById('to-namelist');
const anime = document.querySelector('.anime');
const anime2 = document.querySelector('.anime2');
const anime3 = document.querySelector('.anime3');


window.addEventListener('load', function(){
  mov.classList.add('anime');
  photo.classList.add('anime2');
  list.classList.add('anime3');
});

if (mov.style.height = "100vh") {
   mov.style.height = "100vh";
   // photo.classList.add('anime2');
}

if (photo.style.height = "100vh") {
   photo.style.height = "100vh";
   // list.classList.add('anime3');
}

if (list.style.height = "100vh") {
  list.style.height = "100vh";
}
