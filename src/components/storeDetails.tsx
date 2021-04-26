import React, {
  FunctionComponent,
  useContext,
  useEffect,
  useState,
  useRef,
} from "react";
import { CityPageContext } from "../context/pages/cityPage";
import { Store } from "../database/stores";
import fbLogo from "../media/fbLogo.png";
import igLogo from "../media/igLogo.png";
import "../components/storeDetails.scss";

export interface StoreDetailsProps {
  store: Store;
  id: string;
}
export const StoreDetails: FunctionComponent<StoreDetailsProps> = (
  StoreDetailsProps
) => {
  const {
    id,
    bussinessName,
    website,
    address,
    phone,
    igHandle,
    fbHandle,
    blurb,
  } = StoreDetailsProps.store;

  const {
    setSelectedStore,
    storeIdToIndexMap,
    stores,
    storeId,
    setStoreId,
  } = useContext(CityPageContext);

  const prevScrollY = useRef(0);
  const [inView, setInView] = useState(false);

  const handleScroll = () => {
    console.log("sdlhdsfh", window);
  };
  // useEffect(() => {
  //   const handleScroll = () => {
  //     const currentScrollY = window.scrollY;

  //     prevScrollY.current = currentScrollY;
  //     console.log("blaaahß", currentScrollY);
  //   };

  //   return () => window.removeEventListener("scroll", handleScroll);
  // }, [inView]);

  window.addEventListener("scroll", handleScroll);
  useEffect(() => {
    const titleElement = document.getElementById(storeId);
    titleElement?.scrollIntoView({ behavior: "smooth" });
  }, [storeId]);

  const idDetails = (id: string) => {
    setSelectedStore(stores[storeIdToIndexMap[id]]);
    setStoreId(id);
  };
  return (
    <div
      key={id}
      className="card-content "
      onClick={(event) => {
        idDetails(id);
      }}
    >
      <div className="tile is-ancestor" id={id}>
        <div className="tile is-vertical">
          <div className="tile header">
            <div className="businessNameContainer tile is-parent is-vertical is-10">
              <div className="businessName">{bussinessName}</div>
            </div>
            <div className="tile is-parent is-vertical endItem ">
              <div className="tile">
                {fbHandle ? (
                  <a
                    className="linkImg"
                    href={fbHandle}
                    rel="noopener noreferrer"
                    data-testid="fbHandle"
                    target="_blank"
                  >
                    <img className=" tile is-vertical" alt="a" src={fbLogo} />
                  </a>
                ) : null}
                {igHandle ? (
                  <a
                    className="linkImg"
                    href={igHandle}
                    rel="noopener noreferrer"
                    data-testid="igHandle"
                    target="_blank"
                  >
                    <img className=" tile is-vertical" alt="a" src={igLogo} />
                  </a>
                ) : null}
              </div>
            </div>
          </div>
          <div className="tile infoDetails">
            <div className=" address tile is-parent is-vertical">
              <div>{address}</div>
            </div>
            <div className="tile is-parent is-vertical endItem">
              {phone ? <div>{phone}</div> : null}
              {website ? (
                <a
                  data-testid="websiteLink"
                  href={website}
                  rel="noopener noreferrer"
                  target="_blank"
                >
                  Visit Website
                </a>
              ) : null}
            </div>
          </div>
          <div className="blurb is-parent tile">{blurb}</div>
        </div>
      </div>
    </div>
  );
};
