import { NextPage } from "next";
import Link from "next/link";
import { trpc } from "../utils/trpc";
import BeanCard from "../components/beancard"

const MyBeans: NextPage = () => {
    const { data, isLoading, isError } = trpc.useQuery(["beans.getAll"])

    if (isLoading || !data) return <div>Loading...</div>
    if (isError) return <div>ERROR!</div>

    return (<>
        <div className="mx-auto px-4 lg:max-w-5xl md: max-w-2xl">
            <div className="grid sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 gap-4 place-content-center">
                {
                    data.map(bean => {
                        return (
                            <Link href={ `/bean/${bean.id}` }>
                                <a key={bean.id}>
                                <BeanCard value={bean} key={bean.id} />
                                </a>
                            </Link>
                        )
                    })
                }
            </div>
        </div>
    </>)
}

export default MyBeans;