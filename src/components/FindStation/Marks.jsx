/* eslint-disable react/prop-types */
import { useEffect } from 'react'
import { MarkerClusterer } from '@googlemaps/markerclusterer'
import { createRoot } from 'react-dom/client'
import MarkerContent from './MarkerContent'

import { useMap } from '@vis.gl/react-google-maps'

function Marks({ chosenStation, allStations }) {
  const map = useMap()

  useEffect(() => {
    if (!map) return

    const markers = allStations.map((station) => {
      if (chosenStation?.lat == station.position.lat) {
        const markerContent = document.createElement('div')
        const root = createRoot(markerContent)
        root.render(<MarkerContent station={station} />)
        return new window.google.maps.marker.AdvancedMarkerElement({
          position: station.position,
          map: map,
          content: markerContent,
          //visible: false,
        })
      } else {
        return new window.google.maps.Marker({
          position: station.position,
          map: map,
          icon: {
            url: '/images/label.png',
            scaledSize: new window.google.maps.Size(30, 40),
          },
        })
      }
    })

    const markerCluster = new MarkerClusterer({ map, markers })

    return () => {
      markerCluster.clearMarkers()
      markers.forEach((marker) => marker.setMap(null))
    }
  }, [map, chosenStation])

  return null
}

export default Marks
