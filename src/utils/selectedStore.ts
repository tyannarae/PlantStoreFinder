//takes the id of the store that was clicked and updates the selectedStore
export const setNewStore = (id: string, setSelectedStore: Function) => {
    console.log(`id ${id}`);
    return setSelectedStore(id, setSelectedStore);
  };