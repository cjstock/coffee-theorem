import { useSession, signIn, signOut } from "next-auth/react";

const LoginButton = () => {
  const { data: session } = useSession();

  if (session) {
    return (
      <>
        <button className="block w-full text-left px-4 py-2 text-sm text-matcha-100" onClick={() => signOut()}>
          Sign Out
        </button>
      </>
    );
  }
  return (
    <>
      <button className="block w-40 px-4 py-3 text-sm text-coffee-500 bg-matcha-200 rounded hover:bg-matcha-100 transition-all" onClick={() => signIn()}>
        Sign In
      </button>
    </>
  );
};

export default LoginButton;
