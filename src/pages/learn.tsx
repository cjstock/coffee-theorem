import { NextPage } from "next";
import LearnLayout from "../components/learnlayout";

const Learn: NextPage = () => {

    return (
        <LearnLayout selectedLearnTab="inception">
            <p>{"Let's get it going!"}</p>
        </LearnLayout>
    )
}

export default Learn