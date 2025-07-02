'use client';
import React, { useEffect } from 'react';
import { MapContainer, Marker, Popup, TileLayer, useMap } from "react-leaflet";

export default function Map() {
  useEffect(() => {
    // This code runs only on the client
    if (typeof window !== 'undefined') {
      console.log(window.innerWidth);
    }
  }, []);
  return (
    <MapContainer center={[51.505, -0.09]} zoom={13} scrollWheelZoom={false} className='leaflet-container'>
      <Marker position={[51.505, -0.09]}>
        <Popup>
          This is a popup
        </Popup>
      </Marker>
    </MapContainer>
  );
}