import { Fragment } from "react";
import { Disclosure, Menu, Transition } from "@headlessui/react";
import {
    Bars3Icon,
    XMarkIcon,
    UserCircleIcon,
} from "@heroicons/react/24/outline";
import Link from "next/link";
import { motion } from "framer-motion";
import { useSession, signIn, signOut } from "next-auth/react";
import classNames from "../../utils/ClassNames";

const navigation = [
    { name: "Coffee Collection", hrefs: ["/", "/coffee/[id]"] },
    { name: "Learn", hrefs: ["/learn"] },
    { name: "Recipes", hrefs: ["#"] },
];

const mobileMenuAnimateVariants = {
    hidden: { opacity: 0, height: 0 },
    show: { opacity: 1, height: 150 },
};

interface Props {
    selectedNavTab: string;
}
const NavBar: React.FC<Props> = ({ selectedNavTab }: Props) => {
    const session = useSession();

    return (
        <Disclosure as="nav" className="bg-coffee-dark">
            {({ open }) => (
                <>
                    <div className="mx-auto px-4 sm:px-6 lg:px-8">
                        <div className="flex h-16 justify-between">
                            <div className="flex">
                                <div className="-ml-2 mr-2 flex items-center md:hidden">
                                    {/* Mobile menu button */}
                                    <Disclosure.Button className="inline-flex items-center justify-center rounded-md p-2 text-coffee-100 hover:bg-coffee-400 focus:outline-none focus:ring-0">
                                        <span className="sr-only">
                                            Open main menu
                                        </span>
                                        {open ? (
                                            <XMarkIcon
                                                className="block h-6 w-6"
                                                aria-hidden="true"
                                            />
                                        ) : (
                                            <Bars3Icon
                                                className="block h-6 w-6"
                                                aria-hidden="true"
                                            />
                                        )}
                                    </Disclosure.Button>
                                </div>
                                <div className="flex flex-shrink-0 items-center">
                                    <Link href={"/"} passHref>
                                        <a className="text-2xl text-matcha-100 font-extrabold font-sans">
                                            Coffee Theorem
                                        </a>
                                    </Link>
                                </div>
                                <div className="hidden md:ml-6 md:flex md:items-center md:space-x-4">
                                    {navigation.map((element) => {
                                        return (
                                            <Link
                                                key={element.name}
                                                href={element.hrefs[0]!}
                                                passHref
                                            >
                                                <a
                                                    className={classNames(
                                                        element.hrefs.find(
                                                            (href) =>
                                                                href ===
                                                                selectedNavTab
                                                        )
                                                            ? "bg-coffee-300 text-matcha-100"
                                                            : "text-matcha-100 hover:bg-coffee-400",
                                                        "px-3 py-2 rounded-md text-sm font-medium transition-colors"
                                                    )}
                                                    aria-current={
                                                        element.hrefs.find(
                                                            (href) =>
                                                                href ===
                                                                selectedNavTab
                                                        )
                                                            ? "page"
                                                            : undefined
                                                    }
                                                    onClick={() =>
                                                        (selectedNavTab =
                                                            element.hrefs[0])
                                                    }
                                                >
                                                    {element.name}
                                                </a>
                                            </Link>
                                        );
                                    })}
                                </div>
                            </div>
                            <div className="flex items-center">
                                <div className="hidden md:ml-4 md:flex md:flex-shrink-0 md:items-center">
                                    {/* Profile dropdown */}
                                    <Menu as="div" className="relative ml-3">
                                        <div>
                                            <Menu.Button className="flex rounded-full bg-coffee-500 text-sm focus:outline-none">
                                                <span className="sr-only">
                                                    Open user menu
                                                </span>
                                                <UserCircleIcon className="h-10 w-10 rounded-full text-matcha-100 bg-coffee-500" />
                                            </Menu.Button>
                                        </div>
                                        <Transition
                                            as={Fragment}
                                            enter="transition ease-out duration-200"
                                            enterFrom="transform opacity-0 scale-95"
                                            enterTo="transform opacity-100 scale-100"
                                            leave="transition ease-in duration-75"
                                            leaveFrom="transform opacity-100 scale-100"
                                            leaveTo="transform opacity-0 scale-95"
                                        >
                                            <Menu.Items className="absolute right-0 z-10 mt-2 w-48 origin-top-right rounded-md bg-matcha-100 py-1 shadow-lg ring-1 ring-matcha-500 ring-opacity-5 focus:outline-none">
                                                <Menu.Item>
                                                    {session.status !==
                                                    "unauthenticated" ? (
                                                        <button
                                                            className={classNames(
                                                                "block w-full text-left px-4 py-2 text-sm text-coffee-500"
                                                            )}
                                                            onClick={() =>
                                                                signOut()
                                                            }
                                                        >
                                                            {"Logout"}
                                                        </button>
                                                    ) : (
                                                        <button
                                                            className={classNames(
                                                                "block w-full text-left px-4 py-2 text-sm text-coffee-500"
                                                            )}
                                                            onClick={() =>
                                                                signIn()
                                                            }
                                                        >
                                                            {"Login"}
                                                        </button>
                                                    )}
                                                </Menu.Item>
                                            </Menu.Items>
                                        </Transition>
                                    </Menu>
                                </div>
                            </div>
                        </div>
                    </div>

                    <Disclosure.Panel className="md:hidden">
                        <motion.div
                            variants={mobileMenuAnimateVariants}
                            initial="hidden"
                            animate="show"
                            exit={{ opacity: 0 }}
                            className="space-y-1 px-2 pt-2 pb-3 sm:px-3"
                        >
                            {navigation.map((item) => (
                                <Link
                                    href={item.hrefs[0]}
                                    key={item.name}
                                    passHref
                                >
                                    <Disclosure.Button
                                        key={item.name}
                                        as="a"
                                        href={item.hrefs[0]!}
                                        className={classNames(
                                            item.hrefs.find(
                                                (href) =>
                                                    href === selectedNavTab
                                            )
                                                ? "bg-coffee-300 text-matcha-100"
                                                : "bg-coffee-500 text-matcha-100 hover:bg-coffee-400",
                                            "block px-3 py-2 rounded-md text-base font-medium transition-colors"
                                        )}
                                        aria-current={
                                            item.hrefs.find(
                                                (href) =>
                                                    href === selectedNavTab
                                            )
                                                ? "page"
                                                : undefined
                                        }
                                        onClick={() =>
                                            (selectedNavTab = item.hrefs[0])
                                        }
                                    >
                                        {item.name}
                                    </Disclosure.Button>
                                </Link>
                            ))}
                        </motion.div>
                        <motion.div
                            variants={mobileMenuAnimateVariants}
                            initial="hidden"
                            animate="show"
                            exit={{ opacity: 0 }}
                            className="border-t border-coffee-300 pt-4 pb-3"
                        >
                            <div className=" space-y-1 px-2 sm:px-3">
                                {session.status !== "unauthenticated" ? (
                                    <Disclosure.Button
                                        as="button"
                                        className={
                                            "block px-4 py-2 text-base rounded-md text-matcha-100 hover:bg-coffee-400"
                                        }
                                        onClick={() => signOut()}
                                    >
                                        {"Logout"}
                                    </Disclosure.Button>
                                ) : (
                                    <Disclosure.Button
                                        as="button"
                                        className={
                                            "block px-4 py-2 text-base rounded-md text-matcha-100 hover:bg-coffee-400"
                                        }
                                        onClick={() => signIn()}
                                    >
                                        {"Login"}
                                    </Disclosure.Button>
                                )}
                            </div>
                        </motion.div>
                    </Disclosure.Panel>
                </>
            )}
        </Disclosure>
    );
};

export default NavBar;
