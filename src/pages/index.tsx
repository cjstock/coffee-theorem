import type { NextPage } from "next";
import { useSession } from "next-auth/react";
import { useEffect, useState } from "react";
import { trpc } from "../utils/trpc";
import { AnimatePresence, Reorder } from "framer-motion";
import Link from "next/link";
import Heading from "../components/pages/coffee-collection/Heading";
import { MagnifyingGlassIcon } from "@heroicons/react/24/outline";
import { Coffee } from "@prisma/client";
import Router from "next/router";
import BeanCard from "../components/pages/coffee-collection/BeanCard";

const Home: NextPage = () => {
    const session = useSession();

    const {
        data: coffees,
        isLoading,
        isSuccess,
    } = trpc.coffee.getAll.useQuery(
        { userId: session.data?.user?.id as string },
        {
            enabled: session.status === "authenticated",
        }
    );

    const leftSide = (
        <h3 className="text-lg font-medium leading-6 text-matcha-100">
            Your Coffee Collection
        </h3>
    );

    const rightSide = (
        <div className="mt-3 flex sm:mt-0 sm:ml-4">
            <button
                type="button"
                className="inline-flex items-center rounded-md border border-transparent bg-matcha-200 mr-5 px-4 py-2 text-sm font-medium text-white shadow-sm hover:bg-matcha-100 focus:outline-none focus:ring-0 transition-colors"
                onClick={() => Router.push("coffee/add")}
            >
                Add Coffee
            </button>
            <label htmlFor="mobile-search-candidate" className="sr-only">
                Filter
            </label>
            <label htmlFor="desktop-search-candidate" className="sr-only">
                Filter
            </label>
            <div className="flex rounded-md shadow-sm">
                <div className="relative flex-grow focus-within:z-10">
                    <div className="pointer-events-none absolute inset-y-0 left-0 flex items-center pl-3">
                        <MagnifyingGlassIcon
                            className="h-5 w-5 text-matcha-100"
                            aria-hidden="true"
                        />
                    </div>
                    <input
                        type="text"
                        name="mobile-search-candidate"
                        id="mobile-search-candidate"
                        className="block w-full rounded-none rounded-l-md text-matcha-100 bg-coffee-400 border-coffee-300 pl-10 focus:border-coffee-200 focus:ring-coffee-200 sm:hidden transition-colors"
                        placeholder="Filter"
                    />
                    <input
                        type="text"
                        name="desktop-search-candidate"
                        id="desktop-search-candidate"
                        className="hidden w-full rounded-none rounded-l-md text-matcha-100 bg-coffee-400 border-coffee-300 pl-10 focus:border-coffee-200 focus:ring-coffee-200 sm:block sm:text-sm transition-colors"
                        placeholder="Filter Coffees"
                    />
                </div>
            </div>
        </div>
    );

    const [coffeeState, setCoffeeState] = useState<Array<Coffee>>([]);

    useEffect(() => {
        coffees && setCoffeeState(coffees as never[]);
    }, [coffees]);

    isLoading && <Heading leftSide={leftSide} rightSide={rightSide} />;

    return (
        <AnimatePresence>
            <Heading
                key={"heading"}
                leftSide={leftSide}
                rightSide={rightSide}
            />
            {isSuccess && (
                <Reorder.Group
                    axis="x"
                    values={coffeeState}
                    onReorder={setCoffeeState}
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    key={"cards"}
                    className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4"
                >
                    {coffeeState.map((coffee) => (
                        <Link key={coffee.id} href={`coffee/${coffee.id}`}>
                            <a>
                                <BeanCard coffee={coffee} />
                            </a>
                        </Link>
                    ))}
                </Reorder.Group>
            )}
        </AnimatePresence>
    );
};

export default Home;
