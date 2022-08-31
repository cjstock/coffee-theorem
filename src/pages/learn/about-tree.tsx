import { NextPage } from "next";
import Layout from "../../components/layout";
import LearnSection from "../../components/learnsection";

import arabicaDiagram from "../../../public/coffee-tree/arabica-diagram.png";
import coffeeSoldier from "../../../public/learn-cards/soldiers.png";
import { StaticImageData } from "next/image";

const AboutTreePage: NextPage = () => {
    const ARImages: Array<StaticImageData> = [arabicaDiagram, coffeeSoldier];
    const ARImageDescs: Array<string> = ["Coffea Arabica diagram"];
    return (
        <Layout selectedBottomTab="learn">
            <h1 className="text-4xl place-self-start font-bold p-4">
                The Coffee Tree
            </h1>
            <LearnSection
                images={ARImages}
                imageDescriptions={ARImageDescs}
                title="Arabica vs Robusta"
            >
                There are over 120 known coffee tree species in existence.
                However, only two are grown and cultivated in any meaningful
                quantity; <em>Coffea Arabica</em> and <em>Coffea Canephora</em>
                (commonly referred to as Robusta). Further secitons of this app
                will focus exclusively on Arabica beans, due to their higher
                prevalence in modern specialty coffee culture. Robusta plants
                can grow at lower altitudes, higher temperatures, and are
                generally more resistant to diseases. Unfortunately, they tend
                to lack in flavor and complexity compared to Arabica. Robusta
                plants produce coffee that tends to taste woody, with a lacking
                acidity and a heavy body. Although Robusta has been a staple of
                Italian espresso culture for decades, most is grown for use
                as... instant coffee!
                <br />
                <br />
                Upon first glance, all Arabica trees may look similar: a thin
                trunk with numerous branches coming off it, supporting foliage
                and fruit. However, the varietal of a coffee tree significantly
                affects its physical appearance, from the sparsity of its fruit,
                to the shape of its leaves. These significant differences in
                physical appearance are secondary to qualities found in the cup.
                Varieties carry distinct flavors and mouthfeels. As you will
                learn in other sections, every step between farm and cup effects
                the final qualities in the cup.
                <br />
                <br />
                Keep in mind that for producers, varieties are chosen based on
                characteristic that result in more reliable crops. Trees with
                higher resistance to disease lead to higher yields, which is key
                for those who rely on growing for their livelihood. The
                varieties section explores these characteristics in greater
                detail.
            </LearnSection>
        </Layout>
    );
};

export default AboutTreePage;
