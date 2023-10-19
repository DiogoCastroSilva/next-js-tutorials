import { ChangeEvent, useState } from 'react';
import { IImageUploaded } from '@/components/image-upload/contracts';
import styles from '@/styles/Form.module.css';
import { API_ENDPOINT } from '@/config';

export default function ImageUpload({
  eventId,
  onImageUploaded,
}: IImageUploaded) {
  const [image, setImage] = useState<string | Blob | null>(null);

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!image) return;

    const formData = new FormData();
    formData.append('files', image);
    formData.append('ref', 'events');
    formData.append('refId', eventId);
    formData.append('field', 'image');

    const res = await fetch(`${API_ENDPOINT}/api/upload`, {
      method: 'POST',
      body: formData,
    });

    if (res.ok) {
      onImageUploaded();
    }
  };

  const handleFileChange = (e: ChangeEvent<HTMLInputElement>) => {
    if (e.target.files) {
      setImage(e.target.files[0]);
    }
  };

  return (
    <div className={styles.form}>
      <h1>Upload Event Image</h1>
      <form onSubmit={handleSubmit}>
        <div className={styles.file}>
          <input type="file" onChange={handleFileChange} />
        </div>
        <input type="submit" value="upload" className="btn" />
      </form>
    </div>
  );
}
