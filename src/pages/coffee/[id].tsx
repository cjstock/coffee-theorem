import { useRouter } from "next/router";
import { useEffect, useReducer, useRef } from 'react';
import Heading from "../../components/pages/coffee-collection/Heading";
import { trpc } from "../../utils/trpc";
import { initialState, reducer } from '../../utils/CoffeeReducer';
import SellerSection from "../../components/pages/coffee/SellerSection";
import { AnimatePresence, motion, useAnimation } from "framer-motion";
import BrewerSection from "../../components/pages/coffee/BrewerSection";
import ProducerSection from "../../components/pages/coffee/ProducerSection";
import RoasterSection from "../../components/pages/coffee/RoasterSection";
import Divider from "../../components/pages/coffee/Divider";
import { CheckIcon } from "@heroicons/react/24/outline";
import { useSession } from "next-auth/react";
import BeanSection from "../../components/pages/coffee/BeanSection";
import LoadingCoffee from "../../components/common/LoadingCoffee";

function Coffee() {
    const router = useRouter();
    const id = router.query.id as string;
    const session = useSession();
    const titleRef = useRef<HTMLInputElement>(null);

    const [state, dispatch] = useReducer(reducer, initialState);


    const animation = useAnimation()

    const tastingNotes = trpc.tastingNotes.getAll.useQuery(undefined, { refetchOnWindowFocus: false })

    const coffee = trpc.coffee.byId.useQuery(
        { coffeeId: id },
        {
            enabled: id !== "add" && session.status === "authenticated",
            onSuccess(data) {

                data && dispatch({
                    type: "SET BASE INFO",
                    payload: data,
                });
                console.log(data);
            },
        }
    );

    const upsertCoffeeMutation = trpc.coffee.upsertCoffee.useMutation();

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
                    onChange={(e) => dispatch({
                        type: "HANDLE INPUT TEXT",
                        field: e.currentTarget.name,
                        payload: e.currentTarget.value,
                    })} />
            </div>
        </div>
    );

    useEffect(() => {
        if (titleRef.current) {
            titleRef.current.focus();
        }

        session.data?.user &&
            dispatch({
                type: "HANDLE INPUT TEXT",
                field: "userId",
                payload: session.data.user.id,
            });
    }, [session.data?.user, coffee.data]);

    const handleSaveClick = (e: React.MouseEvent<HTMLElement>) => {
        e.preventDefault();
        upsertCoffeeMutation.mutate({ coffee: state })
        animation.start({
            scale: [1, 1.2, 1.2, 1],
        })
    };

    if (id === "add") {
        return <AnimatePresence>
            <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                key={"body"}
            >
                <Heading leftSide={leftHeading} />
                {tastingNotes.data &&
                    <BeanSection
                        state={state}
                        dispatch={dispatch}
                        tastingNotes={tastingNotes.data} />
                }
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
                animate="animation"
                key="button"
                type="submit"
                className="fixed bottom-10 md:bottom-20 right-10 md:right-20 inline-flex items-center rounded-full border border-transparent bg-matcha-200 p-3 text-coffee-500 shadow-sm hover:bg-matcha-100 focus:outline-none transition-colors"
                onClick={handleSaveClick}
            >
                <CheckIcon className="h-10 w-10" />
            </motion.button>
        </AnimatePresence>;
    } else if (coffee.isLoading) {
        return <LoadingCoffee />;
    } else {
        return (
            <AnimatePresence>
                <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    key={"body"}
                >
                    <Heading leftSide={leftHeading} />
                    {tastingNotes.data &&
                        <BeanSection
                            state={state}
                            dispatch={dispatch}
                            tastingNotes={tastingNotes.data} />
                    }
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
}


export default Coffee;
