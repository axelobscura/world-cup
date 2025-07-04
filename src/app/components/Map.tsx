'use client';
import React, { useEffect } from 'react';
import { MapContainer, Popup, TileLayer } from "react-leaflet";
import CustomMarker from './CustomMarker';

const locations: {
  name: string;
  position: [number, number];
  location: string;
  capacity: string;
}[] = [
  { 
    name: "Nueva York/Nueva Jersey – MetLife Stadium",
    position: [40.73, -73.93], 
    location: "East Rutherford, Nueva Jersey",
    capacity: "87,157",
  },
  { 
    name: "Los Ángeles – SoFi Stadium",
    position: [34.05, -118.24], 
    location: "Inglewood, California",
    capacity: "70,240",
  },
  { 
    name: "Dallas – AT&T Stadium",
    position: [32.77, -96.80], 
    location: "Arlington, Texas",
    capacity: "80,000",
  },
  { 
    name: "Atlanta – Mercedes-Benz Stadium",
    position: [33.75, -84.38], 
    location: "Atlanta, Georgia",
    capacity: "71,000",
  },
  { 
    name: "Miami – Hard Rock Stadium",
    position: [25.76, -80.19], 
    location: "Miami Gardens, Florida",
    capacity: "67,518",
  },
  { 
    name: "Houston – NRG Stadium",
    position: [29.74, -95.35], 
    location: "Houston, Texas",
    capacity: "72,220",
  },
  { 
    name: "Filadelfia – Lincoln Financial Field",
    position: [39.95, -75.16], 
    location: "Filadelfia, Pensilvania",
    capacity: "69,328",
  },
  { 
    name: "Seattle – Lumen Field",
    position: [47.60, -122.33], 
    location: "Seattle, Washington",
    capacity: "68,740",
  },
  { 
    name: "San Francisco/Bahía – Levi’s Stadium",
    position: [37.77, -122.43], 
    location: "Santa Clara, California",
    capacity: "68,500",
  },
  { 
    name: "Kansas City – Arrowhead Stadium",
    position: [39.09, -94.57], 
    location: "Kansas City, Misuri",
    capacity: "76,640",
  },
  { 
    name: "Boston – Gillette Stadium",
    position: [42.36, -71.05], 
    location: "Foxborough, Massachusetts",
    capacity: "65,878",
  },
  { 
    name: "Ciudad de México – Estadio Azteca",
    position: [19.45, -99.12], 
    location: "Ciudad de México",
    capacity: "87,523",
  },
  { 
    name: "Guadalajara – Estadio Akron",
    position: [20.65, -103.34], 
    location: "Zapopan, Jalisco",
    capacity: "48,071",
  },
  { 
    name: "Monterrey – Estadio BBVA",
    position: [25.68, -100.31], 
    location: "Guadalupe, Nuevo León",
    capacity: "53,500",
  },
  { 
    name: "Toronto – BMO Field",
    position: [43.65, -79.34], 
    location: "Toronto, Ontario",
    capacity: "45,500",
  },
  { 
    name: "Vancouver – BC Place",
    position: [49.24, -123.11], 
    location: "Vancouver, Columbia Británica",
    capacity: "54,500",
  }
]

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
      {locations.map((location, index) => (
        <CustomMarker key={index} position={location.position}>
          <Popup>
            <strong>{location.name}</strong><br />
            {location.location}<br />
            Capacidad: {location.capacity}
          </Popup>
        </CustomMarker>
      ))}
    </MapContainer>
  );
}