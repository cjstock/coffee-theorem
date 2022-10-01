import React, { Dispatch, useState } from "react";
import { CheckIcon, ChevronUpDownIcon } from "@heroicons/react/20/solid";
import { Combobox } from "@headlessui/react";
import classNames from "../../utils/ClassNames";
import { ACTIONTYPE } from "../../utils/CoffeeReducer";
import { TastingNote } from "@prisma/client";

interface SearchBoxProps {
    title: string;
    id: string;
    options: TastingNote[];
    dispatch: Dispatch<ACTIONTYPE>;
}
const SearchBox = ({ title, id, options, dispatch }: SearchBoxProps) => {
    const [query, setQuery] = useState("");
    const [selectedOption, setSelectedOption] = useState<TastingNote>();

    const filteredResults =
        query === ""
            ? options
            : options.filter((option) => {
                  return option.note
                      .toLowerCase()
                      .includes(query.toLowerCase());
              });

    const handleAddTastingNote = () => {
        selectedOption &&
            dispatch({
                type: "HANDLE ADD TASTING NOTE",
                payload: selectedOption.note,
            });
    };

    return (
        <div className="col-span-3 sm:col-span-2">
            <Combobox
                as="div"
                value={selectedOption}
                onChange={setSelectedOption}
            >
                <Combobox.Label className="block text-sm font-medium text-matcha-100">
                    {title}
                </Combobox.Label>
                <div className="flex relative mt-1">
                    <Combobox.Input
                        className="w-full rounded-md rounded-r-none border border-coffee-200 bg-coffee-400 text-matcha-100 py-2 pl-3 pr-10 shadow-sm focus:border-coffee-100 focus:ring-coffee-100 sm:text-sm"
                        onChange={(event) => setQuery(event.target.value)}
                    />
                    <Combobox.Button className="absolute inset-y-0 right-14 flex items-center rounded-r-md px-2 focus:outline-none">
                        <ChevronUpDownIcon
                            className="h-5 w-5 text-matcha-100"
                            aria-hidden="true"
                        />
                    </Combobox.Button>
                    <button
                        className="rounded-r-md border border-coffee-200 px-3 text-matcha-100 bg-coffee-300 sm:text-sm focus:outline-none"
                        type="button"
                        id="tastingNotes"
                        onClick={handleAddTastingNote}
                    >
                        Add
                    </button>

                    {filteredResults?.length > 0 && (
                        <Combobox.Options className="absolute z-10 mt-1 max-h-60 w-full overflow-auto rounded-md bg-coffee-400 py-1 text-matcha-100 shadow-lg ring-2 ring-coffee-300 ring-opacity-1 focus:outline-none sm:text-sm">
                            {filteredResults.map((result) => (
                                <Combobox.Option
                                    key={result.id}
                                    value={result.note}
                                    className={({ active }) =>
                                        classNames(
                                            "relative cursor-default select-none py-2 pl-3 pr-1",
                                            active
                                                ? "bg-coffee-300 text-matcha-100"
                                                : "text-matcha-200"
                                        )
                                    }
                                >
                                    {({ active, selected }) => (
                                        <>
                                            <span
                                                className={classNames(
                                                    "block truncate",
                                                    selected
                                                        ? "font-semibold"
                                                        : ""
                                                )}
                                            >
                                                {result.note}
                                            </span>

                                            {selected && (
                                                <span
                                                    className={classNames(
                                                        "absolute inset-y-0 right-0 flex items-center pr-4",
                                                        active
                                                            ? "text-matcha-100"
                                                            : "text-matcha-200"
                                                    )}
                                                >
                                                    <CheckIcon
                                                        className="h-5 w-5"
                                                        aria-hidden="true"
                                                    />
                                                </span>
                                            )}
                                        </>
                                    )}
                                </Combobox.Option>
                            ))}
                        </Combobox.Options>
                    )}
                </div>
            </Combobox>
        </div>
    );
};

export default SearchBox;
