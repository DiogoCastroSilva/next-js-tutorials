'use client';
import { ChangeEvent, useRef, useState } from 'react';
import Image from 'next/image';

import styles from './images-picker.module.css';

import type { IImagePicker } from './contracts';

export default function ImagePicker({ label, name }: IImagePicker) {
  const inputImageRef = useRef<HTMLInputElement>(null);
  const [selectedImage, setSelectedImage] = useState<string | null>(null);

  const handlePickImage = () => {
    if (inputImageRef.current) {
      inputImageRef.current.click();
    }
  };

  const onImageInputChange = (event: ChangeEvent<HTMLInputElement>) => {
    const image = event.target.files?.[0];

    if (!image) {
      setSelectedImage(null);
      return;
    }

    const fileReader = new FileReader();

    fileReader.onload = () => {
      if (typeof fileReader.result === 'string') {
        return setSelectedImage(fileReader.result);
      }

      setSelectedImage(null);
    };

    fileReader.readAsDataURL(image);
  };

  return (
    <div className={styles.picker}>
      <label htmlFor={name}>{label}</label>
      <div className={styles.controls}>
        <div className={styles.preview}>
          {!selectedImage && <p>No image picked yet.</p>}
          {selectedImage && (
            <Image
              src={selectedImage as string}
              alt="The image you selected"
              fill
            />
          )}
        </div>
        <input
          id={name}
          name={name}
          type="file"
          accept="image/jpeg, image/png"
          ref={inputImageRef}
          className={styles.input}
          onChange={onImageInputChange}
          required
        />
        <button
          className={styles.button}
          type="button"
          onClick={handlePickImage}
        >
          Pick an Image
        </button>
      </div>
    </div>
  );
}
