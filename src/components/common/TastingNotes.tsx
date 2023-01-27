import React, { ChangeEvent, useState } from "react";
import { CheckIcon, ChevronUpDownIcon } from "@heroicons/react/20/solid";
import { Combobox } from "@headlessui/react";
import classNames from "../../utils/ClassNames";
import { TastingNote } from "@prisma/client";
import { useCoffee, useCoffeeDispatch } from '../../utils/CoffeeContext';
import { trpc } from "../../utils/trpc";
import { useQueryClient } from '@tanstack/react-query';

interface Props {
    title: string;
    id: string;
}
const TastingNotes = ({ title }: Props) => {
    const [query, setQuery] = useState("");
    const [selectedOption, setSelectedOption] = useState<TastingNote>();
    const state = useCoffee();
    const dispatch = useCoffeeDispatch();

    const queryClient = useQueryClient();

    const { data: options } = trpc.tastingNotes.getAll.useQuery(undefined, {
        refetchOnWindowFocus: false
    })
    const addTastingNoteMutation = trpc.tastingNotes.addTastingNote.useMutation({
        onSuccess(data) {
            dispatch({ type: "ADD TASTING NOTE", payload: data })
            queryClient.refetchQueries(["tastingNotes.getAll"])
        },
    });
    const tastingNotesQuery = trpc.tastingNotes.byCoffeeId.useQuery({ coffeeId: state.id }, {
        enabled: !!state.id,
        onSuccess(data) {
            dispatch({ type: "SET TASTING NOTES", payload: data })
        }
    })

    const filteredResults =
        query === ""
            ? options ? options : Array<TastingNote>()
            : options ? options.filter((option) => {
                return option.note
                    .toLowerCase()
                    .includes(query.toLowerCase());
            }) :
                Array<TastingNote>()

    function handleTextChange(event: ChangeEvent<HTMLInputElement>) {
        setQuery(event.currentTarget.value)
        setSelectedOption(undefined);
    }

    return (
        <div className="col-span-3 sm:col-span-2">
            <Combobox
                as="div"
                value={selectedOption ? selectedOption : { note: query } as TastingNote}
                onChange={setSelectedOption}
            >
                <Combobox.Label className="block text-sm font-medium text-matcha-100">
                    {title}
                    <br />
                    {state.tastingNotes && state.tastingNotes.map(note => note.note).join(", ")}
                </Combobox.Label>
                <div className="flex relative mt-1">
                    <Combobox.Input
                        className="w-full rounded-md rounded-r-none border border-coffee-200 bg-transparent text-matcha-100 py-2 pl-3 pr-10 shadow-sm focus:border-coffee-100 focus:ring-coffee-100 sm:text-sm"
                        onChange={(event) => handleTextChange(event)}
                        displayValue={(tastingNote: TastingNote) => tastingNote.note}
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
                        onClick={(e) => {
                            e.preventDefault()
                            addTastingNoteMutation.mutate({ note: selectedOption?.note || query })
                            setQuery("")
                        }}
                    >
                        Add
                    </button>

                    {filteredResults?.length > 0 && (
                        <Combobox.Options className="absolute z-10 mt-10 max-h-60 w-full overflow-auto rounded-md bg-coffee-400 py-1 text-matcha-100 shadow-lg ring-2 ring-coffee-300 ring-opacity-1 focus:outline-none sm:text-sm">
                            {filteredResults.map((result) => (
                                <Combobox.Option
                                    key={result.id}
                                    value={result}
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
            </Combobox >
        </div >
    );
};

export default TastingNotes;
