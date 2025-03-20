import { z } from 'zod';

const ImageSchema = z
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

const MealSchema = z.object({
  name: z.string({ invalid_type_error: 'Please enter a valid name.' }),
  email: z.string().email({ message: 'Please enter a valid email address.' }),
  title: z.string({ invalid_type_error: 'Please enter a valid title.' }),
  summary: z.string({ invalid_type_error: 'Please enter a valid summary.' }),
  instructions: z.string({
    invalid_type_error: 'Please enter valid instructions.',
  }),
});

export { ImageSchema, MealSchema };
