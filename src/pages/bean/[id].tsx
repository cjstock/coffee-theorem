import { Bean } from "@prisma/client";
import { NextPage } from "next";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import Input from "../../components/inputfield";
import Layout from "../../components/layout";
import Map from "../../components/map";
import TextArea from "../../components/textarea";
import { trpc } from "../../utils/trpc";

const BeanPage: NextPage = () => {
    const utils = trpc.useContext()
    const router = useRouter()
    const id = router.query.id as string;
    const { data, isLoading, isError } = trpc.useQuery(["bean.byId", { id }])
    const { mutate: editMutate } = trpc.useMutation("bean.edit");
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

    const center = { lat: -34.397, lng: 150.644 }
    const zoom = 10

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

    useEffect(() => {
        if (data) {
            setCountry(data.country)
            setRegion(data.region || "")
            setProcess(data.process || "")
            setVariety(data.variety || "")
            setAltitude(data.altitude || "")
            setRoast(data.roast || "")
            setSellerTastingNotes(data.sellerTastingNotes || "")
            setSellerBrewMethods(data.sellerBrewMethods || "")
            setsellerDescription(data.sellerDescription || "")
            setSellerBuyLink(data.sellerBuyLink || "")
            setMyTastingNotes(data.myTastingNotes || "")
            setMyBrewMethods(data.myBrewMethods || "")
            setMyAdditionalNotes(data.myAdditionalNotes || "")
            setIsFavorite(data.isFavorite || false)
        }
    }, [data])

    function handleDeleteOnClick() {
        deleteMutate({ id })
        router.push("/")
    }

    return (
        <Layout>
            <form className="form-control w-full p-3" onSubmit={(event) => {
                event.preventDefault()
                if (isEditMode) {
                    editMutate({
                        id: id,
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
                    })
                }
                setIsEditMode(!isEditMode)
            }}>
                <div className="flex flex-col w-full lg:flex-row">
                    <div className="p-3 grid flex-grow card bg-secondary-focus rounded-box place-items-center">
                        <h2 className="text-2xl">Seller Info</h2>
                        <div className="grid md:grid-cols-2 sm:grid-cols-1 w-full">
                            <Input label="Country" disabled={!isEditMode} value={country} onChange={setCountry} />
                            <Input label="Region" disabled={!isEditMode} value={region} onChange={setRegion} />
                            <Input label="Process" disabled={!isEditMode} value={process} onChange={setProcess} />
                            <Input label="Variety" disabled={!isEditMode} value={variety} onChange={setVariety} />
                            <Input label="Altitude" disabled={!isEditMode} value={altitude} onChange={setAltitude} />
                            <Input label="Roast" disabled={!isEditMode} value={roast} onChange={setRoast} />
                            <Input label="Brew Methods" disabled={!isEditMode} value={sellerBrewMethods} onChange={setSellerBrewMethods} />
                            <Input label="Buy Link" type={"url"} disabled={!isEditMode} value={sellerBuyLink} onChange={setSellerBuyLink} />
                            <TextArea label="Tasting Notes" disabled={!isEditMode} value={sellerTastingNotes} onChange={setSellerTastingNotes} />
                            <TextArea label="Description" disabled={!isEditMode} value={sellerDescription} onChange={setsellerDescription} />
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
                        <TextArea label="Tasting Notes" disabled={!isEditMode} value={myTastingNotes} onChange={setMyTastingNotes} />
                        <TextArea label="Brew Methods" disabled={!isEditMode} value={myBrewMethods} onChange={setMyBrewMethods} />
                        <TextArea label="Additional Notes" disabled={!isEditMode} value={myAdditionalNotes} onChange={setMyAdditionalNotes} />
                    </div>
                </div>
                <div className="flex flex-row justify-center w-full">
                    <button className="btn btn-accent m-3 w-1/2" formAction="submit">{isEditMode ? "Save" : "Edit"}</button>
                    <button className="btn btn-accent m-3 w-1/2" type="button" onClick={handleDeleteOnClick}>Delete</button>
                </div>
            </form>
            <div className="w-full h-full p-5">
                <Map center={center} zoom={zoom} />
            </div>
        </Layout>
    )
}

export default BeanPage;