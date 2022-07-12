import React from "react";
import NavBar from "./navbar";
import Head from "next/head";

type LayoutProps = {
    children: React.ReactNode
}

const Layout = ({ children }: LayoutProps) => {
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
        </div>
    </>
    )
}

export default Layout;