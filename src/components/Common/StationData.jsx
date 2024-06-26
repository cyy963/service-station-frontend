/* eslint-disable react/prop-types */
import { useState, useEffect } from 'react'
import axios from 'axios'
import styles from './StationData.module.css'
import downArrow from '../../assets/downArrow.png'
import rightArrow from '../../assets/rightArrow.png'
import greenZ from '../../assets/greenZ.png'
import redZ from '../../assets/redZ.png'
import blackZ from '../../assets/blackZ.png'
import FiltersBar from './FiltersBar'

import Banner from '../FindStation/Banner'
import MapContent from '../FindStation/MapContent'

const StationData = () => {
  const [stations, setStations] = useState([])
  const [dropdownStates, setDropdownStates] = useState({})
  const [hoursDropdownStates, setHoursDropdownStates] = useState({})
  const [serviceFilter, setServiceFilter] = useState('')
  const [stationTypeFilter, setStationTypeFilter] = useState('')
  const [fuelTypeFilter, setFuelTypeFilter] = useState('')
  const [priceSort, setPriceSort] = useState('')

  //----map------//
  const [form, setForm] = useState()
  const [tog, setTog] = useState(false)
  const [searchAddress, setSearchAddress] = useState()
  const [selectedStation, setSelectedStation] = useState()
  const [filterStations, setFilterStations] = useState([])

  const [filteredStations, setFilteredStations] = useState([])

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get('http://localhost:3000/api/stations')
        setStations(response.data)
      } catch (error) {
        console.error('Error fetching the stations data', error)
      }
    }

    fetchData()
  }, [])

  const toggleDropdown = (stationId) => {
    setDropdownStates((prevStates) => ({
      ...prevStates,
      [stationId]: !prevStates[stationId],
    }))
  }

  const toggleHoursDropdown = (stationId) => {
    setHoursDropdownStates((prevStates) => ({
      ...prevStates,
      [stationId]: !prevStates[stationId],
    }))
  }

  const handleServiceFilterChange = (value) => {
    setServiceFilter(value)
  }

  const handleStationTypeFilterChange = (value) => {
    setStationTypeFilter(value)
  }

  const handleFuelTypeFilterChange = (value) => {
    setFuelTypeFilter(value)
  }

  const handlePriceSortChange = (value) => {
    setPriceSort(value)
  }

  function applyAllFilters(stationArray) {
    return stationArray
      .filter((station) => {
        // Filter by service
        if (serviceFilter) {
          const servicesArray = station.services
            .split(',')
            .map((service) => service.trim())
          if (!servicesArray.includes(serviceFilter)) {
            return false
          }
        }
        // Filter by station type
        if (stationTypeFilter && station.type !== stationTypeFilter) {
          return false
        }
        // Filter by fuel type
        if (fuelTypeFilter) {
          const fuelTypes = [
            station.ZX_Premium,
            station.Z91_Unleaded,
            station.Z_Diesel,
          ]
          if (!fuelTypes.includes(fuelTypeFilter)) {
            return false
          }
        }
        return true
      })
      .sort((a, b) => {
        if (priceSort === 'Lower price') {
          return a.ZX_Premium - b.ZX_Premium // Change to the desired fuel type for sorting
        } else if (priceSort === 'Higher price') {
          return b.ZX_Premium - a.ZX_Premium // Change to the desired fuel type for sorting
        } else {
          return 0
        }
      })
  }

  useEffect(() => {
    if (tog) {
      if (filteredStations && filteredStations.length > 0) {
        setFilterStations(applyAllFilters(filteredStations))
      } else {
        setFilterStations(applyAllFilters(stations))
      }
    } else {
      setFilterStations(applyAllFilters(stations))
    }
  }, [
    filteredStations,
    stations,
    fuelTypeFilter,
    priceSort,
    serviceFilter,
    stationTypeFilter,
    tog,
  ])

  return (
    <div className={styles.dataMap}>
      <Banner
        setAddress={setSearchAddress}
        tog={tog}
        setTog={setTog}
        setForm={setForm}
      />

      <FiltersBar
        serviceFilter={serviceFilter}
        stationTypeFilter={stationTypeFilter}
        fuelTypeFilter={fuelTypeFilter}
        priceSort={priceSort}
        handleServiceFilterChange={handleServiceFilterChange}
        handleStationTypeFilterChange={handleStationTypeFilterChange}
        handleFuelTypeFilterChange={handleFuelTypeFilterChange}
        handlePriceSortChange={handlePriceSortChange}
      />
      <div style={{ display: 'flex' }}>
        <div className={styles.bg}>
          <div className={styles.stationsContainer}>
            {filterStations.map((station) => (
              <div className={styles.station} key={station._id}>
                <h2
                  className={styles.name}
                  style={{ cursor: 'pointer' }}
                  onClick={() => setSelectedStation(station.position)}
                >
                  {station.name}
                </h2>
                <p className={styles.address}>{station.address}</p>
                <p className={styles.hoursContainer}>{station.hours}</p>
                <div className={styles.dropdown}>
                  <button
                    className={styles.dropdownButton}
                    onClick={() => toggleDropdown(station._id)}
                  >
                    Services
                    <img
                      src={dropdownStates[station._id] ? downArrow : rightArrow}
                      alt='arrow icon'
                    />
                  </button>
                  {dropdownStates[station._id] && (
                    <div className={styles.servicesContainer}>
                      {station.services.split(',').map((service, index) => (
                        <div key={index} className={styles.service}>
                          {service.trim()}
                        </div>
                      ))}
                    </div>
                  )}
                </div>
                <div className={styles.pricesContainer}>
                  <p className={styles.premium}>
                    ZX Premium
                    <br />
                    <span className={styles.premPrice}>
                      <img src={redZ} alt='redZ' />${station.ZX_Premium}
                    </span>
                  </p>
                  <p className={styles.unleaded}>
                    Z91 Unleaded
                    <br />
                    <span className={styles.unleadPrice}>
                      <img src={greenZ} alt='greenZ' />${station.Z91_Unleaded}
                    </span>
                  </p>
                  <p className={styles.diesel}>
                    Z Diesel
                    <br />
                    <span className={styles.dieselPrice}>
                      <img src={blackZ} alt='blackZ' />${station.Z_Diesel}
                    </span>
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>

        <MapContent
          setFilteredStations={setFilteredStations}
          setSelectedStation={setSelectedStation}
          selectedStation={selectedStation}
          allStations={stations}
          form={form}
          tog={tog}
          searchAddress={searchAddress}
          setAddress={setSearchAddress}
        />
      </div>
    </div>
  )
}

export default StationData
