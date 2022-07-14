import { NextPage } from "next";
import { useRouter } from "next/router";
import Layout from "../../components/layout";
import { trpc } from "../../utils/trpc";

const BeanPage: NextPage = () => {
    const id = useRouter().query.id as string;
    const { data, isLoading, isError } = trpc.useQuery(["bean.byId", { id }])

    return (<>
        <Layout>
            {data && data.country}
        </Layout>
    </>)
}

export default BeanPage;