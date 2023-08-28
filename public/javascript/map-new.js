
      mapboxgl.accessToken =
        "pk.eyJ1IjoiYmVhdXRpZnVscG90YXRvIiwiYSI6ImNsbHF0cXVwbzA0bWczc3N5YWM3OG4zMDMifQ.Tw_QZOJgFO36cVeypud_QQ";
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
      const marker = new mapboxgl.Marker();

      function add_marker (event) {
        const coordinates = event.lngLat;
        // console.log('Lng:', coordinates.lng, 'Lat:', coordinates.lat);
        document.getElementById("lat").value = coordinates.lat;
        document.getElementById("lon").value = coordinates.lng;
        marker.setLngLat(coordinates).addTo(map);
      }

      map.on('click', add_marker);
    