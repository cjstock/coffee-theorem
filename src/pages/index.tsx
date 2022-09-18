import type { NextPage } from "next";
import { useSession } from "next-auth/react";
import { useEffect, useState } from "react";
import Heading from "../components/pages/bean/Heading";
import { trpc } from "../utils/trpc";
import { Reorder } from "framer-motion";
import BeanCard from "../components/pages/bean/BeanCard";
import { Bean } from "@prisma/client";
import Link from "next/link";

const Home: NextPage = () => {
    const session = useSession();

    const {
        data: beans,
        isLoading,
        isSuccess,
    } = trpc.useQuery(
        ["bean.getAll", { userEmail: session.data?.user?.email as string }],
        {
            enabled: session.status === "authenticated",
        }
    );

    const [beanState, setBeanState] = useState<Array<Bean>>([]);

    useEffect(() => {
        beans && setBeanState(beans);
    }, [beans]);

    isLoading && <Heading />;

    return (
        isSuccess && (
            <>
                <Heading />
                <Reorder.Group
                    axis="x"
                    values={beanState}
                    onReorder={setBeanState}
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4"
                >
                    {beanState.map((bean) => (
                        <Link key={bean.id} href={`coffee/[${bean.id}]`}>
                            <a>
                                <BeanCard bean={bean} />
                            </a>
                        </Link>
                    ))}
                </Reorder.Group>
            </>
        )
    );
};

export default Home;
