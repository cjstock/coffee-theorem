import { useSession, signIn, signOut } from 'next-auth/react';

const LoginButton = () => {
  const { data: session } = useSession();

  if (session) {
    return (
      <>
        <button
          className='block w-full px-4 py-2 text-left text-sm text-matcha-100'
          onClick={() => signOut()}
        >
          Sign Out
        </button>
      </>
    );
  }
  return (
    <>
      <button
        className='block w-40 rounded bg-matcha-300 px-4 py-3 text-sm text-coffee-500 transition-all hover:bg-matcha-200'
        onClick={() => signIn()}
      >
        Sign In
      </button>
    </>
  );
};

export default LoginButton;
