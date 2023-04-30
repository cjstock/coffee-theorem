import LoginButton from './loginbutton';
import { motion } from 'framer-motion';

export default function Unauthorized() {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
    >
      <div className='isolate rounded-xl bg-coffee-500'>
        <div className='relative px-6 lg:px-8'>
          <div className='mx-auto max-w-2xl py-32 sm:py-48 lg:py-56'>
            <div className='hidden sm:mb-8 sm:flex sm:justify-center'></div>
            <div className='text-center'>
              <h1 className='bg-gradient-to-b from-matcha-200 to-matcha-400 bg-clip-text font-sans text-4xl font-extrabold tracking-tight text-transparent'>
                Login to begin your journey
              </h1>
              <p className='mt-6 text-lg leading-8 text-gray-600'></p>
              <div className='mt-10 flex items-center justify-center gap-x-6'>
                <LoginButton />
              </div>
            </div>
          </div>
        </div>
      </div>
    </motion.div>
  );
}
