import { Fragment, useState } from 'react';
import { Disclosure, Menu } from '@headlessui/react';
import {
  Bars3Icon,
  XMarkIcon,
  UserCircleIcon,
} from '@heroicons/react/24/outline';
import Link from 'next/link';
import { AnimatePresence, motion } from 'framer-motion';
import { useSession, signIn, signOut } from 'next-auth/react';
import classNames from '../../utils/ClassNames';

const navigation = [
  { name: 'Discoveries', hrefs: ['/', '/coffee/[id]'] },
  { name: 'Learn', hrefs: ['/learn'] },
  { name: 'Recipes', hrefs: ['/recipes'] },
];

interface Props {
  selectedNavTab: string;
}
const NavBar: React.FC<Props> = ({ selectedNavTab }: Props) => {
  const session = useSession();
  const [isOpen, setIsOpen] = useState(false);

  return (
    <Disclosure as='nav' className='bg-coffee-dark pb-2'>
      <>
        <div className='mx-auto px-4 sm:px-6 lg:px-8'>
          <div className='flex h-16 justify-between'>
            <div className='flex'>
              <div className='-ml-2 mr-2 flex items-center md:hidden'>
                {/* Mobile menu button */}
                <Disclosure.Button
                  onClickCapture={() => setIsOpen(!isOpen)}
                  className='inline-flex items-center justify-center rounded-md p-2 text-coffee-100 hover:bg-coffee-400 focus:outline-none focus:ring-0'
                >
                  <span className='sr-only'>Open main menu</span>
                  {isOpen ? (
                    <XMarkIcon className='block h-6 w-6' aria-hidden='true' />
                  ) : (
                    <Bars3Icon className='block h-6 w-6' aria-hidden='true' />
                  )}
                </Disclosure.Button>
              </div>
              <div className='flex flex-shrink-0 items-center'>
                <Link
                  href={'/'}
                  className='bg-gradient-to-b from-matcha-200 to-matcha-300 bg-clip-text font-sans text-4xl font-extrabold tracking-tight text-transparent'
                  passHref
                >
                  Coffee Theorem
                </Link>
              </div>
              <div className='hidden md:ml-6 md:flex md:items-center md:space-x-4'>
                {navigation.map((element) => {
                  return (
                    <Link
                      key={element.name}
                      href={element.hrefs[0] || ''}
                      passHref
                      className={classNames(
                        element.hrefs.find((href) => href === selectedNavTab)
                          ? 'bg-coffee-400 text-matcha-200'
                          : 'text-matcha-200 hover:bg-coffee-500',
                        'rounded-md px-3 py-2 text-sm font-medium transition-colors'
                      )}
                      aria-current={
                        element.hrefs.find((href) => href === selectedNavTab)
                          ? 'page'
                          : undefined
                      }
                      onClick={() => (selectedNavTab = element.hrefs[0] || '')}
                    >
                      {element.name}
                    </Link>
                  );
                })}
              </div>
            </div>
            <div className='flex items-center'>
              <div className='hidden md:ml-4 md:flex md:flex-shrink-0 md:items-center'>
                {/* Profile dropdown */}
                <Menu as='div' className='relative ml-3'>
                  <div>
                    <Menu.Button
                      onClickCapture={() => setIsOpen(!isOpen)}
                      className='flex rounded-full bg-coffee-500 text-sm focus:outline-none'
                    >
                      <span className='sr-only'>Open user menu</span>
                      <UserCircleIcon className='h-10 w-10 rounded-full bg-coffee-500 text-matcha-100' />
                    </Menu.Button>
                  </div>
                  <AnimatePresence>
                    {isOpen && (
                      <Menu.Items
                        static
                        as={motion.div}
                        initial={{ opacity: 0, scale: 0 }}
                        animate={{
                          opacity: 1,
                          scale: 1,
                          transition: { duration: 0.2 },
                        }}
                        exit={{
                          opacity: 0,
                          scale: 0,
                          transition: { duration: 0.2 },
                        }}
                        className='absolute right-0 z-10 mt-2 w-48 origin-top-right rounded-md bg-coffee-400 py-1 shadow-lg ring-1 ring-coffee-400 ring-opacity-5 focus:outline-none'
                      >
                        <Menu.Item>
                          {session.status !== 'unauthenticated' ? (
                            <button
                              className={classNames(
                                'block w-full px-4 py-2 text-left text-sm text-matcha-200'
                              )}
                              onClick={() => signOut()}
                            >
                              {'Logout'}
                            </button>
                          ) : (
                            <button
                              className={classNames(
                                'block w-full px-4 py-2 text-left text-sm text-matcha-200'
                              )}
                              onClick={() => signIn()}
                            >
                              {'Login'}
                            </button>
                          )}
                        </Menu.Item>
                      </Menu.Items>
                    )}
                  </AnimatePresence>
                </Menu>
              </div>
            </div>
          </div>
        </div>

        <AnimatePresence>
          {isOpen && (
            <>
              <Disclosure.Panel
                static
                as={motion.div}
                initial={{ opacity: 0, height: 0 }}
                animate={{ opacity: 1, height: 200 }}
                exit={{ opacity: 0, height: 0, transition: { duration: 0.2 } }}
                className='space-y-1 px-2 pb-3 pt-2 sm:px-3 md:hidden'
              >
                {navigation.map((item) => (
                  <Link href={item.hrefs[0] || ''} key={item.name} passHref>
                    <Disclosure.Button
                      key={item.name}
                      className={classNames(
                        item.hrefs.find((href) => href === selectedNavTab)
                          ? 'bg-coffee-400 text-matcha-200'
                          : 'bg-coffee-500 text-matcha-200 hover:bg-coffee-400',
                        'block rounded-md px-3 py-2 text-base font-medium transition-colors'
                      )}
                      aria-current={
                        item.hrefs.find((href) => href === selectedNavTab)
                          ? 'page'
                          : undefined
                      }
                      onClickCapture={() =>
                        (selectedNavTab = item.hrefs[0] || '')
                      }
                    >
                      {item.name}
                    </Disclosure.Button>
                  </Link>
                ))}
                <div className='border-t border-coffee-300 pb-3 pt-4'>
                  <div className=' space-y-1 px-2 sm:px-3'>
                    {session.status !== 'unauthenticated' ? (
                      <Disclosure.Button
                        as='button'
                        className={
                          'block rounded-md bg-coffee-500 px-4 py-2 text-base text-matcha-200 hover:bg-coffee-300'
                        }
                        onClickCapture={() => signOut()}
                      >
                        {'Logout'}
                      </Disclosure.Button>
                    ) : (
                      <Disclosure.Button
                        as='button'
                        className={
                          'block rounded-md bg-coffee-500 px-4 py-2 text-base text-matcha-200 hover:bg-coffee-300'
                        }
                        onClickCapture={() => signIn()}
                      >
                        {'Login'}
                      </Disclosure.Button>
                    )}
                  </div>
                </div>
              </Disclosure.Panel>
            </>
          )}
        </AnimatePresence>
      </>
    </Disclosure>
  );
};

export default NavBar;
