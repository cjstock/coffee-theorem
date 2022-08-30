import { NextPage } from "next";
import Layout from "../../components/layout";

import Image from "next/image";
import arabicaDiagram from "../../../public/coffee-tree/arabica-diagram.png";

const AboutTreePage: NextPage = () => {
    return (
        <Layout selectedBottomTab="learn">
            <h1 className="text-4xl place-self-start font-bold p-4">
                The Coffee Tree
            </h1>
            <p className="text-left">
                <span className="w-96 float-right m-5">
                    <Image src={arabicaDiagram} layout="responsive" />
                    <span>
                        <em>Coffea Arabica diagram</em>
                    </span>
                </span>
                There are over 120 known coffee tree species in existence.
                However, only 2 are grown and cultivated in any meaningful
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
            </p>
        </Layout>
    );
};

export default AboutTreePage;
