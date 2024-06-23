import React, { useState, useEffect } from 'react';
import axios from 'axios';
import styles from './StationData.module.css'

const StationData = () => {
  const [stations, setStations] = useState([]);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get('http://localhost:3000/api/stations');
        setStations(response.data);
      } catch (error) {
        console.error('Error fetching the stations data', error);
      }
    };

    fetchData();
  }, []);

  const toggleDropdown = () => {
    setIsDropdownOpen(!isDropdownOpen);
  };

  return (
    <div className={styles.bg}>    
      <div className={styles.stationContainer}>       
          {stations.map((station) => (
            <div key={station._id}>
              <h2 className={styles.name}>{station.name}</h2>
              <p className={styles.address}>{station.address}</p>
              <div className={styles.hoursContainer}>
                Hours: {station.hours}
                <p className={styles.hours}></p>
              </div>
              <div className={styles.dropdown}>
                <button className={styles.dropdownButton} onClick={toggleDropdown}>
                  Services {isDropdownOpen ? '▼' : '>'}
                </button>
                {isDropdownOpen && (
                  <div className={styles.servicesContainer}>
                    {station.services.split(',').map((service, index) => (
                      <div key={index} className={styles.service}>
                        {service.trim()}
                      </div>
                    ))}
                  </div>
                )}
              </div>
              
                <button className={styles.dropdownButton}>
                  Fuel Prices
                </button>
                <div className={styles.pricesContainer}>
                  <p className={styles.premium}>ZX Premium: {station.ZX_Premium}</p>
                  <p className={styles.unleaded}>Z91 Unleaded: {station.Z91_Unleaded}</p>
                  <p className={styles.diesel}>Z Diesel: {station.Z_Diesel}</p>
                </div>
              
              
            </div>
          ))}
        
      </div>
    </div>
  );
};

export default StationData;
