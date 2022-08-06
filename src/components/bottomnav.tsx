import Link from "next/link";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faGraduationCap, faFlask } from '@fortawesome/free-solid-svg-icons'


type BottomNavBarProps = {
    selectedBottomTab: "learn" | "experiment"
}

const BottomNavBar = ({selectedBottomTab} : BottomNavBarProps) => (<>
    <div className="mx-auto btm-nav max-w-screen-2xl">
        <Link href={'/learn'}>
            <a
                className={`bg-accent-focus text-primary hover:bg-accent transition ${selectedBottomTab === "learn" ? "active" : ""}`}>
                <FontAwesomeIcon icon={faGraduationCap} className="w-6 h-6" />
                <span className="btm-nav-label">Learn</span>
            </a>
        </Link>
        <Link href={'/'}>
            <a
                className={`bg-accent-focus text-primary hover:bg-accent ${selectedBottomTab === "experiment" ? "active" : ""}`}>
                <FontAwesomeIcon icon={faFlask} className="w-5 h-5" />
                <span className="btm-nav-label">Experiment</span>
            </a>
        </Link>
    </div>
</>);

export default BottomNavBar
