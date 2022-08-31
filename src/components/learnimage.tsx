import Image, { StaticImageData } from "next/image";

interface Props {
    src: StaticImageData;
    description?: string;
    className?: string;
}

const LearnImage = ({ src, description, className }: Props) => {
    return (
        <span className={`${className && className}`}>
            <Image src={src} layout="responsive" />
            <span>
                <em>{description}</em>
            </span>
        </span>
    );
};

export default LearnImage;
