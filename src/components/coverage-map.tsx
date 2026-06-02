"use client";

import { MapContainer, TileLayer, CircleMarker, Tooltip } from "react-leaflet";
import "leaflet/dist/leaflet.css";
import { locations } from "@/lib/locations";

/** Interactieve dekkingskaart (sleep- en zoombaar). */
export default function CoverageMap() {
  return (
    <MapContainer
      center={[52.15, 5.3]}
      zoom={7}
      scrollWheelZoom={false}
      style={{ height: "100%", width: "100%" }}
      className="z-0"
    >
      <TileLayer
        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a>'
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
      />
      {locations.map((l) => (
        <CircleMarker
          key={l.name}
          center={[l.lat, l.lng]}
          radius={9 + Math.min(l.buddies / 30, 8)}
          pathOptions={{
            color: "#1a4878",
            weight: 2,
            fillColor: "#8dc93f",
            fillOpacity: 0.85,
          }}
        >
          <Tooltip direction="top" offset={[0, -4]}>
            <span style={{ fontWeight: 700 }}>{l.name}</span> · {l.buddies}{" "}
            buddies
          </Tooltip>
        </CircleMarker>
      ))}
    </MapContainer>
  );
}
