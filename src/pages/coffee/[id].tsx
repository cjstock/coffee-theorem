import { NextPage } from "next";
import { useRouter } from "next/router";
import CoffeeTypeSelect from "../../components/pages/bean/CoffeeTypeSelect";
import Heading from "../../components/pages/coffee-collection/Heading";
import { trpc } from "../../utils/trpc";

const Coffee: NextPage = () => {
    const router = useRouter();
    const id = router.query.id as string;
    console.log(id)
    const {data:coffee, isLoading, isSuccess} = trpc.useQuery(["bean.byId", {id}])

    return (
        <>
        <Heading />
        <CoffeeTypeSelect />
        {
            coffee && <div className="text-matcha-100">{coffee.country}</div>
        }
        </>
    )
};

export default Coffee;
