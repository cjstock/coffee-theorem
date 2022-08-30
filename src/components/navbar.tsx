import Link from "next/link";
import LoginButton from "./loginbutton";

export default function NavBar() {
  return (
    <>
      <div className="navbar bg-accent rounded-md">
        <div className="navbar-start">
          <Link href={`/`}>
            <a className="btn btn-ghost normal-case text-2xl">Coffee Theorem</a>
          </Link>
        </div>
        <div className="navbar-end">
          <LoginButton />
        </div>
      </div>
    </>
  );
}
