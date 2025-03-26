import type { ImageLoaderProps } from 'next/image';

const cloudinaryImageLoader = (config: ImageLoaderProps) => {
  /**
   * Image config example:
   * src: https://res.cloudinary.com/.../image/upload/.../folder/image-name.jpg
   */
  const [imageDomain, imageLocation] = config?.src?.split('upload/') || [
    '',
    '',
  ];
  const couldinaryConfig = `w_200,q_${config.quality || 50}`;

  return `${imageDomain}upload/${couldinaryConfig}/${imageLocation}`;
};

export { cloudinaryImageLoader };
