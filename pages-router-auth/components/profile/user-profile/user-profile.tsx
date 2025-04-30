// import { useSession } from 'next-auth/react';
// import { useRouter } from 'next/router';

import ProfileForm from '../profile-form/profile-form';

import styles from './user-profile.module.css';

function UserProfile() {
  // const router = useRouter();
  // const { status } = useSession({
  //   required: true,
  //   onUnauthenticated() {
  //     router.replace('/auth');
  //   },
  // });

  // if (status === 'loading') {
  //   return <p className={styles.profile}>Loading...</p>;
  // }

  return (
    <section className={styles.profile}>
      <h1>Your User Profile</h1>
      <ProfileForm />
    </section>
  );
}

export default UserProfile;
