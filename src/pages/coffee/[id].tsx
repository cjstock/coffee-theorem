import { NextPage } from "next";
import { useRouter } from "next/router";
import { useEffect, useReducer, useRef } from "react";
import Heading from "../../components/pages/coffee-collection/Heading";
import { trpc } from "../../utils/trpc";
import { initialState, reducer } from "../../utils/CoffeeReducer";
import CoffeeTypeSelect from "../../components/pages/coffee/CoffeeTypeSelect";
import SellerSection from "../../components/pages/coffee/SellerSection";
import { AnimatePresence, motion } from "framer-motion";
import BrewerSection from "../../components/pages/coffee/BrewerSection";
import ProducerSection from "../../components/pages/coffee/ProducerSection";
import RoasterSection from "../../components/pages/coffee/RoasterSection";
import Divider from "../../components/pages/coffee/Divider";
import { CheckIcon } from "@heroicons/react/24/outline";

const Coffee: NextPage = () => {
    const router = useRouter();
    const id = router.query.id as string;
    const titleRef = useRef<HTMLInputElement>(null);

    const [state, dispatch] = useReducer(reducer, initialState);

    const buttonVariants = {
        initial: {
            scale: 0
        },
        ready: {
            scale: 1,
        },
        clicked: {
            scale: 1.2,
        }
    }

    const {
        data: coffee,
        isLoading,
        isSuccess,
    } = trpc.coffee.byId.useQuery(
        { coffeeId: id },
        {
            enabled: id !== "add",
        }
    );

    const leftHeading = (
        <div>
            <div className="mt-1">
                <input
                    type="text"
                    name="originName"
                    id="originName"
                    key="left"
                    ref={titleRef}
                    className="block w-full border-0 bg-coffee-500 focus:ring-0 text-3xl text-matcha-100"
                    placeholder={state.isBlend ? "Name" : "Origin"}
                    value={state.originName}
                    onChange={(e) =>
                        dispatch({
                            type: "HANDLE INPUT TEXT",
                            field: e.currentTarget.name,
                            payload: e.currentTarget.value,
                        })
                    }
                />
            </div>
        </div>
    );

    const rightHeading = (
        <CoffeeTypeSelect
            key="right"
            value={state.isBlend ? "Blend" : "Single Origin"}
            dispatch={dispatch}
        />
    );

    useEffect(() => {
        if (titleRef.current) {
            titleRef.current.focus();
        }
    }, []);

    return (
        <AnimatePresence>
            <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1}}
                key={"body"}
            >
                <Heading leftSide={leftHeading} rightSide={rightHeading} />
                <SellerSection dispatch={dispatch} />
                <Divider />
                <RoasterSection dispatch={dispatch} />
                <Divider />
                <ProducerSection dispatch={dispatch} />
                <Divider />
                <BrewerSection dispatch={dispatch} />
            </motion.div>
            <motion.button
                variants={buttonVariants}
                initial="initial"
                animate="ready"
                whileTap="clicked"
                key={"button"}
                type="submit"
                className="fixed bottom-20 right-10 md:right-20 inline-flex items-center rounded-full border border-transparent bg-matcha-200 p-3 text-coffee-500 shadow-sm hover:bg-matcha-100 focus:outline-none transition-colors"
            >
                <CheckIcon className="h-10 w-10" />
            </motion.button>
        </AnimatePresence>
    );
};

export default Coffee;
