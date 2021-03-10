import { createContext, useContext } from "react";
import { Store, Stores } from "../../database/stores"; //creating the database on a different branch. 
const stores = Stores[0].stores;
let storeId: any = {}
export type CityPageContextType = {
  selectedStore: Store;
  setSelectedStore: (chosenStore: Store) => void;
  isModalOpen: boolean;
  setModalOpen: (isOpen: boolean) => void;
  stores: Array<Store>;
  storeIdToIndexMap: Array<string>
};

export const CityPageContext = createContext<CityPageContextType>({
  selectedStore: stores[0], 
  setSelectedStore: (chosenStore) =>
    console.warn("no setSelectedStore context provider"),
  isModalOpen: false,
  setModalOpen: (isOpen) => console.warn("modal no context provider"),
  stores: stores,
  storeIdToIndexMap: stores.map((store: Store, index: number) => ( //list of store ids and index paired with them.
    storeId[index]= store.id
  )),
});

export const useSearchContext = () => useContext(CityPageContext);
