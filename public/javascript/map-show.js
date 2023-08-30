const showingMap = function (lat, lon, title, token) {
  mapboxgl.accessToken = token;
  const map = new mapboxgl.Map({
    container: "map", // container ID
    // Choose from Mapbox's core styles, or make your own style with Mapbox Studio
    style: "mapbox://styles/mapbox/streets-v12", // style URL
    center: [Number(lon), Number(lat)], // starting center in [lng, lat]
    zoom: 13, // starting zoom
  });

  // // Add geolocate control to the map.
  // map.addControl(
  //   new mapboxgl.GeolocateControl({
  //     positionOptions: {
  //       enableHighAccuracy: true,
  //     },
  //     // When active the map will receive updates to the device's location as it changes.
  //     trackUserLocation: true,
  //     // Draw an arrow next to the location dot to indicate which direction the device is heading.
  //     showUserHeading: true,
  //   })
  // );
  let userLon, userLat;
  const geolocate = new mapboxgl.GeolocateControl();
  map.addControl(geolocate);
  geolocate.on("geolocate", function (e) {
    userLon = e.coords.longitude;
    userLat = e.coords.latitude;
    const distance = getDistance(lat, lon, userLat, userLon);
    document.getElementById("distance").classList.remove("hidden");
    document.getElementById(
      "distance"
    ).innerHTML = `distance: ${distance.toFixed(2)} km`;
    map.fitBounds([
      [userLon, userLat],
      [lon, lat],
    ]);
  });

  function getDistance(lat1, lon1, lat2, lon2) {
    const R = 6371; //radius of the Earth in km
    const dLat = degToRad(lat2 - lat1);
    const dLon = degToRad(lon2 - lon1);
    const a =
      Math.sin(dLat / 2) * Math.sin(dLat / 2) +
      Math.cos(degToRad(lat1)) *
        Math.cos(degToRad(lat2)) *
        Math.sin(dLon / 2) *
        Math.sin(dLon / 2);
    const c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));
    const d = R * c;
    return d;
  }

  function degToRad(deg) {
    return deg * (Math.PI / 180);
  }
  //calculated the distance between the geolocation of the User and the playground
  const distance = getDistance(lon, lat, userLat, userLon);
  document.getElementById("distance").innerHTML = distance;

  const feature = {
    type: "Feature",
    geometry: {
      type: "Point",
      coordinates: [Number(lon), Number(lat)],
    },
    properties: {
      title: "Playground",
      description: title,
    },
  };

  // add a marker to map
  const marker = new mapboxgl.Marker();
  const coordinates = feature.geometry.coordinates;
  marker
    .setLngLat(coordinates)
    .setPopup(
      new mapboxgl.Popup({ offset: 25 }) // add popups
        .setHTML(
          `<h4>${feature.properties.title}</h4><p>${feature.properties.description}</p>`
        )
    )
    .addTo(map);
};
