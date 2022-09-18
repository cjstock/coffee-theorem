import { faFireFlameCurved } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { motion } from "framer-motion";
import { createRef, useEffect, useState } from "react";

const BeanHeading = () => {
    const [heading, setHeading] = useState("");
    const [roast, setRoast] = useState("");
    const headingRef = createRef<HTMLInputElement>();

    useEffect(() => {
        headingRef.current.focus();
    }, []);

    return (
        <div className="m-auto w-full">
            <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                className="flex flex-col text-primary"
            >
                <input
                    ref={headingRef}
                    value={heading}
                    placeholder="Origin/Blend"
                    className="bg-base-300 text-5xl border-b-2 w-1/3 focus:outline-none"
                    onChange={(e) => setHeading(e.currentTarget.value)}
                    type="text"
                />
                <span className="inline-flex">
                    <FontAwesomeIcon
                        icon={faFireFlameCurved}
                        className="w-5 h-5 mr-2 mt-1"
                    />
                    <input
                        value={roast}
                        placeholder="Roast"
                        className="bg-base-300 text-2xl focus:outline-none"
                        onChange={(e) => setRoast(e.currentTarget.value)}
                    />
                </span>
            </motion.div>
        </div>
    );
};

export default BeanHeading;
