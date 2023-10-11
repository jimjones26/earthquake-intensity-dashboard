import { writable } from 'svelte/store';

const _earthquakeStore = () => {
  const { set, update, subscribe } = writable({
    items: []
  })

  return {
    subscribe,
    hydrate: (items: any) => set({ items: items }),
    addItem: (item: any) => update((currentState) => {
      console.log("FROM EARTHQUAKE STORE: ", item);
      currentState.items.splice(item.id - 1, 0, item)
      return { ...currentState }
    })
  }
}

export const earthquakeStore = _earthquakeStore();