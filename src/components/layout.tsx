import React from "react";
import NavBar from "./navbar";
import Head from "next/head";
import BottomNavBar from "./bottomnav";

type LayoutProps = {
    children: React.ReactNode,
    selectedBottomTab: "learn" | "experiment"
}

const Layout = ({ children, selectedBottomTab }: LayoutProps) => {
    return (<>
        <Head>
            <title>Coffee Theorem</title>
            <meta name="description" content="Log your beans and learn!" />
            <link rel="icon" href="/favicon.ico" />
        </Head>
        <div className="h-screen grid place-items-start bg-base-300">
            <div className="container mx-auto max-w-screen-2xl bg-base-300">
                <NavBar />
                <div className="p-3 grid grid-flow-row place-items-center">
                    {children}
                </div>
                <BottomNavBar selectedBottomTab={selectedBottomTab} />
            </div>
        </div>
    </>
    )
}

export default Layout;
