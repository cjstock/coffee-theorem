import { NextPage } from "next";
import Layout from "../../components/layout";

const AboutTreePage: NextPage = () => {

    return (
        <Layout selectedBottomTab="learn">
            <h1 className="text-4xl place-self-start font-bold p-4">The Coffee Tree</h1>
            <p>&emsp;While there are two species of coffee plants, <em>Coffea Arabica</em> and <em>Coffea Canephora</em> (commonly refered to as Robusta), we will focus exclusively on the former. Although plenty of farms produce Robusta beans, they are not as tasty to brew and drink. Robusta beans are appealing to producers because of their more forgiving and consistent growing attributes, including: lower growing altitudes, higher growing temperatures, and higher resistance to disease. These factors lead to a cheaper and more resiliant bean which is lower quality than Arabica. This doesn't stop large manufacturing plants from spitting out what calculates to 40% of the world's coffee production each year.</p>
            <p>&emsp;</p>
        </Layout>
    )
}

export default AboutTreePage
