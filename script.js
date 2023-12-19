//OLIVE TOUR PAGE MAP
mapboxgl.accessToken = 'pk.eyJ1IjoicG9seXpvZ29wIiwiYSI6ImNsb2RleXlndzA3N20yam12b2Y1YWJheDEifQ.lr19uXoW-aPJmyhslL_TcA';
const monument = [21.40566777105378, 38.00852772794091];
const map = new mapboxgl.Map({
container: 'map',
style: 'mapbox://styles/mapbox/dark-v11', // I chose a darker style for the map
center: monument,
zoom: 13
});
 
// popup text
const popup = new mapboxgl.Popup({ offset: 25 }).setText(
'Olive Grove Tour'
);
 
// DOM element for the marker
const el = document.createElement('div');
el.id = 'marker';
 
// creating the marker
new mapboxgl.Marker(el)
.setLngLat(monument)
.setPopup(popup) 
.addTo(map);


//RESPONSIVENESS FOR MOBILE
function toggleMenu() {
    
  let menuToggle = document.querySelector('.menu-toggle')
  let menuToggleDisplay = window.getComputedStyle(menuToggle).getPropertyValue('display');

  if (menuToggleDisplay === "none")
  {
      menuToggle.style.display = "block";
  } else {
      menuToggle.style.display = "none";
  }
}



