mapboxgl.accessToken =
  "pk.eyJ1IjoiYmVhdXRpZnVscG90YXRvIiwiYSI6ImNsbHF0cXVwbzA0bWczc3N5YWM3OG4zMDMifQ.Tw_QZOJgFO36cVeypud_QQ";
const map = new mapboxgl.Map({
  container: "map", // container ID
  // Choose from Mapbox's core styles, or make your own style with Mapbox Studio
  style: "mapbox://styles/mapbox/streets-v12", // style URL
  center: [42, 42], // starting center in [lng, lat]
  zoom: 3, // starting zoom
});

// Add geolocate control to the map.
map.addControl(
  new mapboxgl.GeolocateControl({
    positionOptions: {
      enableHighAccuracy: true,
    },
    // When active the map will receive updates to the device's location as it changes.
    trackUserLocation: true,
    // Draw an arrow next to the location dot to indicate which direction the device is heading.
    showUserHeading: true,
  })
);

const geojson = {
  type: "FeatureCollection",
  features: [],
};
Playground.forEach(pg => {
  const feature = {
    type: "Feature",
    geometry: {
      type: "Point",
      coordinates: [pg.lat, pg.lon],
    },
    properties: {
      title: pg.title,
    },
  };
  geojson.features.push(feature);
});
console.log(geojson.features);
// add markers to map
for (const feature of geojson.features) {
  // create a HTML element for each feature
  const el = document.createElement("div");
  el.className = "marker";

  // make a marker for each feature and add to the map
  new mapboxgl.Marker(el).setLngLat(feature.geometry.coordinates).addTo(map);
}
