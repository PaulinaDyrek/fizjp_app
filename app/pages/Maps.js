'use client';
import { Loader } from "@googlemaps/js-api-loader";
import React, {useEffect} from "react";

export default function Map(){

  const mapRef = React.useRef(null);

  useEffect(() => {
    const initMap = async () => {
      
      const loader = new Loader({
        apiKey: process.env.AIzaSyCwG-rvKlbam5-b2U3MuwliKxLYznhWhQs,
        version: 'weekly'
      });

      const { Map } = await loader.importLibrary('maps');

      const position = {
        lat: 43.642693,
        lng: -79.3871189
      }

      const mapOptions = google.maps.MapOptions = {
        center: position,
        zoom: 17,
      }

      const map = new Map(mapRef.current, mapOptions);

    }
    initMap();

  }, []);
  return(
    <div style={{ height: '600px'}} ref={mapRef} />
  )
}

// api key jak w filmiku tak zrobiv ze bd folder local
// htmlDivEkement tez cos naprawic bo wyskakuje blad