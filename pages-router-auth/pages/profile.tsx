import { GetServerSidePropsContext } from 'next';
// import { getServerSession } from 'next-auth/next';
import { getSession } from 'next-auth/react';

import UserProfile from '@/components/profile/user-profile/user-profile';
// import { authOptions } from '@/pages/api/auth/[...nextauth]';

function ProfilePage() {
  return <UserProfile />;
}

export async function getServerSideProps(context: GetServerSidePropsContext) {
  const session = await getSession({ req: context.req });
  // const session = await getServerSession(context.req, context.res, authOptions);

  if (!session) {
    return {
      redirect: {
        destination: '/auth',
        permanent: false,
      },
    };
  }

  return {
    props: {
      session,
    },
  };
}

export default ProfilePage;
