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

const Coffee: NextPage = () => {
    const router = useRouter();
    const id = router.query.id as string;
    const titleRef = useRef<HTMLInputElement>(null);

    const [state, dispatch] = useReducer(reducer, initialState);

    const {
        data: coffee,
        isLoading,
        isSuccess,
    } = trpc.useQuery(["bean.byId", { id }]);

    const leftHeading = (
        <div>
            <div className="mt-1">
                <input
                    type="text"
                    name="name"
                    id="name"
                    ref={titleRef}
                    className="block w-full border-0 bg-coffee-500 focus:ring-0 text-3xl text-matcha-100"
                    placeholder={state.isBlend ? "Name" : "Origin"}
                    value={state.originName}
                    onChange={(e) =>
                        dispatch({
                            type: "setOriginName",
                            payload: e.currentTarget.value,
                        })
                    }
                />
            </div>
        </div>
    );

    const rightHeading = (
        <CoffeeTypeSelect
            value={state.isBlend ? "Blend" : "Single Origin"}
            dispatch={dispatch}
        />
    );

    useEffect(() => {
        if (!titleRef.current) throw Error("titleRef is not assigned!");
        titleRef.current.focus();
    }, []);

    return (
        <AnimatePresence>
            <motion.div
                initial={{ opacity: 0, scale: 0 }}
                animate={{ opacity: 1, scale: 1 }}
            >
                <Heading leftSide={leftHeading} rightSide={rightHeading} />
                <SellerSection />

                <Divider />
                <RoasterSection />
                <Divider />
                <ProducerSection />
                <Divider />
                <BrewerSection />
            </motion.div>
        </AnimatePresence>
    );
};

export default Coffee;
