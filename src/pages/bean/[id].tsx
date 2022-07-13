import { NextPage } from "next";
import { useRouter } from "next/router";
import Layout from "../../components/layout";
import { trpc } from "../../utils/trpc";

const BeanPage: NextPage = () => {
    const id = useRouter().query.id as string;
    const { data, isLoading, isError } = trpc.useQuery(["bean.byId", { id }])

    if (isLoading || !data) return <div>Loading...</div>
    if (isError) return <div>ERROR!</div>

    return (<>
        <Layout>
            <div>{data.country}</div>
        </Layout>
    </>)
}

export default BeanPage;