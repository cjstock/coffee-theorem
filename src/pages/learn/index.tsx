import { NextPage } from "next";
import LearnCard from "../../components/pages/learn/learncard";
import Link from "next/link";

const LearnPage: NextPage = () => {
    const learnData = [
        {
            title: "The Coffee Tree",
            description:
                "A brief explanation of Arabica coffee tree characteristics",
            image: "/learn-cards/soldiers.png",
            url: "/learn/about-tree",
        },
        {
            title: "The Coffee Fruit",
            description: "A look at the coffee cherry",
            image: "/learn-cards/fruit.png",
            url: "/learn/about-fruit",
        },
        {
            title: "Coffee Varieties",
            description: "Explore some of the most prominent Arabica varieties",
            image: "/varieties/bourbon.png",
            url: "/learn/about-varieties",
        },
        {
            title: "Harvesting",
            description:
                "Learn about the methods and problems of harvesting Coffee Fruit",
            image: "/learn-cards/cherry-float.png",
            url: "/learn/about-harvesting",
        },
        {
            title: "Processing",
            description:
                "Inside the transformation from cherry to ready-to-roast beans",
            image: "/learn-cards/process.png",
            url: "/learn/about-processing",
        },
        {
            title: "Coffee Trade",
            description:
                "A brief history of trading and peek into 'Fair Trade'",
            image: "/learn-cards/trade.png",
            url: "/learn/about-trade",
        },
        {
            title: "Roasting",
            description: "Fast or Slow, light or dark?",
            image: "/learn-cards/roast.png",
            url: "/learn/about-roasting",
        },
        {
            title: "Buying and Storing",
            description:
                "Tips for buying beans for home use, and how to keep them fresh",
            image: "/learn-cards/store.png",
            url: "/learn/about-buy-and-store",
        },
        {
            title: "Tasting Coffee",
            description: "Learn to describe as you drink and concentrate",
            image: "/learn-cards/taste.png",
            url: "/learn/about-tasting",
        },
        {
            title: "Grinding Coffee",
            description: "Tune your beans for your brew",
            image: "/learn-cards/grind.png",
            url: "/learn/about-grinding",
        },
        {
            title: "Water for Brewing",
            description: "A tasty brew starts with tasty water",
            image: "/learn-cards/water.png",
            url: "/learn/about-water",
        },
        {
            title: "Brewing Basics",
            description: "Consistency is key",
            image: "/learn-cards/brew.png",
            url: "/learn/about-brew-basics",
        },
    ];

    return (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 place-items-center gap-4">
            {learnData.map((data) => {
                return (
                    <Link href={data.url} key={data.title}>
                        <a>
                            <LearnCard
                                title={data.title}
                                description={data.description}
                                image={data.image}
                            />
                        </a>
                    </Link>
                );
            })}
        </div>
    );
};

export default LearnPage;
