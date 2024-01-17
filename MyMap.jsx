import React from "react";
import { MapContainer, TileLayer, Polyline, useMap } from "react-leaflet";
import "leaflet/dist/leaflet.css";
import L from "leaflet";
import "leaflet-mouse-position";

const MousePositionControl = () => {
  const map = useMap();

  React.useEffect(() => {
    L.control.mousePosition().addTo(map);
  }, [map]);

  return null;
};

const MapComponent = () => {
  const flatCoordinates = [
    40.0, 65.0, 40.01, 65.01, 40.02, 65.02, 40.03, 65.03, 40.04, 65.04, 40.05,
    65.05,
  ];

  const lineSegments = [
    [
      [40.61395, 65.32],
      [40.8, 66],
    ], // First visible segment
    [
      [41, 67],
      [41.2, 68],
    ], // Second visible segment
    // Add more segments as needed
  ];

  const lineSegment = [];
  for (let i = 0; i < flatCoordinates.length; i += 4) {
    const segment = [
      [flatCoordinates[i], flatCoordinates[i + 1]], // First point of the segment
      [flatCoordinates[i + 2], flatCoordinates[i + 3]], // Second point of the segment
    ];
    lineSegment.push(segment);
  }

  console.log(lineSegment);

  return (
    <MapContainer
      center={[40.61395, 65.32]}
      zoom={6}
      style={{ height: "100vh", width: "100%" }}
    >
      <TileLayer
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        attribution="&copy; OpenStreetMap contributors"
      />
      <MousePositionControl />
      {lineSegment.map((segment, index) => (
        <Polyline
          key={index}
          positions={segment}
          color="red"
          dashArray="5, 10" // Customize dash pattern here
          weight={5}
        />
      ))}
    </MapContainer>
  );
};

export default MapComponent;
