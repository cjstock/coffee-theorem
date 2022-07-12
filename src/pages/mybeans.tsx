import { NextPage } from "next";
import Link from "next/link";
import { trpc } from "../utils/trpc";
import BeanCard from "../components/beancard"
import AddBeanCard from "../components/addbeancard";

const MyBeans: NextPage = () => {
    const { data, isLoading, isError } = trpc.useQuery(["beans.getAll"])


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
                <AddBeanCard/>
            </div>
        </div>
    </>)
}

export default MyBeans;