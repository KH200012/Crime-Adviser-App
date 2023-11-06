// Draw Pie Chart
var years = [];
var districts = [];
const xValues = []; // xValues[district] returns xValues for that district
var yValues = []; // yValues[district][year] returns yValues for that district-year pair
var year = -1; // 8 years 2015 - 2022
var district = -1; // 14 districts
const excel_file = document.getElementById('excel_file');
var this_year=2022;
var address = 1;

// Define Map
let map;
map = new google.maps.Map(document.getElementById("map"), {
    center: { lat:59.3312, lng:18.0407 },
    zoom: 11,
});

//Define area center position 
var positions = new Array();
positions[0] = {lat:59.3312, lng:18.0207};
positions[1] = {lat:59.3377, lng:18.09};
positions[2] = {lat:59.3398, lng:17.9397};
positions[3] = {lat:59.2744, lng:17.9020};
positions[4] = {lat:59.3125,lng:18.0616};
positions[5]= {lat:59.3036,lng:18.0065};
positions[6] = {lat:59.3346,lng:18.0605};
positions[7] = {lat:59.2583,lng:18.0835};
positions[8] = {lat:59.3662,lng:17.86};
positions[9] = {lat:59.2649,lng:18.1425};
positions[10] = {lat:59.3817,lng:17.9013};
positions[11] = {lat:59.2745,lng:18.0051};
positions[12] = {lat:59.2763,lng:18.0585};
positions[13] = {lat:59.3973,lng:17.9397};
//Define Map Area name
//Area Num 17
// var areaNames = ['Lidingo', 'UpplandsBro', 'UpplandsVasby', 'Kungsholmens', 'Östermalms', 'Bromma', 'Skärholmens', 'Södermalms', 'HägerstenLiljeholmens', 'Norrmalms', 'Farsta', 'HässelbyVällingby', 'Skarpnäcks', 'SpångaTensta', 'Alvsjo', 'EnskedeÅrstaVantörs', 'RinkebyTensta'];
// Num 14
var areaNames = ['Kungsholmens', 'Östermalms', 'Bromma', 'Skärholmens', 'Södermalms', 'HägerstenLiljeholmens', 'Norrmalms', 'Farsta', 'HässelbyVällingby', 'Skarpnäcks', 'SpångaTensta', 'Alvsjo', 'EnskedeÅrstaVantörs', 'RinkebyTensta'];
// Define Polygon Array
var polygons = new Array();
// var colors = ["#810FCB", "#FF0000", "#00FF7F", "#00FF7F", "#DEB887", "#7FFF00", "#6495ED", "#00FFFF", "#008B8B", "B8860B", "#8B008B", "#9400D3", "#1E90FF", "#228B22", "#FF00FF", "#F08080", "#0000CD"]
var colors = ["#00FF7F", "#DEB887", "#7FFF00", "#6495ED", "#00FFFF", "#008B8B", "B8860B", "#8B008B", "#9400D3", "#1E90FF", "#228B22", "#FF00FF", "#F08080", "#0000CD"]
for(var i = 0; i < areaNames.length; i++){
    var tmp = new google.maps.Polygon({
        paths:coordinates[i],
        strokeColor: colors[i],
        strokeOpacity: 1.0,
        strokeWeight: 3.0,
        fillColor: colors[i],
        fillOpacity: 0.5,
    });
    polygons.push(tmp);
}
// Set polygon to Map
for(var i = 0; i < areaNames.length; i++){
    polygons[i].setMap(map);
}

// Define Marks on the map
var marks = new Array();
var infoWindows = new Array();
for (var i = 0; i < areaNames.length; i++){
    var tmpMark = new google.maps.Marker({
        position: positions[i],
        map,
        title: areaNames[i],
    });
    marks.push(tmpMark);
}