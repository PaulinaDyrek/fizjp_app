"use client"
import React from 'react';
import { GoogleMap, LoadScript } from '@react-google-maps/api';
import styles from 'app/sass/maps.scss'

export default function Maps () {
  return(
    <div ><iframe className='map'  src="https://maps.google.com/maps?width=100%25&amp;height=400&amp;hl=en&amp;q=%C5%81ukowica%20440+(Fizjostacja)&amp;t=&amp;z=14&amp;ie=UTF8&amp;iwloc=B&amp;output=embed"></iframe></div>
  )
}

// const Map = () => {
//   const mapStyles = {
//     height: '500px',
//     width: '100%',
//   };

//   const defaultCenter = {
//     lat: 40.712776,
//     lng: -74.005974,
//   };

//   return (
//     <LoadScript googleMapsApiKey={process.env.NEXT_PUBLIC_MAPS_API_KEY}>
//       <GoogleMap className='map'
//         mapContainerStyle={mapStyles}
//         zoom={10}
//         center={defaultCenter}
//       ></GoogleMap>
//     </LoadScript>
//   );
// };

// export default Map;




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

