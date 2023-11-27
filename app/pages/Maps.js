"use client"
import React from 'react';
import { GoogleMap, LoadScript } from '@react-google-maps/api';
import styles from 'app/sass/maps.scss'



const Map = () => {
  const mapStyles = {
    height: '500px',
    width: '100%',
  };

  const defaultCenter = {
    lat: 40.712776,
    lng: -74.005974,
  };

  return (
    <LoadScript googleMapsApiKey={process.env.NEXT_PUBLIC_MAPS_API_KEY}>
      <GoogleMap
        mapContainerStyle={mapStyles}
        zoom={10}
        center={defaultCenter}
      ></GoogleMap>
    </LoadScript>
  );
};

export default Map;




// import { GoogleMap, LoadScript, Marker } from '@react-google-maps/api';
// import { useEffect, useState } from 'react';
// const MapComponent = () => {
//   const [map, setMap] = useState(null);
//   const defaultCenter = { lat: 40.712776, lng: -74.005974 };

//   const onLoad = (map) => {
//     setMap(map);
//   };

//   useEffect(() => {
//     if (map) {
//       // Do something with the map instance if needed
//       // e.g., map.setZoom(8);
//     }
//   }, [map]);

//   return (
//     <LoadScript googleMapsApiKey={process.env.NEXT_PUBLIC_MAPS_API_KEY}>
//       <GoogleMap
//         mapContainerStyle={{ height: '400px', width: '100%' }}
//         zoom={10}
//         center={defaultCenter}
//         onLoad={onLoad}
//       >
//         {/* Optional: Add markers or other components */}
//         <Marker position={defaultCenter} />
//       </GoogleMap>
//     </LoadScript>
//   );
// };

// export default MapComponent;

