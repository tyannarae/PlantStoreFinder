import { createContext, useContext } from "react";
import { Store, Stores } from "../../stores"; //creating the database on a different branch.

const stores = Stores[0].stores;

interface StoreIndexMap {   //interface for the map of store indices and their id.
   [key: string]: number //key will be store ID and value will be index
}
let storeId: StoreIndexMap = {}; 
const mapStoreIdsToIndex =() =>{
  stores.forEach( 
    (
      store: Store,
      index: number 
    ) => storeId[store.id] = index
  )
  return storeId
}
export type CityPageContextType = {
  selectedStore: Store;
  setSelectedStore: (chosenStore: Store) => void;
  isModalOpen: boolean;
  setModalOpen: (isOpen: boolean) => void;
  stores: Array<Store>;
  storeIdToIndexMap: StoreIndexMap;
};

export const CityPageContext = createContext<CityPageContextType>({
  selectedStore: stores[0],
  setSelectedStore: (chosenStore) =>
    console.warn("no setSelectedStore context provider"),
  isModalOpen: false,     
  setModalOpen: (isOpen) => console.warn("modal no context provider"),
  stores: stores,
  storeIdToIndexMap: mapStoreIdsToIndex()
});

export const useCityPageContext = () => useContext(CityPageContext);
