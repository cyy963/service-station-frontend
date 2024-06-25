import React, { useState } from 'react';
import styles from './FiltersBar.module.css';

const CustomDropdown = ({ options, value, onChange, className }) => {
  const [isOpen, setIsOpen] = useState(false);

  const handleToggle = () => setIsOpen(!isOpen);

  const handleOptionClick = (option) => {
    if (!option.disabled) {
      onChange(option.value);
      setIsOpen(false);
    }
  };

  const selectedOption = options.find(option => option.value === value);

  return (
    <div className={`${styles.dropdown} ${className}`}>
      <div className={styles.dropdownSelect} onClick={handleToggle}>
        {selectedOption ? selectedOption.label : placeholder}
      </div>
      <div className={`${styles.dropdownOptions} ${isOpen ? styles.visible : ''}`}>
        {options.map(option => (
          <div
            key={option.value}
            className={`${styles.dropdownOption} ${option.disabled ? styles.disabled : ''}`}
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
