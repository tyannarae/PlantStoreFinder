import { createContext, useContext } from "react";
import { Store, Stores } from "../../database/stores"; //creating the database on a different branch. 

export type CityPageContextType = {
  selectedStore: Store;
  setSelectedStore: (chosenStore: Store) => void;
  isModalOpen: boolean;
  setModalOpen: (isOpen: boolean) => void;
  stores: Array<Store>;
};

export const CityPageContext = createContext<CityPageContextType>({
  selectedStore: Stores[0], //once i create the data replace Store[0] with actual first store listed in data object
  setSelectedStore: (chosenStore) =>
    console.warn("no setSelectedStore context provider"),
  isModalOpen: false,
  setModalOpen: (isOpen) => console.warn("modal no context provider"),
  stores: Stores,
});

export const useSearchContext = () => useContext(CityPageContext);
