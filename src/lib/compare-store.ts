import { writable } from 'svelte/store';
import { earthquakeStore } from '$lib/earthquake-store';

const _compareStore = () => {
  const { set, update, subscribe } = writable({
    items: [],
    dropFromOtherDisabled: false
  })

  return {
    subscribe,
    hydrate: (items: any) => update((currentState) => {
      return { ...currentState, items: items }
    }),
    removeItem: (item: any) => update((currentState) => {
      // get the index of the item passed in
      const index = currentState.items.findIndex(x => x.id === item.id);
      // remove the index from the current state
      const itemToRemove = currentState.items.splice(index, 1)
      // add that item back to the earthquake store
      earthquakeStore.addItem(itemToRemove[0])
      return { ...currentState, dropFromOtherDisabled: false }
    }),
    updateDropDisabled: (value: boolean) => update((currentState) => {
      return { ...currentState, dropFromOtherDisabled: value }
    })
  }
}

export const compareStore = _compareStore();