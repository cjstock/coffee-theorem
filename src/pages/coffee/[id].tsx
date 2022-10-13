import { useRouter } from "next/router";
import { useEffect, useRef, useState } from 'react';
import Heading from "../../components/pages/coffee-collection/Heading";
import { trpc } from "../../utils/trpc";
import SellerSection from "../../components/pages/coffee/SellerSection";
import { AnimatePresence, motion, useAnimation } from "framer-motion";
import BrewerSection from "../../components/pages/coffee/BrewerSection";
import ProducerSection from "../../components/pages/coffee/ProducerSection";
import RoasterSection from "../../components/pages/coffee/RoasterSection";
import Divider from "../../components/pages/coffee/Divider";
import { CheckIcon } from "@heroicons/react/24/outline";
import { useSession } from "next-auth/react";
import BeanSection from "../../components/pages/coffee/BeanSection";
import { useCoffee, useCoffeeDispatch } from '../../utils/CoffeeContext';
import CoffeeSectionAdd from "../../components/pages/coffee/CoffeeSectionAdd";

export type SectionsState = {
    hasSeller: boolean,
    hasRoaster: boolean,
    hasProducer: boolean,
    hasBrewer: boolean,
};

function Coffee() {
    const router = useRouter();
    const id = router.query.id as string;   //Get coffee id or "add"
    const session = useSession();
    const titleRef = useRef<HTMLInputElement>(null);

    //Manage local state
    const state = useCoffee();
    const dispatch = useCoffeeDispatch();
    const [sectionState, setSectionState] = useState<SectionsState>({
        hasSeller: false,
        hasRoaster: false,
        hasProducer: false,
        hasBrewer: false,
    });

    const animation = useAnimation()

    //TRPC queries and mutations
    const tastingNotes = trpc.tastingNotes.getAll.useQuery(undefined, { refetchOnWindowFocus: false })

    const coffee = trpc.coffee.byId.useQuery(
        { coffeeId: id },
        {
            enabled: id !== "add" && session.status === "authenticated",
            onSuccess(data) {
                data && dispatch({ type: "SET BASE INFO", payload: data });
            },
        }
    );
    const seller = trpc.seller.byId.useQuery(
        { sellerId: coffee.data?.sellerId },
        {
            enabled: !!coffee.data && sectionState.hasSeller,
            onSuccess(data) {
                data && dispatch({ type: "SET SELLER INFO", payload: data })
            },
        }
    )

    const upsertCoffeeMutation = trpc.coffee.upsertCoffee.useMutation();
    const upsertSellerMutation = trpc.seller.upsertSeller.useMutation();


    useEffect(() => {
        if (titleRef.current) {
            titleRef.current.focus();
        }
        if (id === "add" && session.data?.user) {
            dispatch({ type: "RESET", payload: session.data?.user?.id })
        }
    }, [dispatch, id, session.data?.user]);

    const handleSaveClick = (e: React.MouseEvent<HTMLElement>) => {
        e.preventDefault();
        upsertCoffeeMutation.mutate({ coffee: state })
        sectionState.hasSeller && upsertSellerMutation.mutate({ seller: state.seller })
        animation.start({
            scale: [1, 1.2, 1.2, 1],
        })
    };

    return (
        <AnimatePresence>
            <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                key={"body"}
            >
                <Heading leftSide={
                    <div>
                        <div className="mt-1">
                            <input
                                type="text"
                                name="origin"
                                id="origin"
                                key="left"
                                ref={titleRef}
                                className="block w-full border-0 bg-coffee-500 focus:ring-0 text-3xl text-matcha-100"
                                placeholder="Origin"
                                value={state.origin}
                                onChange={(e) => dispatch({
                                    type: "HANDLE INPUT TEXT",
                                    field: e.currentTarget.name,
                                    payload: e.currentTarget.value,
                                })} />
                        </div>
                    </div>
                } />
                {tastingNotes.data &&
                    <BeanSection
                        tastingNotes={tastingNotes.data} />
                }
                {sectionState.hasSeller && <><Divider /><SellerSection /></>}
                {sectionState.hasRoaster && <><Divider /><RoasterSection /></>}
                {sectionState.hasProducer && <><Divider /><ProducerSection /></>}
                {sectionState.hasBrewer && <><Divider /><BrewerSection /></>}
                <CoffeeSectionAdd state={sectionState} handler={setSectionState} />
            </motion.div>
            <motion.button
                initial={{ width: 70, height: 70 }}
                animate={animation}
                transition={{
                    duration: 1,
                    times: [0, 0.25, 0.75, 1]
                }}
                key="button"
                type="submit"
                className="fixed bottom-10 md:bottom-20 right-10 md:right-20 inline-flex items-center text-center rounded-full border border-transparent bg-matcha-200 p-3 text-coffee-500 shadow-sm hover:bg-matcha-100 focus:outline-none transition-colors"
                onClick={handleSaveClick}
            >
                <CheckIcon className="h-10 w-10" />
            </motion.button>
        </AnimatePresence>
    );
}

export default Coffee;
