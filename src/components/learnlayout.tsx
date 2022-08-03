import Link from "next/link"
import Layout from "./layout"

type LearnLayoutProps = {
    children: React.ReactNode,
    selectedLearnTab: string
}
const LearnLayout = ({children, selectedLearnTab} : LearnLayoutProps) => {
    return (<>
    <Layout selectedBottomTab="learn">
        <div className="tabs">
            <Link href="/inception">
                <a className={`tab tab-bordered sm:tab-md md:tab-lg ${selectedLearnTab === "inception" ? "tab-active" : ""}`}>Inception</a>
            </Link>
            <Link href="/process">
                <a className={`tab tab-bordered sm:tab-md md:tab-lg ${selectedLearnTab === "process" ? "tab-active" : ""}`}>Process</a>
            </Link>
            <Link href="/roast">
                <a className={`tab tab-bordered sm:tab-md md:tab-lg ${selectedLearnTab === "roast" ? "tab-active" : ""}`}>Roast</a>
            </Link>
            <Link href="/brew">
                <a className={`tab tab-bordered sm:tab-md md:tab-lg ${selectedLearnTab === "brew" ? "tab-active" : ""}`}>Brew</a>
            </Link>
            <Link href="/taste">
                <a className={`tab tab-bordered sm:tab-md md:tab-lg ${selectedLearnTab === "taste" ? "tab-active" : ""}`}>Taste</a>
            </Link>
        </div>
        {children}
    </Layout>
    </>)
}

export default LearnLayout