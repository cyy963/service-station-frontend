import React, { useState, useEffect, useRef } from 'react';
import styles from './CustomDropdown.module.css';

import filterArrow from '../../assets/filterArrow.png'

const CustomDropdown = ({ options, value, onChange, className, placeholder, retainSelected }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedValues, setSelectedValues] = useState(value || []);
  const dropdownRef = useRef(null);

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

  const handleToggle = () => setIsOpen(!isOpen);

  const handleOptionClick = (option) => {
    if (!option.disabled) {
      let newSelectedValues;
      if (retainSelected) {
        newSelectedValues = selectedValues.includes(option.value)
          ? selectedValues.filter((val) => val !== option.value)
          : [...selectedValues, option.value];
      } else {
        newSelectedValues = [option.value];
      }
      setSelectedValues(newSelectedValues);
      onChange(newSelectedValues);
    }
  };

  const handleRemoveOption = (option) => {
    const newSelectedValues = selectedValues.filter((val) => val !== option.value);
    setSelectedValues(newSelectedValues);
    onChange(newSelectedValues);
  };

  useEffect(() => {
    setSelectedValues(value);
  }, [value]);

  return (
    <div className={`${styles.dropdown} ${className}`} ref={dropdownRef}>
      <div className={styles.dropdownSelect} onClick={handleToggle}>
        {selectedValues.length > 0 ? (
          selectedValues.map((value) => {
            const selectedOption = options.find(option => option.value === value);
            return retainSelected ? (
              <div key={value} className={styles.selectedOptionRetained}>
                {selectedOption.label}
                <span className={styles.removeOption} onClick={(e) => {
                  e.stopPropagation();
                  handleRemoveOption(selectedOption);
                }}>x</span>
              </div>
            ) : (
              <div key={value} className={styles.selectedOption}>
                {selectedOption.label}              
              </div>
            );
          })
        ) : (
          <span className={styles.placeholder}>
            {placeholder}
            <img src={filterArrow} alt="icon" className={styles.placeholderIcon} />
          </span>
        )}
      </div>
      <div className={`${styles.dropdownOptions} ${isOpen ? styles.visible : ''}`}>
        {options.map((option) => (
          <div
            key={option.value}
            className={`${styles.dropdownOption} ${option.disabled ? styles.disabled : ''} ${
              selectedValues.includes(option.value) ? styles.selected : ''
            }`}
            onClick={() => handleOptionClick(option)}
          >
            {option.label}
          </div>
        ))}
      </div>
    </div>
  );
};

export default CustomDropdown;
