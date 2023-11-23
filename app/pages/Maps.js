"use client"
import React from 'react';
import { GoogleMap, LoadScript } from '@react-google-maps/api';

const Map = () => {
  const mapStyles = {
    height: '400px',
    width: '100%',
  };

  const defaultCenter = {
    lat: 40.712776,
    lng: -74.005974,
  };

  return (
    <LoadScript googleMapsApiKey='AIzaSyCwG-rvKlbam5-b2U3MuwliKxLYznhWhQs'>
      <GoogleMap
        mapContainerStyle={mapStyles}
        zoom={10}
        center={defaultCenter}
      ></GoogleMap>
    </LoadScript>
  );
};

export default Map;

// import { Loader } from "@googlemaps/js-api-loader"
// import React, { useEffect } from "react"

// export default function Map() {
//   const mapRef = React.useRef(null)

//   useEffect(() => {
//     const initMap = async () => {
//       const loader = new Loader({
//         apiKey: process.env.NEXT_PUBLIC_MAPS_API_KEY,
//         version: "weekly"
//       })

//       const { Map } = await loader.importLibrary("maps")

//       const { Marker } = await loader.importLibrary("marker")

//       const position = {
//         lat: 49.60592,
//         lng: 20.49092
//       }

//       const mapOptions = (google.maps.MapOptions = {
//         center: position,
//         zoom: 17
//       })

//       const map = new Map(mapRef.current, mapOptions)

//       const marker = new Marker({
//         map: map,
//         position: position
//       })
//     }
//     initMap()
//   }, [])
//   return <div style={{ height: "400px", marginBottom: "5px" }} ref={mapRef} />
// }



// import { Loader } from "@googlemaps/js-api-loader";
// import React, {useEffect} from "react";

// export default function Map(){

//   const mapRef = React.useRef<HTMLDivElement>(null);

//   useEffect(() => {
//     const initMap = async () => {
      
//       const loader = new Loader({
//         apiKey: process.env.NEXT_PUBLIC_MAPS_API_KEY as string,
//         version: 'weekly'
//       });

//       const { Map } = await loader.importLibrary('maps');

//       const position = {
//         lat: 46.642693,
//         lng: -74.3871189
//       }

//       const mapOptions = google.maps.MapOptions = {
//         center: position,
//         zoom: 17,
//       }

//       const map = new Map(mapRef.current as HTMLDivElement, mapOptions);

//     }
//     initMap();

//   }, []);
//   return(
//     <div style={{ height: '400px',marginBottom: '5px'}} ref={mapRef} />
//   )
// }

// api key jak w filmiku tak zrobiv ze bd folder local
// htmlDivEkement tez cos naprawic bo wyskakuje blad