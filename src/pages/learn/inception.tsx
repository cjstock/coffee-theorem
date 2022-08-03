import { Variety } from "@prisma/client"
import { GetServerSideProps, NextPage } from "next"
import DropDown from "../../components/dropdown"
import LearnLayout from "../../components/learnlayout"
import { trpc } from "../../utils/trpc"

const InceptionPage:NextPage = () => {
    const {data:varieties} = trpc.useQuery(["variety.getAll"])
    return (
        <LearnLayout selectedLearnTab="inception">
            {
                varieties && <DropDown title="Varieties" data={varieties} />
            }
        </LearnLayout>
    )
}

export default InceptionPage