
function initMap() {
  let leicester = {lat: 52.6333, lng: -1.1333};
  let trueGamer = {lat: 52.629311, lng: -1.137836};
  let mapDemo = document.getElementById("map");

  // When the map is loaded this will set the default location 
  let map = new google.maps.Map(mapDemo, {
    zoom: 13,
    center: leicester
  });

  // This sets a marker on the mnap showing the loacation of the office
  let markerDMU = new google.maps.Marker({
    position: trueGamer,
    map: map,
    title: 'TrueGamer Office'
  });
}


let sliderImages = document.querySelectorAll('.slide'),
    arrowLeft = document.querySelector('#arrow-left'),
    arrowRight = document.querySelector('#arrow-right'),
    current = 0;

// This function will clear all the images
function reset(){
  for(let i = 0; i < sliderImages.length; i++){
    sliderImages[i].style.display = 'none';
  }
}

 function startSlide(){
   reset();
   sliderImages[0].style.display = 'block';
 }

 //show previous images
 function slideLeft(){
   reset();
   sliderImages[current - 1].style.display = 'block';
   current--;
 }

 function slideRight(){
   reset();
   sliderImages[current + 1].style.display = 'block';
   current++;
 }

 arrowLeft.addEventListener('click', function(){
   if(current === 0){
     current = sliderImages.length;
   }
   slideLeft();
 });

 arrowRight.addEventListener('click', function(){
   if(current === sliderImages.length - 1){
     current = -1
   }
   slideRight();
 });

 startSlide();
