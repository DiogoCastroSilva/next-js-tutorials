import NextAuth, { AuthOptions } from 'next-auth';
import Credentials from 'next-auth/providers/credentials';

import authDB from '@/lib/auth-db';
import { verifyPassword } from '@/lib/auth-utils';
import client from '@/lib/client';

export const authOptions: AuthOptions = {
  providers: [
    Credentials({
      session: {
        strategy: 'jwt',
      },
      credentials: {
        email: { label: 'Email', type: 'text' },
        password: { label: 'Password', type: 'password' },
      },
      async authorize(credentials) {
        await client.connect();

        const user = await authDB
          .collection('users')
          .findOne({ email: credentials?.email });

        if (!user) {
          await client.close();

          throw new Error('No user found');
        }

        const isValid = await verifyPassword(
          credentials!.password,
          user.password
        );

        if (!isValid) {
          await client.close();

          throw new Error('Could not log you in');
        }

        await client.close();

        return { id: user._id, email: user.email as string };
      },
    }),
  ],
};

export default NextAuth(authOptions);
