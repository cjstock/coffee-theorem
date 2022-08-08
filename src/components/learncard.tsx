import Image from "next/image";

interface LearnCardProps {
    title: string,
    description: string,
    image: string
}

const LearnCard = (props: LearnCardProps) => {
    return (
        <div className="shadow-xl card w-96 h-64 md:w-80 md:h-80 bg-base-100 image-full">
            <figure className="relative"><Image src={props.image} layout="fill"/></figure>
            <div className="card-body">
                <h2 className="card-title text-2xl">{props.title}</h2>
                <p className="italic">{props.description}</p>
                <div className="justify-end card-actions">
                    <button className="btn btn-primary">Explore</button>
                </div>
            </div>
        </div>
    )
};

export default LearnCard;
