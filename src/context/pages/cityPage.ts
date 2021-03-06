
import { createContext } from "react";
import { Store, Stores,CityDetails, MapCoordinates } from "../../database/stores"; //creating the database on a different branch.

const stores = Stores[0].stores;


interface StoreIndexMap {   //interface for the map of store indices and their id.
   [id: string]: number //key will be store ID and value will be index
}
export const mapStoreIdsToIndex =(stores: Array<Store>) =>{
  let storeId: StoreIndexMap = {}; 
  stores.forEach( 
    (
      store: Store,
      index: number 
    ) => storeId[store.id] = index
  )
  return storeId
}
export type CityPageContextType = {
  city: CityDetails;
  seletedCity: MapCoordinates;
  scrolledStoreId: string;
  setScrolledStoreId: (chosenStore: string) => void;
  selectedStore: Store;
  setSelectedStore: (chosenStore: Store) => void;
  isModalOpen: boolean;
  setModalOpen: (isOpen: boolean) => void;
  stores: Array<Store>;
  storeIdToIndexMap: StoreIndexMap;
};

export const CityPageContext = createContext<CityPageContextType>({
  city: Stores[0],
  selectedStore: stores[0],
  setSelectedStore: (chosenStore) =>
  console.warn("no setSelectedStore context provider"),
  isModalOpen: false,     
  setModalOpen: (isOpen) => console.warn("modal no context provider"),
  stores: stores,
  storeIdToIndexMap: mapStoreIdsToIndex(stores),
  scrolledStoreId: stores[0].id,
  setScrolledStoreId: (chosenStore) =>
    console.warn("no setSelectedStore context provider"),
  seletedCity: Stores[0].mapCoordinates,
});

export const useCityPageContext = createContext(CityPageContext);