import { type DefaultSession } from 'next-auth';

declare module 'next-auth' {
  /**
   * Returned by `useSession`, `getSession` and received as a prop on the `SessionProvider` React Context
   */
  interface Session {
    user?: {
      id: string;
      login: string;
    } & DefaultSession['user'];
  }

  interface User extends DefaultSession['user'] {
    login: string;
  }
}
