
let map;
//@ts-ignore
let featureLayer;

function initMap() {
  map = new google.maps.Map(document.getElementById("map"), {
    center: { lat: 20.773, lng: -156.01 },
    zoom: 12,
    // In the cloud console, configure this Map ID with a style that enables the
    // "Locality" feature layer.
    mapId: "aebb566326d9c7ba", // <YOUR_MAP_ID_HERE>,
  });
  //@ts-ignore
  featureLayer = map.getFeatureLayer("LOCALITY");

  // Define a style with purple fill and border.
  //@ts-ignore
  const featureStyleOptions = {
    strokeColor: "#810FCB",
    strokeOpacity: 1.0,
    strokeWeight: 3.0,
    fillColor: "#810FCB",
    fillOpacity: 0.5,
  };

  // Apply the style to a single boundary.
  //@ts-ignore
  featureLayer.style = (options) => {
    if (options.feature.placeId == "ChIJCzv_UyWcX0YRVN4aA80F1sg") {
      // Hana, HI
      return featureStyleOptions;
    }
  };
}

window.initMap = initMap;