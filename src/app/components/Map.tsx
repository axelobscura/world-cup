'use client';
import React, { useEffect } from 'react';
import { MapContainer, Marker, Popup, TileLayer } from "react-leaflet";
import CustomMarker from './CustomMarker';

export default function Map() {
  useEffect(() => {
    // This code runs only on the client
    if (typeof window !== 'undefined') {
      console.log(window.innerWidth);
    }
  }, []);
  return (
    <MapContainer center={[37.09, -92.02]} zoom={5} scrollWheelZoom={false} className='leaflet-container'>
      <TileLayer
        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
      />
      <CustomMarker position={[37.09, -92.02]}>
        <Popup>
          This is a popup
        </Popup>
      </CustomMarker>
      <CustomMarker position={[19.420, -99.138]}>
        <Popup>
          This is a popup
        </Popup>
      </CustomMarker>
    </MapContainer>
  );
}