import { createContext, useContext } from 'react'
import {Store, Stores} from '../../database/stores'

export type CityPageContextType = {
    selectedStore: Store, 
    setSelectedStore: (chosenStore: Store) => void,
    isModalOpen: boolean,
    setModalOpen: (isOpen: boolean) => void,
    stores: Array<Store>,
}

export const CityPageContext = createContext<CityPageContextType>({
    selectedStore: Stores[0],
    setSelectedStore: chosenStore => console.warn('no setSelectedStore context provider'),
    isModalOpen: false,
    setModalOpen: isOpen => console.warn('modal no context provider'),
    stores: Stores,
})

export const useSearchContext = () => useContext(CityPageContext);
