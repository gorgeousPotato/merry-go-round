const showingMap = function(playgrounds) {
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
        playgrounds.forEach(playground => {
          const feature = {
            type: "Feature",
            geometry: {
              type: "Point",
              coordinates: [playground.lon, playground.lat],
            },
            properties: {
              title: 'Playground',
              description: playground.title,
            },
          };
          geojson.features.push(feature);
        });
        // add markers to map
        for (const feature of geojson.features) {
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

}

