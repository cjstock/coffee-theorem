import { useSession, signIn, signOut } from "next-auth/react";

const LoginButton = () => {
    const { data: session } = useSession();

    if (session) {
        return (<>
            Signed in as {session.user?.name} <br/>
            <button className="btn btn-accent" onClick={() => signOut()}>Sign Out</button>
        </>)
    }
    return (<>
        <button className="btn btn-primary" onClick={() => signIn()}>Sign In</button>
    </>)
}

export default LoginButton;