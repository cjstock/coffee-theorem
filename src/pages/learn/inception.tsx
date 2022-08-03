import { NextPage } from "next"
import LearnLayout from "../../components/learnlayout"

const InceptionPage: NextPage = () => {
    return (
        <LearnLayout selectedLearnTab="inception">
            <div>{"inception"}</div>
        </LearnLayout>
    )
}

export default InceptionPage