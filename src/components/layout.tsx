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
        <div className="grid place-items-center bg-base-300">
            <div className="container max-w-screen-2xl bg-base-300 h-screen">
                <NavBar />
                <div className="grid grid-flow-row place-items-center p-3">
                    {children}
                </div>
                <BottomNavBar selectedBottomTab={selectedBottomTab} />
            </div>
        </div>
    </>
    )
}

export default Layout;