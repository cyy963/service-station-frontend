import React, { useState } from 'react';
import styles from './FiltersBar.module.css';
import CustomDropdown from './CustomDropdown';

const FiltersBar = ({ handleApplyFilters, handleClearFilters }) => {
  const [tempServiceFilter, setTempServiceFilter] = useState([]);
  const [tempStationTypeFilter, setTempStationTypeFilter] = useState('');
  const [tempFuelTypeFilter, setTempFuelTypeFilter] = useState('');

  const serviceOptions = [
    { value: 'Car wash', label: 'Car wash', disabled: true },
    { value: 'Z20 carwash', label: 'Z20 carwash' },
    { value: 'Food & Drink', label: 'Food & Drink', disabled: true },
    { value: 'Pre-order Coffee', label: 'Pre-order Coffee' },
    { value: 'Z Espress Coffee & Fresh Food', label: 'Z Espress Coffee & Fresh Food' },
    { value: 'f’real', label: 'f’real' },
    { value: 'EV Charging', label: 'EV Charging', disabled: true },
    { value: 'Ultra-Fast', label: 'Ultra-Fast' },
    { value: 'Fast', label: 'Fast' },
    { value: 'Fast &/or Ultra-Fast', label: 'Fast &/or Ultra-Fast' },
    { value: 'Payment Option', label: 'Payment Option', disabled: true },
    { value: 'Pay at pump', label: 'Pay at Pump' },
    { value: 'Pay in app', label: 'Pay in App' },
    { value: 'Pay by plate', label: 'Pay by Plate' },
    { value: 'Pay by card', label: 'Pay by Card' },
    { value: 'Fueling and Maintenance Gear', label: 'Fueling and Maintenance Gear', disabled: true },
    { value: 'Super long hoses', label: 'Super long hoses' },
    { value: 'Ad blue diesel exhaust Fluid', label: 'Ad blue diesel exhaust Fluid' },
    { value: 'Other', label: 'Other', disabled: true },
    { value: 'Trailer hire', label: 'Trailer hire' },
    { value: 'LPG SWAP\'n\'GO', label: 'LPG SWAP’nGO' },
    { value: 'Bathrooms', label: 'Bathrooms' },
    { value: 'A-Z screen', label: 'A-Z screen' },
    { value: 'Composable Cups', label: 'Composable Cups' },
    { value: 'ATM ​', label: 'ATM ​' }
  ];

  const stationTypeOptions = [
    { value: 'truck stop', label: 'Truck Stop' },
    { value: 'service station', label: 'Service Station' },
  ];

  const fuelTypeOptions = [
    { value: 'ZX_Premium', label: 'ZX Premium' },
    { value: 'Z91_Unleaded', label: 'Z91 Unleaded' },
    { value: 'Z_Diesel', label: 'Z Diesel' },
  ];

  const applyFilters = () => {
    handleApplyFilters({
      serviceFilter: tempServiceFilter,
      stationTypeFilter: tempStationTypeFilter,
      fuelTypeFilter: tempFuelTypeFilter,
    });
  };

  const clearFilters = () => {
    setTempServiceFilter([]);
    setTempStationTypeFilter('');
    setTempFuelTypeFilter('');
    handleClearFilters();
  };

  return (
    <div className={styles.filtersContainer}>
      <div>
        <p className={styles.filterTitle}>Services</p>
        <CustomDropdown 
          options={serviceOptions} 
          value={tempServiceFilter} 
          onChange={setTempServiceFilter} 
          placeholder={'Select service/s '}
          retainSelected={true}
          className={styles.servicesFilter}
        />
      </div>
      <div>
        <p className={styles.filterTitle}>Station type</p>
        <CustomDropdown
          options={stationTypeOptions} 
          value={tempStationTypeFilter} 
          onChange={setTempStationTypeFilter}  
          placeholder={'Select station type '}
          retainSelected={false}
          className={styles.stationTypeFilter}
        />
      </div>
      <div>
        <p className={styles.filterTitle}>Fuel Type</p>
        <CustomDropdown 
          options={fuelTypeOptions} 
          value={tempFuelTypeFilter} 
          onChange={setTempFuelTypeFilter} 
          placeholder={'Select fuel type'}
          retainSelected={false}
        />
      </div>
      <button className={styles.applyButton} onClick={applyFilters}>
        Apply Filters
      </button>
      <button className={styles.clearButton} onClick={clearFilters}>
        Clear Filters
      </button>
    </div>
  );
};

export default FiltersBar;
