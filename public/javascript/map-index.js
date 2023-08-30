const showingMap = function (playgrounds, token) {
  mapboxgl.accessToken = token;
  const map = new mapboxgl.Map({
    container: "map", // container ID
    // Choose from Mapbox's core styles, or make your own style with Mapbox Studio
    style: "mapbox://styles/mapbox/streets-v12", // style URL
    center: [42, 42], // starting center in [lng, lat]
    zoom: 1, // starting zoom
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
  playgrounds.forEach(playground => {
    const feature = {
      type: "Feature",
      geometry: {
        type: "Point",
        coordinates: [playground.lon, playground.lat],
      },
      properties: {
        title: playground.title,
        link: `/playgrounds/${playground._id}`,
      },
    };
    geojson.features.push(feature);
  });
  // add markers to map
  for (const feature of geojson.features) {
    const marker = new mapboxgl.Marker();
    const coordinates = feature.geometry.coordinates;
    marker
      .setLngLat(coordinates)
      .setPopup(
        new mapboxgl.Popup({ offset: 25 }) // add popups
          .setHTML(
            `<h4>${feature.properties.title}</h4><a href="${feature.properties.link}">see more</a>`
          )
      )
      .addTo(map);
  }
};
