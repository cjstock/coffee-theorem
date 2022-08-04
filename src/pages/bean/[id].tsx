import { Bean } from "@prisma/client";
import { NextPage } from "next";
import { useRouter } from "next/router";
import React, { useEffect, useMemo, useState } from "react";
import Input from "../../components/inputfield";
import Layout from "../../components/layout";
import { Wrapper, Status } from "@googlemaps/react-wrapper";
import TextArea from "../../components/textarea";
import { trpc } from "../../utils/trpc";
import { Map, Places } from "../../components/map";


const BeanPage: NextPage = () => {
    const utils = trpc.useContext()
    const router = useRouter()
    const id = router.query.id as string;

    // State vars for form data
    const [beanState, setBeanState] = useState({
        country: "",
        altitude: "",
        id: id,
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

    const [mapStartPos, setMapStartPos] = useState<google.maps.LatLngLiteral>({ lat: 0, lng: 0 });
    const [searchQuery, setSearchQuery] = useState("");

    const { data: bean } = trpc.useQuery(["bean.byId", { id }], {
        onSuccess(data) {
            if (data) {
                setSearchQuery(`${data.region} ${data.country}`)
            }
        },
    })
    const { mutate: editMutate } = trpc.useMutation("bean.edit", {
        onSuccess(data) {
            setSearchQuery(`${data.region} ${data.country}`)
        },
    });
    const { mutate: deleteMutate } = trpc.useMutation("bean.delete", {
        onSuccess(variables) {
            utils.queryClient.setQueryData(["bean.getAll", { userId: variables.userId }],
                (oldData: Array<Bean> | undefined) => {
                    if (oldData) {
                        return oldData.filter((bean: Bean) => bean.id !== id)
                    }
                    return []
                })
        },
    })

    const [isEditMode, setIsEditMode] = useState(false);


    useEffect(() => {
        if (bean) {
            handleInputChange("country", bean.country)
            handleInputChange("region", bean.region || "")
            handleInputChange("process", bean.process || "")
            handleInputChange("variety", bean.variety || "")
            handleInputChange("altitude", bean.altitude || "")
            handleInputChange("roast", bean.roast || "")
            handleInputChange("sellerTastingNotes", bean.sellerTastingNotes || "")
            handleInputChange("sellerBrewMethods", bean.sellerBrewMethods || "")
            handleInputChange("sellerDescription", bean.sellerDescription || "")
            handleInputChange("sellerBuyLink", bean.sellerBuyLink || "")
            handleInputChange("myTastingNotes", bean.myTastingNotes || "")
            handleInputChange("myBrewMethods", bean.myBrewMethods || "")
            handleInputChange("myAdditionalNotes", bean.myAdditionalNotes || "")
            handleInputChange("isFavorite", bean.isFavorite || false)
        }
    }, [bean]);

    useEffect(() => {

    }, [searchQuery, mapStartPos])

    function handleDeleteOnClick() {
        deleteMutate({ id })
        router.push("/")
    }

    function handleInputChange(key: string, value: string | boolean) {
        setBeanState(prev => {
            return {
                ...prev,
                [key]: value
            }
        })
    }

    const render = (status: Status) => {
        return <h1>{status}</h1>
    }

    return (
        <>
            <Layout selectedBottomTab="experiment">
                <form className="form-control w-full p-3" onSubmit={(event) => {
                    event.preventDefault()
                    if (isEditMode) {
                        editMutate({
                            id: id,
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
                        })
                    }
                    setIsEditMode(!isEditMode)
                }}>
                    <div className="flex flex-col w-full lg:flex-row">
                        <div className="p-3 grid flex-grow card bg-secondary-focus rounded-box place-items-center text-primary">
                            <div className="flex place-items-center w-full justify-center text-primary">
                                <h2 className="text-2xl">Seller Info</h2>
                                <button className="btn btn-ghost btn-circle" formAction="submit">
                                    {
                                        isEditMode ? <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                                            <path strokeLinecap="round" strokeLinejoin="round" d="M8 7H5a2 2 0 00-2 2v9a2 2 0 002 2h14a2 2 0 002-2V9a2 2 0 00-2-2h-3m-1 4l-3 3m0 0l-3-3m3 3V4" />
                                        </svg> : <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                                            <path strokeLinecap="round" strokeLinejoin="round" d="M15.232 5.232l3.536 3.536m-2.036-5.036a2.5 2.5 0 113.536 3.536L6.5 21.036H3v-3.572L16.732 3.732z" />
                                        </svg>
                                    }
                                </button>
                            </div>
                            <div className="grid md:grid-cols-2 grid-cols-1 w-full text-white">
                                <Input label="Country" capitalized={true} disabled={!isEditMode} label_key={"country"} value={beanState.country} onChange={handleInputChange} />
                                <Input label="Region" capitalized={true} disabled={!isEditMode} label_key={"region"} value={beanState.region} onChange={handleInputChange} />
                                <Input label="Process" capitalized={true} disabled={!isEditMode} label_key={"process"} value={beanState.process} onChange={handleInputChange} />
                                <Input label="Variety" capitalized={true} disabled={!isEditMode} label_key={"variety"} value={beanState.variety} onChange={handleInputChange} />
                                <Input label="Altitude" capitalized={true} disabled={!isEditMode} label_key={"altitude"} value={beanState.altitude} onChange={handleInputChange} />
                                <Input label="Roast" capitalized={true} disabled={!isEditMode} label_key={"roast"} value={beanState.roast} onChange={handleInputChange} />
                                <Input label="Brew Methods" capitalized={true} disabled={!isEditMode} label_key={"sellerBrewMethods"} value={beanState.sellerBrewMethods} onChange={handleInputChange} />
                                <Input label="Buy Link" type={"url"} disabled={!isEditMode} label_key={"sellerBuyLink"} value={beanState.sellerBuyLink} onChange={handleInputChange} />
                                <TextArea label="Tasting Notes" capitalized={true} disabled={!isEditMode} label_key={"sellerTastingNotes"} value={beanState.sellerTastingNotes} onChange={handleInputChange} />
                                <TextArea label="Description" disabled={!isEditMode} label_key={"sellerDescription"} value={beanState.sellerDescription} onChange={handleInputChange} />
                            </div>
                        </div>
                        <div className="divider lg:divider-horizontal"></div>
                        <div className="p-3 grid flex-grow card bg-secondary-focus rounded-box">
                            <div className="flex place-items-center w-full justify-center text-primary">
                                <h2 className="text-2xl">Discoveries</h2>
                                <button type="button" className="btn btn-ghost btn-circle" onClick={() => {
                                    if (isEditMode) {
                                        setBeanState(val => {
                                            return { ...val, ["isFavorite"]: !val.isFavorite }
                                        })
                                    }
                                }}>
                                    {beanState.isFavorite ? <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" viewBox="0 0 20 20" fill="currentColor">
                                        <path fillRule="evenodd" d="M3.172 5.172a4 4 0 015.656 0L10 6.343l1.172-1.171a4 4 0 115.656 5.656L10 17.657l-6.828-6.829a4 4 0 010-5.656z" clipRule="evenodd" />
                                    </svg> : <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                                        <path strokeLinecap="round" strokeLinejoin="round" d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
                                    </svg>}</button>
                            </div>
                            <TextArea label="Tasting Notes" capitalized={true} disabled={!isEditMode} label_key={"myTastingNotes"} value={beanState.myTastingNotes} onChange={handleInputChange} />
                            <TextArea label="Brew Methods" capitalized={true} disabled={!isEditMode} label_key={"myBrewMethods"} value={beanState.myBrewMethods} onChange={handleInputChange} />
                            <TextArea label="Additional Notes" disabled={!isEditMode} label_key={"myAdditionalNotes"} value={beanState.myAdditionalNotes} onChange={handleInputChange} />
                        </div>
                    </div>
                </form>
                <div className="w-full h-full p-3">
                    <Wrapper apiKey={process.env.NEXT_PUBLIC_GOOGLE_MAPS_API_KEY!} render={render} libraries={["places"]} >
                        <Map center={mapStartPos} zoom={3} style={{ height: "500px" }}>
                            {
                                searchQuery && <Places searchQuery={searchQuery} onLocationChange={setMapStartPos} />
                            }
                        </Map>
                    </Wrapper>
                </div>
                <div className="flex flex-row justify-center w-full h-52">
                    <button className="btn btn-error m-3 w-1/2" type="button" onClick={handleDeleteOnClick}>Delete</button>
                </div>
            </Layout>
        </>
    )
}

export default BeanPage;