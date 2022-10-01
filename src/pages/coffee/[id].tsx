import { NextPage } from "next";
import { useRouter } from "next/router";
import { useEffect, useReducer, useRef } from "react";
import Heading from "../../components/pages/coffee-collection/Heading";
import { trpc } from "../../utils/trpc";
import { initialState, reducer } from "../../utils/CoffeeReducer";
import SellerSection from "../../components/pages/coffee/SellerSection";
import { AnimatePresence, motion } from "framer-motion";
import BrewerSection from "../../components/pages/coffee/BrewerSection";
import ProducerSection from "../../components/pages/coffee/ProducerSection";
import RoasterSection from "../../components/pages/coffee/RoasterSection";
import Divider from "../../components/pages/coffee/Divider";
import { CheckIcon } from "@heroicons/react/24/outline";
import { useSession } from "next-auth/react";
import BeanSection from "../../components/pages/coffee/BeanSection";

const Coffee: NextPage = () => {
    const router = useRouter();
    const id = router.query.id as string;
    const session = useSession();
    const titleRef = useRef<HTMLInputElement>(null);

    const [state, dispatch] = useReducer(reducer, initialState);

    const buttonVariants = {
        initial: {
            scale: 0,
        },
        ready: {
            scale: 1,
        },
        clicked: {
            scale: 1.2,
        },
    };

    const { data: tastingNotes } = trpc.tastingNotes.getAll.useQuery(
        undefined,
        { refetchOnWindowFocus: false }
    );

    const {
        data: coffee,
        isLoading,
        isSuccess,
    } = trpc.coffee.byId.useQuery(
        { coffeeId: id },
        {
            enabled: id !== "add" && session.status === "authenticated",
            onSuccess(data) {
                dispatch({
                    type: "SET ALL",
                    payload: data,
                });
            },
        }
    );

    const createCoffeeMutation = trpc.coffee.upsertCoffee.useMutation();

    const leftHeading = (
        <div>
            <div className="mt-1">
                <input
                    type="text"
                    name="origin"
                    id="origi"
                    key="left"
                    ref={titleRef}
                    className="block w-full border-0 bg-coffee-500 focus:ring-0 text-3xl text-matcha-100"
                    placeholder="Origin"
                    value={state.origin}
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

    useEffect(() => {
        if (titleRef.current) {
            titleRef.current.focus();
        }

        session.status === "authenticated" &&
            !state.userId &&
            dispatch({
                type: "HANDLE INPUT TEXT",
                field: "userId",
                payload: session.data.user!.id,
            });
    }, [session.status, tastingNotes]);

    const handleSaveClick = (e: React.MouseEvent<HTMLElement>) => {
        e.preventDefault();
        createCoffeeMutation.mutate({ coffee: state });
    };

    return (
        <AnimatePresence>
            <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                key={"body"}
            >
                <Heading leftSide={leftHeading} />
                <BeanSection
                    state={state}
                    dispatch={dispatch}
                    tastingNotes={tastingNotes!}
                />
                <Divider />
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
                key="button"
                type="submit"
                className="fixed bottom-10 md:bottom-20 right-10 md:right-20 inline-flex items-center rounded-full border border-transparent bg-matcha-200 p-3 text-coffee-500 shadow-sm hover:bg-matcha-100 focus:outline-none transition-colors"
                onClick={handleSaveClick}
            >
                <CheckIcon className="h-10 w-10" />
            </motion.button>
        </AnimatePresence>
    );
};

export default Coffee;
