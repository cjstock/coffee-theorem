import { useSession } from "next-auth/react";
import { useEffect, useState } from "react";
import Layout from "../components/layout";
import { trpc } from "../utils/trpc";
import Input from "../components/inputfield";
import TextArea from "../components/textarea";
import Router, { useRouter } from "next/router";
import { NextPage } from "next";
import { Bean } from "@prisma/client";



const AddBean: NextPage = () => {
    const utils = trpc.useContext()
    const { data: session } = useSession()
    const userQuery = trpc.useQuery(["user.byEmail", { email: session?.user?.email as string }])
    const { mutate } = trpc.useMutation("bean.create", {
        onSuccess(data, variables) {
            utils.queryClient.setQueryData(["bean.getAll", { userId: variables.userId }],
            (oldData: Array<Bean> | undefined) => {
                if (oldData) {
                    return [...oldData, data]
                }
                return [data]
            })
        },
    });


    // State vars for form data
    const [country, setCountry] = useState("");
    const [region, setRegion] = useState("");
    const [process, setProcess] = useState("");
    const [variety, setVariety] = useState("");
    const [altitude, setAltitude] = useState("");
    const [roast, setRoast] = useState("");
    const [sellerTastingNotes, setSellerTastingNotes] = useState("");
    const [sellerBrewMethods, setSellerBrewMethods] = useState("");
    const [sellerDescription, setsellerDescription] = useState("");
    const [sellerBuyLink, setSellerBuyLink] = useState("");
    const [myTastingNotes, setMyTastingNotes] = useState("");
    const [myBrewMethods, setMyBrewMethods] = useState("");
    const [myAdditionalNotes, setMyAdditionalNotes] = useState("");
    const [isFavorite, setIsFavorite] = useState(false);


    return (
        <Layout>
            <form className="form-control w-full p-3" onSubmit={(event) => {
                event.preventDefault()

                mutate({
                    country: country,
                    region: region,
                    process: process,
                    variety: variety,
                    altitude: altitude,
                    roast: roast,
                    sellerTastingNotes: sellerTastingNotes,
                    sellerBrewMethods: sellerBrewMethods,
                    sellerDescription: sellerDescription,
                    sellerBuyLink: sellerBuyLink,
                    myTastingNotes: myTastingNotes,
                    myBrewMethods: myBrewMethods,
                    myAddtionalNotes: myAdditionalNotes,
                    isFavorite: isFavorite,
                    userId: userQuery.data?.id as string
                })
                Router.push('/')

            }}>
                <div className="flex flex-col w-full lg:flex-row">
                    <div className="p-3 grid flex-grow card bg-secondary-focus rounded-box place-items-center">
                        <h2 className="text-2xl">Seller Info</h2>
                        <div className="grid grid-cols-2 w-full">
                            <Input label="Country" value={country} onChange={setCountry} />
                            <Input label="Region" value={region} onChange={setRegion} />
                            <Input label="Process" value={process} onChange={setProcess} />
                            <Input label="Variety" value={variety} onChange={setVariety} />
                            <Input label="Altitude" value={altitude} onChange={setAltitude} />
                            <Input label="Roast" value={roast} onChange={setRoast} />
                            <Input label="Brew Methods" value={sellerBrewMethods} onChange={setSellerBrewMethods} />
                            <Input label="Buy Link" value={sellerBuyLink} onChange={setSellerBuyLink} />
                            <TextArea label="Tasting Notes" value={sellerTastingNotes} onChange={setSellerTastingNotes} />
                            <TextArea label="Description" value={sellerDescription} onChange={setsellerDescription} />
                        </div>
                    </div>
                    <div className="divider lg:divider-horizontal"></div>
                    <div className="p-3 grid flex-grow card bg-secondary-focus rounded-box">
                        <div className="flex place-items-center w-full justify-center">
                            <h2 className="text-2xl">Discoveries</h2>
                            <button type="button" className="btn btn-ghost btn-circle" onClick={() => setIsFavorite(val => !val)}>
                                {isFavorite ? <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" viewBox="0 0 20 20" fill="currentColor">
                                    <path fillRule="evenodd" d="M3.172 5.172a4 4 0 015.656 0L10 6.343l1.172-1.171a4 4 0 115.656 5.656L10 17.657l-6.828-6.829a4 4 0 010-5.656z" clipRule="evenodd" />
                                </svg> : <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
                                </svg>}</button>
                        </div>
                        <TextArea label="Tasting Notes" value={myTastingNotes} onChange={setMyTastingNotes} />
                        <TextArea label="Brew Methods" value={myBrewMethods} onChange={setMyBrewMethods} />
                        <TextArea label="Additional Notes" value={myAdditionalNotes} onChange={setMyAdditionalNotes} />
                    </div>
                </div>
                <button className="btn btn-secondary m-6" formAction="submit">Save</button>
            </form>
        </Layout>
    )
}

export default AddBean;