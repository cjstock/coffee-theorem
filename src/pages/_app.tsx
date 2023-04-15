// src/pages/_app.tsx
import '../styles/globals.css';
import { SessionProvider } from 'next-auth/react';
import type { Session } from 'next-auth';
import type { AppType } from 'next/app';
import { trpc } from '../utils/trpc';
import Layout from '../components/ui/layout';
import { CoffeeProvider } from '../utils/CoffeeContext';

const MyApp: AppType<{ session: Session | null }> = ({
  Component,
  pageProps: { session, ...pageProps },
}) => {
  return (
    <SessionProvider session={session}>
      <Layout>
        <CoffeeProvider>
          <Component {...pageProps} />
        </CoffeeProvider>
      </Layout>
    </SessionProvider>
  );
};

export default trpc.withTRPC(MyApp);
