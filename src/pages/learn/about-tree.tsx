import { NextPage } from "next";
import Layout from "../../components/layout";
import LearnSection from "../../components/learnsection";

import arabicaDiagram from "../../../public/coffee-tree/arabica-diagram.png";
import soldiersImg from "../../../public/learn-cards/soldiers.png";
import seedlingImg from "../../../public/coffee-tree/seedlings.png";
import LearnImage from "../../components/learnimage";

const AboutTreePage: NextPage = () => {
    return (
        <Layout selectedBottomTab="learn">
            <h1 className="text-4xl place-self-start font-bold p-4">
                The Coffee Tree
            </h1>
            <LearnSection title="Arabica vs Robusta">
                <LearnImage
                    src={arabicaDiagram}
                    description="Coffea Arabica diagram"
                    className="float-right w-32 md:w-64 m-5"
                />
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
            </LearnSection>
            <LearnSection title="From Seed to Tree">
                <div className="flex flex-col float-right">
                    <LearnImage
                        src={soldiersImg}
                        description="Coffee shoots, known as 'soldiers', are the first stage of coffee plant growth."
                        className="float-right w-32 md:w-72 m-5"
                    />
                    <LearnImage
                        src={seedlingImg}
                        description="Coffee seedlings growing before being sold to plantations."
                        className="float-right w-32 md:w-72 m-5"
                    />
                </div>
                Many coffee farms start the process by raising seedlings in a
                nursery before planting them on the farm. Oddly enough, the bean
                develops a shoot that lifts it out of the ground. This results
                in a patch of coffee beans each suspended by a single thin green
                stem. Next, the bean bursts open revealing the first leaves.
                After this stage they are typcially moved from the nursey to
                production. Most coffee trees take between 2-4 years before
                first harvest. Typically the main harvest is triggered by heavy
                rainfall, causing the trees to bloom. Arabica can pollinate
                itself, so as long as the plants make it to this stage they will
                yield fruit. About nine months later farms can begin harvesting.
                Unfortunately, coffee cherries don&apos;t ripen uniformly. Many
                specialty producers will hand harvest, allowing all cherries to
                fully ripen before being picked. While this leads to a higher
                quality yield, it is very expensive.
            </LearnSection>
        </Layout>
    );
};

export default AboutTreePage;
