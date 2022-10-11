mapboxgl.accessToken = 'pk.eyJ1IjoiamFja3RoZXlhbiIsImEiOiJjbDk0MHY0ZGUxbW5nM29sZnlzNG13ajE3In0.KqTCDv1XodBLiqxO0joyZA'

var map = new mapboxgl.Map({
    container:'map',
    style:'mapbox://styles/mapbox/streets-v9',
    center:[-71.104081, 42.365554],
    zoom:12
})

var marker = new mapboxgl.Marker({ "color":  "#FF4500" })
.setLngLat([-71.093727,42.359242])
.addTo(map);

const busStops=[
    [-71.093727, 42.359242],
    [-71.094913, 42.360173],
    [-71.0956, 42.360696],
    [-71.099556, 42.362951],
    [-71.103474, 42.365246],
    [-71.106065, 42.366804],
    [-71.108715, 42.368353],
    [-71.110797, 42.369190],
    [-71.113093, 42.370216],
    [-71.115474, 42.372083],
    [-71.117583, 42.373014],
    [-71.118623, 42.374861],
]

var counter = 0;
function move(){
    setTimeout(() =>{
        if(counter >= busStops.length) return;
        marker.setLngLat(busStops[counter]);
        counter++;
        move();
    },1000)
}