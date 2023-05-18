import React, { ReactNode } from 'react';
import NavBar from './navbar';
import Head from 'next/head';
import { motion } from 'framer-motion';
import { useRouter } from 'next/router';
import { CoffeeProvider } from '@utils/CoffeeContext';

const variants = {
  hidden: { opacity: 0 },
  visible: { opacity: 1 },
  exit: { opacity: 0 },
};

type LayoutProps = {
  children?: ReactNode;
};

const Layout = ({ children }: LayoutProps) => {
  const router = useRouter();

  return (
    <>
      <CoffeeProvider>
        <Head>
          <title>Coffee Theorem</title>
          <meta name='description' content='Log your beans and learn!' />
          <link rel='icon' href='/favicon.ico' />
        </Head>
        <motion.main
          variants={variants}
          initial='hidden'
          animate='visible'
          exit='exit'
          className='grid min-h-screen place-items-start bg-gradient-to-b from-coffee-500 via-coffee-400 to-coffee-500'
        >
          <div className='container mx-auto max-w-screen-2xl'>
            <NavBar selectedNavTab={router.route} />
            <div className='grid grid-flow-row place-items-center p-3 pb-20'>
              {children}
            </div>
          </div>
        </motion.main>
      </CoffeeProvider>
    </>
  );
};

export default Layout;
