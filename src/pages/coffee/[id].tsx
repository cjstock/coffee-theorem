import { NextPage } from "next";
import { useRouter } from "next/router";

const Coffee: NextPage = () => {
    const router = useRouter();
    const id = router.query.id as string;

    return <div className="text-matcha-100">{id}</div>;
};

export default Coffee;
