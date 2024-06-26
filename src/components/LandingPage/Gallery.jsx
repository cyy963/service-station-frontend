import React, { useState, useEffect } from 'react';
import styles from './Gallery.module.css';

import OG from '../../assets/gallery1.png';
import zWhiteBG from '../../assets/zWhiteBG.jpg';
import zElectric from '../../assets/zElectric.jpg';

const images = [OG, zWhiteBG, zElectric];

const Gallery = () => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [prevImageIndex, setPrevImageIndex] = useState(null);
  const [animationKey, setAnimationKey] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setPrevImageIndex(currentImageIndex);
      setCurrentImageIndex((prevIndex) => (prevIndex + 1) % images.length);
      setAnimationKey((prevKey) => prevKey + 1);
    }, 5000);

    return () => clearInterval(interval);
  }, [currentImageIndex]);

  const goToImage = (index) => {
    setPrevImageIndex(currentImageIndex);
    setCurrentImageIndex(index);
    setAnimationKey((prevKey) => prevKey + 1);
  };

  return (
    <div className={styles.gallery}>
      {currentImageIndex === 0 && (
        <div className={`${styles.galleryText} ${styles.slideIn}`}>
          <h1>Z is for<br/>New Zealand</h1>
          <p>We're here to keep <br/>our communities <br/>and whānau moving</p>
        </div>
      )}
      {prevImageIndex !== null && (
        <img
          key={`prev-${animationKey}`}
          src={images[prevImageIndex]}
          alt="Previous Gallery"
          className={styles.galleryImage}
          style={{ zIndex: 1 }}
        />
      )}
      <img
        key={`current-${animationKey}`}
        src={images[currentImageIndex]}
        alt="Gallery"
        className={`${styles.galleryImage} ${styles.slideIn}`}
        style={{ zIndex: 2 }}
      />
      <div className={styles.dots}>
        {images.map((_, index) => (
          <span 
            key={index} 
            className={`${styles.dot} ${index === currentImageIndex ? styles.active : ''}`} 
            onClick={() => goToImage(index)}
          />
        ))}
      </div>
    </div>
  );
};

export default Gallery;
