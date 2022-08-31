import { ReactNode } from "react";
import { StaticImageData } from "next/image";
import Image from "next/image";

interface Props {
    images: Array<StaticImageData> | undefined;
    imageDescriptions: Array<string> | undefined;
    title: string;
    children: ReactNode | undefined;
}

const LearnSection = ({
    images,
    imageDescriptions,
    title,
    children,
}: Props) => {
    return (
        <div className="border-secondary border-2 border-dotted rounded-lg p-5">
            <div className="text-left">
                {images &&
                    images.map((image, index) => (
                        <span
                            key={index}
                            className="w-32 md:w-80 float-right m-5"
                        >
                            <Image src={image} layout="responsive" />
                            <span>
                                <em>{imageDescriptions?.at(index)}</em>
                            </span>
                        </span>
                    ))}
                <h2 className="text-xl mb-2 font-bold">{title}</h2>
                {children}
            </div>
        </div>
    );
};

export default LearnSection;
