
import { NextPage } from "next"
import LearnLayout from "../components/learnlayout"

const TastePage: NextPage = () => {
    return (
        <LearnLayout selectedLearnTab="taste">
            <div>{"taste"}</div>
        </LearnLayout>
    )
}

export default TastePage