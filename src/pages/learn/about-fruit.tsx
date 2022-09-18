import { NextPage } from "next";

import coffeeFruitImage from "../../../public/learn-cards/fruit.png";
import LearnImage from "../../components/pages/learn/learnimage";
import LearnSection from "../../components/pages/learn/learnsection";

const AboutFruitPage: NextPage = () => {
    return (
        <>
            <h1 className="text-4xl place-self-start font-bold p-4">
                The Coffee Fruit
            </h1>
            <LearnSection title="Structure & Makeup">
                <LearnImage
                    src={coffeeFruitImage}
                    description="The Coffee Fruit"
                    className="w-52 md:w-96"
                />
                The size of coffee fruit can vary, but generally close to the
                size of a small grape. As seen in the diagram, the volume is
                mostly comprised of the seed with a thin bit of flesh beneath
                the skin. Coffee cherries start out green, and typically develop
                into a deep red when ripe. The key characteristic of ripeness is
                sugar. Generally speaking, the more sugar in the fruit the
                better. Some producers choose to pick the cherries at different
                stages of ripeness, which can produce a more complex coffee. The
                flesh of coffee cherries is surprisingly delicious. With some
                effort, the fruit juice can be extracted and enjoyed on its own.
                The seed, or coffee bean, is made up of several layers. The
                outermost layers, the parchment and silverskin, are removed to
                reveal two seeds. Typically these seeds sit facing each other
                along a flat surface. Sometimes only a single seed will develop
                within the coffee cherry, called a peaberry. Peaberries usually
                make up about five percent of the crop, and are usually
                separated from the rest. They can have unique qualities in the
                cup, and are roasted differently to best enhance their
                characteristics.
            </LearnSection>
        </>
    );
};

export default AboutFruitPage;
