import React from "react";
import L from "leaflet";
import MakrerUrl from "../../../public/soccerball.svg";
import { Marker } from "react-leaflet";

interface CustomMarkerProps {
  position: L.LatLngExpression;
  children: React.ReactNode;
}

const CustomMarker: React.FC<CustomMarkerProps> = ({ position, children }) => {
  const customIcon = L.icon({
    iconUrl: MakrerUrl.src,
    iconSize: [35, 35],
    iconAnchor: [20, 20],
  });

  return (
    <Marker position={position} icon={customIcon}>
      {children}
    </Marker>
  );
};

export default CustomMarker;