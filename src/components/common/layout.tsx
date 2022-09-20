import React, { ReactNode } from "react";
import NavBar from "./navbar";
import Head from "next/head";
import { AnimatePresence, motion } from "framer-motion";
import { useRouter } from "next/router";

const variants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1 },
    exit: { opacity: 0 },
};

type LayoutProps = {
    children?: ReactNode;
};

const Layout = ({ children }: LayoutProps) => {
    const router = useRouter();
    console.log(router.route);

    return (
        <>
            <Head>
                <title>Coffee Theorem</title>
                <meta name="description" content="Log your beans and learn!" />
                <link rel="icon" href="/favicon.ico" />
            </Head>
            <motion.main
                variants={variants}
                initial="hidden"
                animate="visible"
                exit="exit"
                className="min-h-screen grid place-items-start bg-coffee-500"
            >
                <div className="container mx-auto max-w-screen-2xl bg-coffee-500">
                    <NavBar selectedNavTab={router.route} />
                    <div className="p-3 grid grid-flow-row place-items-center pb-20">
                        {children}
                    </div>
                </div>
            </motion.main>
        </>
    );
};

export default Layout;
