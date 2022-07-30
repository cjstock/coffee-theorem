import React from "react";
import NavBar from "./navbar";
import Head from "next/head";
import BottomNavBar from "./bottomnav";

type LayoutProps = {
    children: React.ReactNode,
    selectedTab: string
}

const Layout = ({ children, selectedTab }: LayoutProps) => {
    return (<>
        <Head>
            <title>Coffee Theorem</title>
            <meta name="description" content="Log your beans and learn!" />
            <link rel="icon" href="/favicon.ico" />
        </Head>
            <div className="container min-w-full">
                <NavBar />
                <div className="grid grid-flow-row place-items-center p-6">
                    {children}
                </div>
                <BottomNavBar selected={selectedTab}/>
            </div>
    </>
    )
}

export default Layout;