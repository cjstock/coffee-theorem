import { MagnifyingGlassIcon, PlusIcon } from "@heroicons/react/20/solid";

const Heading = () => {
    return (
        <div className="px-5 border-b border-matcha-100 pb-5 mb-10 sm:flex sm:items-center sm:justify-between w-full">
            <h3 className="text-lg font-medium leading-6 text-matcha-100">
                Your Coffee Collection
            </h3>
            <div className="mt-3 flex sm:mt-0 sm:ml-4">
                <button
                    type="button"
                    className="inline-flex items-center rounded-md border border-transparent bg-matcha-200 mr-5 px-4 py-2 text-sm font-medium text-white shadow-sm hover:bg-matcha-100 focus:outline-none focus:ring-0 transition-colors"
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
        </div>
    );
};

export default Heading;
