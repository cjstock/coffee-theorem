import { NextPage } from "next";
import { useRouter } from "next/router";
import { trpc } from "../../utils/trpc";

const BeanPage: NextPage = () => {
    const id = useRouter().query.id as string;
    const {data, isLoading, isError} = trpc.useQuery(["beans.byId", {id}])

    if (isLoading || !data) return <div>Loading...</div>
    if (isError) return <div>ERROR!</div>

    return (<>
        <div>{data.country}</div>
    </>)
}

export default BeanPage;