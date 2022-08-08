import { NextPage } from "next"
import Layout from "../components/layout"
import LearnCard from "../components/learncard"
import { trpc } from "../utils/trpc"

const LearnPage: NextPage = () => {
    const { data: varieties } = trpc.useQuery(["variety.getAll"])

    return (
        <Layout selectedBottomTab="learn">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 place-items-center gap-4">
                <LearnCard
                    title="The Coffee Tree"
                    description="A brief explanation of Arabica coffee tree characteristics"
                    image="/learn-cards/soldiers.png"
                />
                <LearnCard
                    title="The Coffee Fruit"
                    description="A look at the coffee cherry"
                    image="/learn-cards/fruit.png"
                />
                <LearnCard
                    title="Coffee Varieties"
                    description="Explore some of the most prominent Arabica varieties"
                    image="/varieties/bourbon.png"
                />
                <LearnCard
                    title="Harvesting"
                    description="Learn about the methods and problems of harvesting Coffee Fruit"
                    image="/learn-cards/cherry-float.png"
                />
                <LearnCard
                    title="Processing"
                    description="Inside the transformation from cherry to ready-to-roast beans"
                    image="/learn-cards/process.png"
                />
                <LearnCard
                    title="Coffee Trade"
                    description="A brief history of trading and peek into 'Fair Trade'"
                    image="/learn-cards/trade.png"
                />
                <LearnCard
                    title="Roasting"
                    description="Fast or Slow, light or dark?"
                    image="/learn-cards/roast.png"
                />
                <LearnCard
                    title="Buying and Storing"
                    description="Tips for buying beans for home use, and how to keep them fresh"
                    image="/learn-cards/store.png"
                />
                <LearnCard
                    title="Tasting Coffee"
                    description="Learn to describe as you drink and concentrate"
                    image="/learn-cards/taste.png"
                />
                <LearnCard
                    title="Grinding Coffee"
                    description="Tune your beans for your brew"
                    image="/learn-cards/grind.png"
                />
                <LearnCard
                    title="Water for Brewing"
                    description="A tasty brew starts with tasty water"
                    image="/learn-cards/water.png"
                />
                <LearnCard
                    title="Brewing Basics"
                    description="Consistency is key"
                    image="/learn-cards/brew.png"
                />
            </div>
        </Layout>
    )
}

export default LearnPage
