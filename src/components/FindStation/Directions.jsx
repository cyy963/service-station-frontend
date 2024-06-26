/* eslint-disable react/prop-types */
import { useState, useEffect } from 'react'

import { useMap, useMapsLibrary } from '@vis.gl/react-google-maps'
import { MarkerClusterer } from '@googlemaps/markerclusterer'
import { createRoot } from 'react-dom/client'

import MarkerContent from './MarkerContent'

function Directions({ journey, filterStations, chosenStation, allStations }) {
  const map = useMap()
  const routesLib = useMapsLibrary('routes')

  const [path, setPath] = useState()

  const [journeyPath, setJourneyPath] = useState()

  const [directionService, setDirectionService] = useState()

  const [directionRenderer, setDirectionRenderer] = useState()

  const threshold = 0.004

  useEffect(() => {
    if (!routesLib || !map || !journey) return
    setJourneyPath(journey)
    setDirectionService(new routesLib.DirectionsService())
    setDirectionRenderer(new routesLib.DirectionsRenderer({ map }))
  }, [routesLib, map, journey])

  useEffect(() => {
    if (!directionRenderer || !directionService || !journeyPath) return

    let startIcon
    let endIcon

    directionService
      .route({
        origin: journeyPath.origin,
        destination: journeyPath.destination,
        travelMode: window.google.maps.TravelMode.DRIVING,
      })
      .then((res) => {
        setPath(res)
        directionRenderer.setDirections(res)
        directionRenderer.setOptions({
          polylineOptions: {
            strokeColor: '#FF6F00',
          },
          markerOptions: {
            visible: false,
          },
        })

        startIcon = new window.google.maps.Marker({
          position: res.routes[0].legs[0].start_location,
          map: directionRenderer.getMap(),
          icon: {
            url: '/images/origin.png',
            scaledSize: new window.google.maps.Size(30, 30),
          },
        })
        endIcon = new window.google.maps.Marker({
          position: res.routes[0].legs[0].end_location,
          map: directionRenderer.getMap(),
          icon: {
            url: '/images/fin.png',
            scaledSize: new window.google.maps.Size(30, 30),
          },
        })
      })
    return () => {
      if (startIcon) {
        startIcon.setMap(null)
      }
      if (endIcon) {
        endIcon.setMap(null)
      }
      directionRenderer.setMap(null)
    }
  }, [directionRenderer, directionService, journeyPath])

  useEffect(() => {
    if (!path) return

    const reducedPath = path.routes[0].overview_path.filter(
      (_, i) => i % 10 === 0
    )

    const filterMarks = allStations.filter(({ position }) => {
      return reducedPath.some((point) => {
        const latDiff = Math.abs(point.lat() - position.lat)
        const lngDiff = Math.abs(point.lng() - position.lng)
        return latDiff < threshold && lngDiff < threshold
      })
    })
    //set filtered stations

    filterStations(filterMarks)

    const markers = filterMarks.map((station) => {
      if (chosenStation?.lat == station.position.lat) {
        const markerContent = document.createElement('div')
        const root = createRoot(markerContent)
        root.render(<MarkerContent station={station} />)
        return new window.google.maps.marker.AdvancedMarkerElement({
          position: station.position,
          map: map,
          content: markerContent,
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
  }, [path, map, chosenStation])

  return null
}

export default Directions
