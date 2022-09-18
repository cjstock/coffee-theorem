import { NextPage } from "next";
import Link from "next/link";
import { trpc } from "../utils/trpc";
import BeanCard from "../components/beancard";
import AddBeanCard from "../components/addbeancard";
import { useSession } from "next-auth/react";
import Unauthorized from "../components/unauthorized";

const MyBeans: NextPage = () => {
    const { data: session } = useSession();

    let foundUser = false;
    const { data: beans } = trpc.useQuery(
        ["bean.getAll", { userEmail: session?.user?.email as string }],
        {
            enabled: foundUser,
        }
    );

    if (!session) {
        return <h1>Login you dummy!</h1>;
    }

    if (session !== null) {
        foundUser = true;
    }

    return (
        <>
            <div className="max-w-2xl mx-auto lg:max-w-5xl md:max-w-2xl">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 place-content-center">
                    {beans?.map((bean) => {
                        return (
                            <Link key={bean.id} href={`/bean/${bean.id}`}>
                                <a>
                                    <BeanCard value={bean} key={bean.id} />
                                </a>
                            </Link>
                        );
                    })}
                    <Link href={`/bean/add`}>
                        <a>
                            <AddBeanCard />
                        </a>
                    </Link>
                </div>
            </div>
        </>
    );
};

export default MyBeans;
