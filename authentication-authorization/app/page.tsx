import { use } from 'react';

import AuthForm from '@/app/components/auth-form';
import { TNavigationSearchParams } from '@/contracts/mavigation';

export default function Home({
  searchParams,
}: {
  searchParams: TNavigationSearchParams;
}) {
  const routeSearchParams = use(searchParams);
  const mode = (routeSearchParams?.mode || 'login') as 'login' | 'signup';

  return <AuthForm mode={mode} />;
}
