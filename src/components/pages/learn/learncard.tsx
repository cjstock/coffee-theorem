import Image from "next/image";

interface LearnCardProps {
    title: string;
    description: string;
    image: string;
}

const LearnCard = (props: LearnCardProps) => {
    return (
        <div className="shadow-xl card w-96 h-64 md:w-80 md:h-80 bg-base-100 image-full">
            <figure className="relative">
                <Image src={props.image} layout="fill" alt={`title`} />
            </figure>
            <div className="card-body text-matcha-100">
                <h2 className="card-title text-2xl">{props.title}</h2>
                <p className="italic">{props.description}</p>
            </div>
        </div>
    );
};

export default LearnCard;