import { useSession } from "next-auth/react";
import { useState } from "react";
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


    const [beanState, setBeanState] = useState({
        country: "",
        altitude: "",
        isFavorite: false,
        myAdditionalNotes: "",
        myBrewMethods: "",
        myTastingNotes: "",
        process: "",
        region: "",
        roast: "",
        sellerBrewMethods: "",
        sellerBuyLink: "",
        sellerDescription: "",
        sellerTastingNotes: "",
        variety: "",
    })

    function handleInputChange(key: string, value: string | boolean) {
        setBeanState(prev => {
            return {...prev, 
            [key]: value
            }
        })
    }

    return (
        <Layout selectedBottomTab="experiment">
            <form className="form-control w-full p-3" onSubmit={(event) => {
                event.preventDefault()

                mutate({
                    country: beanState.country,
                    region: beanState.region,
                    process: beanState.process,
                    variety: beanState.variety,
                    altitude: beanState.altitude,
                    roast: beanState.roast,
                    sellerTastingNotes: beanState.sellerTastingNotes,
                    sellerBrewMethods: beanState.sellerBrewMethods,
                    sellerDescription: beanState.sellerDescription,
                    sellerBuyLink: beanState.sellerBuyLink,
                    myTastingNotes: beanState.myTastingNotes,
                    myBrewMethods: beanState.myBrewMethods,
                    myAddtionalNotes: beanState.myAdditionalNotes,
                    isFavorite: beanState.isFavorite,
                    userId: userQuery.data?.id as string
                })
                Router.push('/')

            }}>
                <div className="flex flex-col w-full lg:flex-row">
                    <div className="p-3 grid flex-grow card bg-secondary-focus rounded-box place-items-center">
                        <h2 className="text-2xl">Seller Info</h2>
                        <div className="grid md:grid-cols-2 grid-cols-1 w-full">
                            <Input capitalized={true} label="Country" label_key="country" value={beanState.country} onChange={handleInputChange} />
                            <Input capitalized={true} label="Region" label_key="region" value={beanState.region} onChange={handleInputChange} />
                            <Input capitalized={true} label="Process" label_key="process" value={beanState.process} onChange={handleInputChange} />
                            <Input capitalized={true} label="Variety" label_key="variety" value={beanState.variety} onChange={handleInputChange} />
                            <Input capitalized={true} label="Altitude" label_key="altitude" value={beanState.altitude} onChange={handleInputChange} />
                            <Input capitalized={true} label="Roast" label_key="roast" value={beanState.roast} onChange={handleInputChange} />
                            <Input capitalized={true} label="Brew Methods" label_key="sellerBrewMethods" value={beanState.sellerBrewMethods} onChange={handleInputChange} />
                            <Input label="Buy Link" label_key="sellerBuyLink" value={beanState.sellerBuyLink} onChange={handleInputChange} />
                            <TextArea capitalized={true} label="Tasting Notes" label_key="sellerTastingNotes" value={beanState.sellerTastingNotes} onChange={handleInputChange} />
                            <TextArea label="Description" label_key="sellerDescription" value={beanState.sellerDescription} onChange={handleInputChange} />
                        </div>
                    </div>
                    <div className="divider lg:divider-horizontal"></div>
                    <div className="p-3 grid flex-grow card bg-secondary-focus rounded-box">
                        <div className="flex place-items-center w-full justify-center">
                            <h2 className="text-2xl">Discoveries</h2>
                            <button type="button" className="btn btn-ghost btn-circle" onClick={() => setBeanState(val => {
                                return { ...val, ["isFavorite"]: !val.isFavorite }
                            })}>
                                {beanState.isFavorite ? <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" viewBox="0 0 20 20" fill="currentColor">
                                    <path fillRule="evenodd" d="M3.172 5.172a4 4 0 015.656 0L10 6.343l1.172-1.171a4 4 0 115.656 5.656L10 17.657l-6.828-6.829a4 4 0 010-5.656z" clipRule="evenodd" />
                                </svg> : <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
                                </svg>}</button>
                        </div>
                        <TextArea capitalized={true} label="Tasting Notes" label_key="myTastingNotes" value={beanState.myTastingNotes} onChange={handleInputChange} />
                        <TextArea capitalized={true} label="Brew Methods" label_key="myBrewMethods" value={beanState.myBrewMethods} onChange={handleInputChange} />
                        <TextArea label="Additional Notes" label_key="myAdditionalNotes" value={beanState.myAdditionalNotes} onChange={handleInputChange} />
                    </div>
                </div>
                <button className="btn btn-secondary m-6" formAction="submit">Save</button>
            </form>
        </Layout>
    )
}

export default AddBean;