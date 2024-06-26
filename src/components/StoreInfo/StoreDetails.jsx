import React, { useEffect, useRef } from "react";
import { Loader } from "@googlemaps/js-api-loader";
import styles from "./StoreDetails.module.css";

const containerStyle = {
  width: "100%",
  height: "400px",
};

const StoreDetails = ({ store }) => {
  const mapRef = useRef(null);
  const mapInstanceRef = useRef(null);
  const markerRef = useRef(null);

  useEffect(() => {
    const loader = new Loader({
      apiKey: import.meta.env.VITE_GOOGLE_MAPS_KEY,
      version: "weekly",
      libraries: ["marker"], // Add the marker library
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
                  mapId: "DEMO_MAP_ID", // default demo map ID
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
  }, [store]);

  if (!store) {
    return <div>Loading...</div>;
  }

  return (
    <div className={styles.storeDetails}>
      <h1>{store.name}</h1>
      <p>
        <strong>Address:</strong> {store.address}
      </p>
      <p>
        <strong>Hours:</strong> {store.hours}
      </p>
      <p>
        <strong>Services:</strong> {store.services}
      </p>
      <p>
        <strong>ZX Premium:</strong> ${store.ZX_Premium}
      </p>
      <p>
        <strong>Z91 Unleaded:</strong> ${store.Z91_Unleaded}
      </p>
      <p>
        <strong>Z Diesel:</strong> ${store.Z_Diesel}
      </p>
      <div className={styles.mapContainer}>
        <div ref={mapRef} style={containerStyle}></div>
      </div>
    </div>
  );
};

export default StoreDetails;
