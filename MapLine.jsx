import React from "react";
import {
  MapContainer,
  TileLayer,
  Marker,
  Popup,
  LayersControl,
  LayerGroup,
  useMap,
} from "react-leaflet";
import L from "leaflet";
import "leaflet/dist/leaflet.css";
import "leaflet-mouse-position";
import { BsCameraReels } from "react-icons/bs";
import image from "./logo192.png";

const MousePositionControl = () => {
  const map = useMap();

  React.useEffect(() => {
    L.control.mousePosition().addTo(map);
  }, [map]);

  return null;
};

const MapLine = () => {
  const cameraIcon = new L.Icon({
    iconUrl: image, // You should create an SVG icon or use an existing one
    iconSize: [25, 25], // Adjust the size as needed
  });
  const cameraPositions = [
    [40.7, 65.3],
    [40.8, 65.4],
    [40.9, 65.5],
  ];
  const cityPositions = [
    [40.6, 65.2],
    [40.5, 65.1],
  ];

  return (
    <MapContainer
      center={[40.61395, 65.32]}
      zoom={6}
      style={{ height: "100vh", width: "100%" }}
    >
      <LayersControl position="topright">
        <LayersControl.BaseLayer name="OpenStreetMap">
          <TileLayer
            url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
            attribution="&copy; OpenStreetMap contributors"
          />
        </LayersControl.BaseLayer>

        <LayersControl.BaseLayer name="Satellite View">
          <TileLayer
            url="https://basemap.nationalmap.gov/arcgis/rest/services/USGSImageryTopo/MapServer/tile/{z}/{y}/{x}"
            attribution="&copy; Satellite Map Contributors"
          />
        </LayersControl.BaseLayer>

        <LayersControl.Overlay checked name="Cameras">
          <LayerGroup>
            {cameraPositions.map((position, idx) => (
              <Marker key={`camera-${idx}`} position={position}>
                <Popup>Camera {idx + 1}</Popup>
              </Marker>
            ))}
          </LayerGroup>
        </LayersControl.Overlay>

        <LayersControl.Overlay name="Cities">
          <LayerGroup>
            {cityPositions.map((position, idx) => (
              <Marker key={`city-${idx}`} position={position} icon={cameraIcon}>
                <Popup>City {idx + 1}</Popup>
              </Marker>
            ))}
          </LayerGroup>
        </LayersControl.Overlay>
      </LayersControl>
      <MousePositionControl />
    </MapContainer>
  );
};

export default MapLine;
