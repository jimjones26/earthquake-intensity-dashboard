import { writable } from 'svelte/store';
import { earthquakeStore } from '$lib/earthquake-store';

const _compareStore = () => {
  const { set, update, subscribe } = writable({
    items: []
  })

  return {
    subscribe,
    hydrate: (items: any) => set({ items: items }),
    removeItem: (item: any) => update((currentState) => {
      // get the index of the item passed in
      const index = currentState.items.findIndex(x => x.id === item.id);

      // remove the index from the current state
      const itemToRemove = currentState.items.splice(index, 1)

      // add that item back to the earthquake store
      earthquakeStore.addItem(itemToRemove[0])

      console.log("Remove Item: ", itemToRemove[0])
      return { ...currentState }
    })
  }
}

export const compareStore = _compareStore();