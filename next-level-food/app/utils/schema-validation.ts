import { z } from 'zod';

const IMAGE_SCHEMA = z
  .instanceof(File)
  .refine(
    (file) =>
      [
        'image/png',
        'image/jpeg',
        'image/jpg',
        'image/svg+xml',
        'image/gif',
      ].includes(file.type),
    { message: 'Invalid image file type' }
  )
  .refine((file) => file.size >= 0, {
    message: 'Image invalid size',
  });

export { IMAGE_SCHEMA };
