import {
  faFireFlameCurved,
  faPersonDigging,
  faClipboard,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

interface Props {
  value: {
    process: string | null;
    country: string;
    sellerTastingNotes: string | null;
    region: string | null;
    isFavorite: boolean | null;
    id: string;
    roast: string | null;
  };
  key: string;
}

const BeanCard: React.FC<Props> = (Props) => {
  const { value } = Props;

  return (
    <div className="mx-auto text-left shadow-xl card w-80 h-52 bg-secondary text-primary hover:bg-secondary-focus hover:scale-105 transition">
      <div className="card-body">
        <h2 className="capitalize card-title">
          {value.country} | {value.region}
        </h2>
        <div className="capitalize">
          {value.roast && (
            <span className="inline-flex p-1">
              <FontAwesomeIcon
                icon={faFireFlameCurved}
                className="w-5 h-5 mr-2"
              />
              {value.roast}
            </span>
          )}
          <br />
          {value.process && (
            <span className="inline-flex p-1">
              <FontAwesomeIcon
                icon={faPersonDigging}
                className="w-5 h-5 mr-2"
              />
              {value.process}
            </span>
          )}
          <br />
          {value.sellerTastingNotes && (
            <span className="inline-flex p-1">
              <FontAwesomeIcon icon={faClipboard} className="w-5 h-5 mr-2" />
              {value.sellerTastingNotes}
            </span>
          )}
        </div>
      </div>
    </div>
  );
};

export default BeanCard;
