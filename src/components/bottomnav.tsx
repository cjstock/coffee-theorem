import Link from "next/link";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGraduationCap, faFlask } from "@fortawesome/free-solid-svg-icons";

type BottomNavBarProps = {
  selectedBottomTab: "learn" | "track";
};

const BottomNavBar = ({ selectedBottomTab }: BottomNavBarProps) => (
  <>
    <div className="mx-auto btm-nav max-w-screen-2xl z-50">
      <Link href={"/learn"}>
        <a
          className={`bg-accent-focus text-primary hover:bg-accent transition ${
            selectedBottomTab === "learn" ? "active" : ""
          }`}
        >
          <FontAwesomeIcon icon={faGraduationCap} className="w-6 h-6" />
          <span className="btm-nav-label">Learn</span>
        </a>
      </Link>
      <Link href={"/"}>
        <a
          className={`bg-accent-focus text-primary hover:bg-accent ${
            selectedBottomTab === "track" ? "active" : ""
          }`}
        >
          <FontAwesomeIcon icon={faFlask} className="w-5 h-5" />
          <span className="btm-nav-label">Track</span>
        </a>
      </Link>
    </div>
  </>
);

export default BottomNavBar;
