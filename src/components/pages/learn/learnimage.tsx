import Image, { StaticImageData } from "next/image";

interface Props {
    src: StaticImageData;
    description?: string;
    className?: string;
}

const LearnImage = ({ src, description, className }: Props) => {
    return (
        <span
            className={`text-xs float-right w-32 md:w-64 m-5 ${
                className && className
            }`}
        >
            <Image src={src} layout="responsive" alt={description} />
            <span>
                <em>{description}</em>
            </span>
        </span>
    );
};

export default LearnImage;
