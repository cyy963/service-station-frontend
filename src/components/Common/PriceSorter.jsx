import React, { useState, useRef, useEffect } from 'react';
import styles from './PriceSorter.module.css';
import filterArrow from '../../assets/filterArrow.png'


const PriceSorter = ({ onChange }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedOption, setSelectedOption] = useState('');
  const dropdownRef = useRef(null);

  const priceSortOptions = [
    { value: '', label: 'Sorted by price' },
    { value: 'Lower price', label: 'Lower price' },
    { value: 'Higher price', label: 'Higher price' },
  ];

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setIsOpen(false);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  const handleToggle = () => {
    setIsOpen(!isOpen);
  };

  const handleOptionClick = (option) => {
    setSelectedOption(option.value);
    onChange(option.value);
    setIsOpen(false);
  };

  return (
    <div className={styles.priceSorter} ref={dropdownRef}>
      <div className={styles.dropdownSelect} onClick={handleToggle}>
        {selectedOption ? priceSortOptions.find(opt => opt.value === selectedOption).label : <span className={styles.placeholder}>
            Sort by price
            <img src={filterArrow} alt="icon" className={styles.placeholderIcon} />
          </span>}
      </div>
      {isOpen && (
        <div className={styles.dropdownOptions}>
          {priceSortOptions.map((option) => (
            <div
              key={option.value}
              className={styles.dropdownOption}
              onClick={() => handleOptionClick(option)}
            >
              {option.label}
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default PriceSorter;
