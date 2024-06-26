import React, { useEffect, useRef } from "react";
import { Loader } from "@googlemaps/js-api-loader";
import styles from "./MapSection.module.css";

const containerStyle = {
  width: "100%",
  height: "400px",
};

const MapSection = ({ store }) => {
  const mapRef = useRef(null);
  const mapInstanceRef = useRef(null);
  const markerRef = useRef(null);
  const apiKey = import.meta.env.VITE_GOOGLE_MAPS_KEY;

  useEffect(() => {
    const loader = new Loader({
      apiKey: apiKey,
      version: "weekly",
      libraries: ["marker"],
    });

    loader
      .load()
      .then(() => {
        if (store && mapRef.current) {
          const lat = parseFloat(store.latitude);
          const lng = parseFloat(store.longitude);

          if (!isNaN(lat) && !isNaN(lng)) {
            const position = { lat, lng };

            if (!mapInstanceRef.current) {
              mapInstanceRef.current = new window.google.maps.Map(
                mapRef.current,
                {
                  center: position,
                  zoom: 15,
                  mapId: "DEMO_MAP_ID",
                }
              );

              google.maps
                .importLibrary("marker")
                .then(({ AdvancedMarkerElement }) => {
                  markerRef.current = new AdvancedMarkerElement({
                    map: mapInstanceRef.current,
                    position: position,
                    title: store.name,
                  });
                });
            } else {
              mapInstanceRef.current.setCenter(position);
              markerRef.current.position = position;
              markerRef.current.title = store.name;
            }
          } else {
            console.error("Invalid latitude or longitude values:", lat, lng);
          }
        }
      })
      .catch((e) => {
        console.error("Error loading Google Maps API", e);
      });
  }, [store, apiKey]);

  return (
    <div className={styles.mapContainer}>
      <div ref={mapRef} style={containerStyle}></div>
    </div>
  );
};

export default MapSection;
