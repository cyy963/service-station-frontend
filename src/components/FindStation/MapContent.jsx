/* eslint-disable react/prop-types */
import { useState } from 'react'
import { Map, AdvancedMarker } from '@vis.gl/react-google-maps'

import Directions from './Directions'
import Marks from './Marks'
import SideBar from './SideBar'

function MapContent({ form, tog, searchAddress, setAddress, allStations }) {
  const [selectedStation, setSelectedStation] = useState()
  const [filteredStations, setFilteredStations] = useState([])

  function resetCenter() {
    setSelectedStation(null)
    setAddress(null)
    return
  }

  return (
    <>
      <Map
        style={{ width: '50vw', height: '800px' }}
        defaultCenter={{ lat: -36.84, lng: 174.76 }}
        defaultZoom={10}
        gestureHandling='greedy'
        disableDefaultUI={true}
        mapId={import.meta.env.VITE_MAP_ID}
        onDrag={() => resetCenter()}
        center={selectedStation || searchAddress}
      >
        {tog ? (
          <Directions
            journey={form}
            filterStations={setFilteredStations}
            chosenStation={selectedStation}
            allStations={allStations}
          />
        ) : (
          <Marks chosenStation={selectedStation} allStations={allStations} />
        )}
        <AdvancedMarker position={selectedStation}>
          <div></div>
        </AdvancedMarker>
      </Map>
      
    </>
  )
}

export default MapContent
