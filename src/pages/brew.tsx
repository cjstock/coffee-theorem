import { NextPage } from "next"
import LearnLayout from "../components/learnlayout"

const BrewPage: NextPage = () => {
    return (
        <LearnLayout selectedLearnTab="brew">
            <div>{"brew"}</div>
        </LearnLayout>
    )
}

export default BrewPage