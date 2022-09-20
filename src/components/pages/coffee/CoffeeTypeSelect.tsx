import { Dispatch, Fragment, useState } from "react";
import { Listbox, Transition } from "@headlessui/react";
import { CheckIcon, ChevronDownIcon } from "@heroicons/react/20/solid";
import { ACTIONTYPE, initialState } from "../../../utils/CoffeeReducer";

const publishingOptions = [
    {
        title: "Single Origin",
        description: "Coffee sourced from a single crop or producer",
        current: true,
    },
    {
        title: "Blend",
        description:
            "Coffee composed of a combination of coffee beans, likely from different countries or regions",
        current: false,
    },
];

function classNames(...classes) {
    return classes.filter(Boolean).join(" ");
}

interface Props {
    value: "Blend" | "Single Origin";
    dispatch: Dispatch<ACTIONTYPE>;
}
const CoffeeTypeSelect = ({ value, dispatch }: Props) => {
    return (
        <Listbox
            value={value}
            onChange={() => dispatch({ type: "toggleIsBlend" })}
        >
            {({ open }) => (
                <>
                    <Listbox.Label className="sr-only">
                        {" "}
                        Change published status{" "}
                    </Listbox.Label>
                    <div className="relative">
                        <div className="inline-flex divide-x divide-coffee-400 rounded-md">
                            <div className="inline-flex divide-x divide-coffee-400 rounded-md shadow-sm">
                                <div className="inline-flex items-center rounded-l-md border border-coffee-200 bg-coffee-300 py-2 pl-3 pr-4 text-matcha-100 shadow-sm">
                                    <CheckIcon
                                        className="h-5 w-5"
                                        aria-hidden="true"
                                    />
                                    <p className="ml-2.5 text-sm font-medium">
                                        {value}
                                    </p>
                                </div>
                                <Listbox.Button className="inline-flex items-center rounded-l-none rounded-r-md bg-coffee-300 p-2 text-sm font-medium text-matcha-100 hover:bg-coffee-300 focus:outline-none focus:ring-2 focus:ring-coffee-200">
                                    <span className="sr-only">
                                        Change coffee type
                                    </span>
                                    <ChevronDownIcon
                                        className="h-5 w-5 text-matcha-100"
                                        aria-hidden="true"
                                    />
                                </Listbox.Button>
                            </div>
                        </div>

                        <Transition
                            show={open}
                            as={Fragment}
                            leave="transition ease-in duration-100"
                            leaveFrom="opacity-100"
                            leaveTo="opacity-0"
                        >
                            <Listbox.Options className="absolute right-0 z-10 mt-2 w-72 origin-top-right divide-y divide-coffee-400 overflow-hidden rounded-md bg-coffee-400 shadow-lg ring-1 ring-coffee-300 ring-opacity-5 focus:outline-none">
                                {publishingOptions.map((option) => (
                                    <Listbox.Option
                                        key={option.title}
                                        className={({ active }) =>
                                            classNames(
                                                active
                                                    ? "text-matcha-100 bg-coffee-300"
                                                    : "text-matcha-200",
                                                "cursor-default select-none p-4 text-sm"
                                            )
                                        }
                                        value={option}
                                    >
                                        {({ selected, active }) => (
                                            <div className="flex flex-col">
                                                <div className="flex justify-between">
                                                    <p
                                                        className={
                                                            selected
                                                                ? "font-semibold"
                                                                : "font-normal"
                                                        }
                                                    >
                                                        {option.title}
                                                    </p>
                                                    {selected ? (
                                                        <span
                                                            className={
                                                                active
                                                                    ? "text-matcha-100"
                                                                    : "text-matcha-100"
                                                            }
                                                        >
                                                            <CheckIcon
                                                                className="h-5 w-5"
                                                                aria-hidden="true"
                                                            />
                                                        </span>
                                                    ) : null}
                                                </div>
                                                <p
                                                    className={classNames(
                                                        active
                                                            ? "text-coffee-100"
                                                            : "text-coffee-200",
                                                        "mt-2"
                                                    )}
                                                >
                                                    {option.description}
                                                </p>
                                            </div>
                                        )}
                                    </Listbox.Option>
                                ))}
                            </Listbox.Options>
                        </Transition>
                    </div>
                </>
            )}
        </Listbox>
    );
};

export default CoffeeTypeSelect;
