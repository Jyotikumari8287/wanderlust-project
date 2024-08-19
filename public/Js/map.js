mapboxgl.accessToken = mapToken;

 const map = new mapboxgl.Map({
    container: "map", // container ID
    // Choose from Mapbox's core styles, or make your own style with Mapbox studio
    style: "mapbox://styles/mapbox/streets-v12", // style URL
    center: listing.geometry.coordinates, // starting position [lng, lat]. Note that lat must be set between -90 and 90
    zoom: 9 // starting zoom
});

const marker = new mapboxgl.Marker({ color: "red" })
   .setLngLat(listing.geometry.coordinates) //Listing.gemetry.coordinates
   .setPopup(
      new mapboxgl.Popup({ offset: 25 }).setHTML(
        `<h4>${listing.title}</h4><P>Exact Location will be privided after booking</p>`
      )
    )
   .addTo(map);


   