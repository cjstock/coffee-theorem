import { NextPage } from "next";
import Layout from "../../components/layout";

const AboutTreePage: NextPage = () => {

    return (
        <Layout selectedBottomTab="learn">
            <h1 className="text-4xl place-self-start font-bold">The Coffee Tree</h1>
            <p>&emsp;This section deals only with the most interesting of the coffee specier, Coffea arabica. At first glance, all Arabica trees look similar: a thin trunk with numerous brances coming off it, supporting foliage and fruit. However, if you look closer there are many differences bewteen trees, determined by the varitey of Arabica being grown. Diefferent varieties yield different amounts of fruit, in different colors, and some carry the fruit in clusters, while others have fruit evernly spaced down the branch.</p>
        </Layout>
    )
}

export default AboutTreePage
