import { NextPage } from "next";
import Link from "next/link";
import { trpc } from "../utils/trpc";
import BeanCard from "../components/beancard"
import AddBeanCard from "../components/addbeancard";
import { useSession } from "next-auth/react";
import Unauthorized from "../components/unauthorized";
import { useAutoAnimate } from "@formkit/auto-animate/react"

const MyBeans: NextPage = () => {
    const { data: session } = useSession()
    const [listRef] = useAutoAnimate<HTMLDivElement>({
        duration: 100
    })

    const {data: user, isSuccess: foundUser} = trpc.useQuery(["user.byEmail", { email: session?.user?.email as string }], {
        enabled: !!session
    })
    const { data: beans} = trpc.useQuery(["bean.getAll", { userId: user?.id as string }], {
        enabled: foundUser
    })

    if (!session) {
        return <Unauthorized />
    }


    return (<>
        <div className="mx-auto px-4 lg:max-w-5xl md: max-w-2xl">
            <div className="grid sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 gap-4 place-content-center" ref={listRef}>
                {
                    beans?.map(bean => {
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