import React from "react";

import Map, { Marker } from "react-map-gl/maplibre";
import maplibregl from "maplibre-gl";
import "maplibre-gl/dist/maplibre-gl.css";

const LocationMap = () => {
  return (
    <div style={{ width: "100%", height: "100%", position: "relative" }}>
      <Map
        mapLib={maplibregl}
        initialViewState={{
          longitude: 103.8198,
          latitude: 1.3521,
          zoom: 11,
        }}
        style={{ width: "100%", height: "100%", borderRadius: "0" }}
        mapStyle="https://basemaps.cartocdn.com/gl/dark-matter-gl-style/style.json"
        attributionControl={false}
      >
        <Marker
          longitude={103.8198}
          latitude={1.3521}
          color="var(--highlight)"
        />
      </Map>

      <div
        style={{
          position: "absolute",
          bottom: "10px",
          left: "10px",
          background: "rgba(69, 71, 90, 0.9)",
          padding: "5px 10px",
          border: "1px solid var(--highlight)",
          color: "#fff",
          fontFamily: "Space Mono, monospace",
          fontSize: "0.8rem",
          fontWeight: "bold",
          pointerEvents: "none",
        }}
      >
        📍 Singapore
      </div>
    </div>
  );
};

export default LocationMap;
