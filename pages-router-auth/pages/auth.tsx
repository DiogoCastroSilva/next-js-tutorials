import { GetServerSidePropsContext } from 'next';
// import { getServerSession } from 'next-auth';
import { getSession } from 'next-auth/react';

import AuthForm from '@/components/auth/auth-form/auth-form';
// import { authOptions } from '@/pages/api/auth/[...nextauth]';

function AuthPage() {
  return <AuthForm />;
}

export async function getServerSideProps(context: GetServerSidePropsContext) {
    const session = await getSession({ req: context.req });

  // const session = await getServerSession(context.req, context.res, authOptions);

  if (session) {
    return {
      redirect: {
        destination: '/',
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

export default AuthPage;
