
import { NextPage } from "next"
import LearnLayout from "../../components/learnlayout"

const RoastPage: NextPage = () => {
    return (
        <LearnLayout selectedLearnTab="roast">
            <div>{"roast"}</div>
        </LearnLayout>
    )
}

export default RoastPage