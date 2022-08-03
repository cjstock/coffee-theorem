
import { NextPage } from "next"
import LearnLayout from "../../components/learnlayout"

const ProcessPage: NextPage = () => {
    return (
        <LearnLayout selectedLearnTab="process">
            <div>{"process"}</div>
        </LearnLayout>
    )
}

export default ProcessPage