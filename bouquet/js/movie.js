let h201 = document.getElementById('H201');
let h202 = document.getElementById('H202');
let h203 = document.getElementById('H203');
let h204 = document.getElementById('H204');
let h205 = document.getElementById('H205');
let h206 = document.getElementById('H206');
let h207 = document.getElementById('H207');
let h208 = document.getElementById('H208');
let g201 = document.getElementById('G201');
let g202 = document.getElementById('G202');
let g203 = document.getElementById('G203');
let g204 = document.getElementById('G204');
let g205 = document.getElementById('G205');
let g206 = document.getElementById('G206');
let movie = document.getElementById('movie');

h201.addEventListener('click', function(){
  h201.style.background = "#717171";
  movie.outerHTML = '<iframe id="movie" src="https://www.youtube.com/embed/nKSWyEHbdVs" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>';
});
