'use client';
import { useEffect, useState } from 'react';
import Image from 'next/image';

import { images } from './data';
import classes from './image-slideshow.module.css';

const TIME_TO_GO_NEXT_IMAGE = 5000;

export default function ImageSlideshow() {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndex((prevIndex) =>
        prevIndex < images.length - 1 ? prevIndex + 1 : 0
      );
    }, TIME_TO_GO_NEXT_IMAGE);

    return () => {
      clearInterval(interval);
    };
  }, []);

  return (
    <div className={classes.slideshow}>
      {images.map((image, index) => (
        <Image
          key={index}
          src={image.image}
          className={index === currentImageIndex ? classes.active : ''}
          alt={image.alt}
        />
      ))}
    </div>
  );
}
