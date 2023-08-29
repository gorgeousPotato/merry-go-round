const showingMap = function(lat, lon, title, token) {
  mapboxgl.accessToken = token;
  const map = new mapboxgl.Map({
  container: "map", // container ID
  // Choose from Mapbox's core styles, or make your own style with Mapbox Studio
  style: "mapbox://styles/mapbox/streets-v12", // style URL
  center: [Number(lon), Number(lat)], // starting center in [lng, lat]
  zoom: 8, // starting zoom
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
const feature = 
    {
      type: "Feature",
      geometry: {
        type: "Point",
        coordinates: [
          Number(lon),
          Number(lat),
        ],
      },
      properties: {
        title: "Playground",
        description: title,
      },
    };
  
    // add a marker to map
    const marker = new mapboxgl.Marker();
    const coordinates = feature.geometry.coordinates;
    marker.setLngLat(coordinates)
    .setPopup(
      new mapboxgl.Popup({ offset: 25 }) // add popups
      .setHTML(
        `<h3>${feature.properties.title}</h3><p>${feature.properties.description}</p>`
        )
        )
        .addTo(map);
      }
    
      
   