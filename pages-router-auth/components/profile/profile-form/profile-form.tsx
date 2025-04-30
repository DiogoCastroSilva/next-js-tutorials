import { useRef } from 'react';

import { API_ENDPOINT } from '@/config';

import styles from './profile-form.module.css';

function ProfileForm() {
  const oldPasswordRef = useRef<HTMLInputElement>(null);
  const newPasswordRef = useRef<HTMLInputElement>(null);

  async function handleFormSubmit(event: React.FormEvent) {
    event.preventDefault();

    const enteredOldPassword = oldPasswordRef.current?.value;
    const enteredNewPassword = newPasswordRef.current?.value;

    try {
      const response = await fetch(`${API_ENDPOINT}/api/user/change-password`, {
        method: 'PATCH',
        body: JSON.stringify({
          oldPassword: enteredOldPassword,
          newPassword: enteredNewPassword,
        }),
        headers: { 'Content-Type': 'application/json' },
      });

      if (!response.ok) {
        throw new Error('Failed to update password');
      }

      const data = await response.json();

      return data;
    } catch {
      console.error('Error updating password');
    }
  }

  return (
    <form className={styles.form} onSubmit={handleFormSubmit}>
      <div className={styles.control}>
        <label htmlFor="new-password">New Password</label>
        <input type="password" id="new-password" ref={newPasswordRef} />
      </div>
      <div className={styles.control}>
        <label htmlFor="old-password">Old Password</label>
        <input type="password" id="old-password" ref={oldPasswordRef} />
      </div>
      <div className={styles.action}>
        <button>Change Password</button>
      </div>
    </form>
  );
}

export default ProfileForm;
