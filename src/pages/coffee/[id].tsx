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
import { Brewer, Coffee, Producer, Roaster, Seller } from "@prisma/client";
import React from 'react';

function Coffee() {
    const router = useRouter();
    const id = router.query.id as string;   //Get coffee id or "add"
    const session = useSession();
    const titleRef = useRef<HTMLInputElement>(null);

    //Manage local state
    const state = useCoffee();
    const dispatch = useCoffeeDispatch();
    const [hasSeller, setHasSeller] = useState(false);
    const [sellerIsRoaster, setSellerIsRoaster] = useState(false);
    const [hasRoaster, setHasRoaster] = useState(false);
    const [hasProducer, setHasProducer] = useState(false);
    const [hasBrewer, setHasBrewer] = useState(false);


    const animation = useAnimation()

    //TRPC queries and mutations
    const tastingNotes = trpc.tastingNotes.getAll.useQuery(undefined, { refetchOnWindowFocus: false })

    function loadData(data: Coffee) {
        dispatch({ type: "SET BASE INFO", payload: data });
        dispatch({ type: "HANDLE SELLER INPUT", field: "coffeeId", payload: data.id })
        dispatch({ type: "HANDLE ROASTER INPUT", field: "coffeeId", payload: data.id })
        dispatch({ type: "HANDLE PRODUCER INPUT", field: "coffeeId", payload: data.id })
        dispatch({ type: "HANDLE BREWER INPUT", field: "coffeeId", payload: data.id })
    }

    function loadSeller(data: Seller) {
        dispatch({ type: "SET SELLER INFO", payload: data })
        setHasSeller(true)
        setSellerIsRoaster(data.isRoaster)
    }

    function loadRoaster(data: Roaster) {
        dispatch({ type: "SET ROASTER INFO", payload: data })
        !sellerIsRoaster && setHasRoaster(true)
    }
    function loadProducer(data: Producer) {
        dispatch({ type: "SET PRODUCER INFO", payload: data })
        setHasProducer(true)
    }
    function loadBrewer(data: Brewer) {
        dispatch({ type: "SET BREWER INFO", payload: data })
        setHasBrewer(true)
    }

    function handleSectionChange(event: React.MouseEvent<HTMLButtonElement>) {
        switch (event.currentTarget.name) {
            case "Seller": {
                setHasSeller(true)
                break
            }
            case "Roaster": {
                setHasRoaster(true)
                break
            }
            case "Producer": {
                setHasProducer(true)
                break
            }
            case "Brewer": {
                setHasBrewer(true)
                break
            }
            default:
                break;
        }
    }

    const coffee = trpc.coffee.byId.useQuery(
        { coffeeId: id },
        {
            refetchOnWindowFocus: false,
            enabled: id !== "add" && session.status === "authenticated",
            onSuccess(data) {
                if (data) {
                    loadData(data);
                }
            },
        }
    );
    const seller = trpc.seller.byId.useQuery(
        { sellerId: coffee.data?.sellerId },
        {
            refetchOnWindowFocus: false,
            enabled: !!coffee.data?.sellerId,
            onSuccess(data) {
                if (data) {
                    loadSeller(data);
                }
            },
        }
    )

    const roaster = trpc.roaster.byId.useQuery(
        { roasterId: coffee.data?.roasterId },
        {
            refetchOnWindowFocus: false,
            enabled: !!coffee.data?.roasterId,
            onSuccess(data) {
                if (data) {
                    loadRoaster(data);
                }
            },
        }
    )

    const producer = trpc.producer.byId.useQuery(
        { producerId: coffee.data?.producerId },
        {
            refetchOnWindowFocus: false,
            enabled: !!coffee.data?.producerId,
            onSuccess(data) {
                if (data) {
                    loadProducer(data);
                }
            },
        }
    )
    const brewer = trpc.brewer.byId.useQuery(
        { brewerId: coffee.data?.brewerId },
        {
            refetchOnWindowFocus: false,
            enabled: !!coffee.data?.brewerId,
            onSuccess(data) {
                if (data) {
                    loadBrewer(data);
                }
            },
        }
    )

    const upsertCoffeeMutation = trpc.coffee.upsertCoffee.useMutation();
    const upsertSellerMutation = trpc.seller.upsertSeller.useMutation();
    const upsertRoasterMutatuion = trpc.roaster.upsertRoaster.useMutation();
    const upsertProducerMutation = trpc.producer.upsertRoaster.useMutation();
    const upsertBrewerMutation = trpc.brewer.upsertBrewer.useMutation();


    useEffect(() => {
        if (titleRef.current) {
            titleRef.current.focus();
        }
        if (session.data?.user) {
            dispatch({ type: "RESET", payload: session.data?.user?.id })
        }
    }, [dispatch, id, session.data?.user]);

    const handleSaveClick = (e: React.MouseEvent<HTMLElement>) => {
        e.preventDefault();
        upsertCoffeeMutation.mutate(
            { coffee: state },
            {
                onSuccess(data) {
                    hasSeller && upsertSellerMutation.mutate({ seller: { ...state.seller, coffeeId: data.id } })
                    hasRoaster && upsertRoasterMutatuion.mutate({ roaster: { ...state.roaster, coffeeId: data.id } })
                    hasProducer && upsertProducerMutation.mutate({ producer: { ...state.producer, coffeeId: data.id } })
                    hasBrewer && upsertBrewerMutation.mutate({ brewer: { ...state.brewer, coffeeId: data.id } })
                },
            }
        )
        animation.start({
            scale: [1, 1.2, 1, 1.2, 1],
        })
    };

    function handleRoastedHereChange() {
        setSellerIsRoaster(!sellerIsRoaster)
    }

    return (
        <AnimatePresence>
            <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                key={"body"}
            >
                <Heading leftSide={
                    <input
                        type="text"
                        name="origin"
                        id="origin"
                        key="left"
                        ref={titleRef}
                        className="block w-full border-0 bg-coffee-500 focus:ring-0 text-2xl text-matcha-100"
                        placeholder="Origin"
                        value={state.origin}
                        onChange={(e) => dispatch({
                            type: "HANDLE INPUT TEXT",
                            field: e.currentTarget.name,
                            payload: e.currentTarget.value,
                        })} />
                } />
                {tastingNotes.data &&
                    <BeanSection
                        tastingNotes={tastingNotes.data} />
                }
                {hasSeller && <><Divider /><SellerSection handleRoastedHereChange={() => handleRoastedHereChange} /></>}
                {hasRoaster && !sellerIsRoaster && <><Divider /><RoasterSection /></>}
                {hasProducer && <><Divider /><ProducerSection /></>}
                {hasBrewer && <><Divider /><BrewerSection /></>}
                <CoffeeSectionAdd hasSeller={hasSeller} hasRoaster={hasRoaster} hasProducer={hasProducer} hasBrewer={hasBrewer} handler={handleSectionChange} />
            </motion.div >
            <motion.button
                initial={{ width: "auto", height: "atuo" }}
                animate={animation}
                transition={{
                    duration: 1,
                    times: [0, 0.25, 0.75, 1]
                }}
                key="button"
                type="submit"
                className="fixed bottom-10 md:bottom-20 right-10 md:right-20 inline-flex items-center text-center rounded-full border border-transparent bg-matcha-100 p-3 text-coffee-500 shadow-sm focus:outline-none transition-colors"
                onClick={handleSaveClick}
            >
                <CheckIcon className="h-10 w-10" />
            </motion.button>
        </AnimatePresence >
    );
}

export default Coffee;
