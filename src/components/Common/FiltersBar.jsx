import React from 'react';
import styles from './FiltersBar.module.css';
import CustomDropdown from './CustomDropdown';

const FiltersBar = ({
  serviceFilter,
  stationTypeFilter,
  fuelTypeFilter,
  priceSort,
  handleServiceFilterChange,
  handleStationTypeFilterChange,
  handleFuelTypeFilterChange,
  handlePriceSortChange,
}) => {
  const serviceOptions = [
    { value: '', label: 'Select a service or services' },
    { value: 'Car wash', label: 'Car wash', disabled: true },
    { value: 'Z20 carwash', label: 'Food & Drink' },
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
    { value: '', label: 'Select station type' },
    { value: 'Truck Stop', label: 'Truck Stop' },
    { value: 'Service Station', label: 'Service Station' },
  ];

  const fuelTypeOptions = [
    { value: '', label: 'Select fuel type' },
    { value: 'ZX Premium', label: 'ZX Premium' },
    { value: 'Z91 Unleaded', label: 'Z91 Unleaded' },
    { value: 'Z Diesel', label: 'Z Diesel' },
  ];

  const priceSortOptions = [
    { value: '', label: 'Sorted by' },
    { value: 'Lower price', label: 'Lower price' },
    { value: 'Higher price', label: 'Higher price' },
  ];

  return (
    <div className={styles.filtersContainer}>
      <CustomDropdown 
        options={serviceOptions} 
        value={serviceFilter} 
        onChange={handleServiceFilterChange} 
        placeholder="Select a service or services" 
      />
      <CustomDropdown 
        options={stationTypeOptions} 
        value={stationTypeFilter} 
        onChange={handleStationTypeFilterChange} 
        placeholder="Select station type" 
      />
      <CustomDropdown 
        options={fuelTypeOptions} 
        value={fuelTypeFilter} 
        onChange={handleFuelTypeFilterChange} 
        placeholder="Select fuel type" 
      />
      <CustomDropdown 
        options={priceSortOptions} 
        value={priceSort} 
        onChange={handlePriceSortChange} 
        placeholder="Sorted by" 
      />
    </div>
  );
};

export default FiltersBar;
