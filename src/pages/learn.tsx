import { NextPage } from "next"
import DropDown from "../components/dropdown"
import Layout from "../components/layout"
import { trpc } from "../utils/trpc"

const LearnPage: NextPage = () => {
    const {data: varieties} = trpc.useQuery(["variety.getAll"])

    return (
        <Layout selectedBottomTab="learn">
            <div className="flex flex-col w-full">
                <section className="grid place-items-center">
                    <h1 className="text-4xl place-self-start pb-3">Inception</h1>
                    {
                        varieties && <DropDown title="Varieties" data={varieties} />
                    }
                </section>
                <div className="divider"></div>
                <div className="grid place-items-center">
                    <h1 className="text-5xl place-self-start pb-3">Process</h1>
                </div>
            </div>
        </Layout>
    )
}

export default LearnPage