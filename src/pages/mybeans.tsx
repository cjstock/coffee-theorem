import { NextPage } from "next";
import Link from "next/link";
import { trpc } from "../utils/trpc";
import BeanCard from "../components/beancard"
import AddBeanCard from "../components/addbeancard";
import { useSession } from "next-auth/react";
import Unauthorized from "../components/unauthorized";

const MyBeans: NextPage = () => {
    const { data: session } = useSession()
    const userQuery = trpc.useQuery(["user.byEmail", { email: session?.user?.email as string }])
    const { data, isLoading, isError } = trpc.useQuery(["bean.getAll", { userId: userQuery.data?.id as string }])

    if (!session) {
        return <Unauthorized />
    }


    return (<>
        <div className="mx-auto px-4 lg:max-w-5xl md: max-w-2xl">
            <div className="grid sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 gap-4 place-content-center">
                {
                    data?.map(bean => {
                        return (
                            <Link key={bean.id} href={`/bean/${bean.id}`}>
                                <a>
                                    <BeanCard value={bean} key={bean.id} />
                                </a>
                            </Link>
                        )
                    })
                }
                <Link href={`/bean/add`}>
                    <a>
                        <AddBeanCard />
                    </a>
                </Link>
            </div>
        </div>
    </>)
}

export default MyBeans;