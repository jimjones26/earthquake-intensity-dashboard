import { writable } from 'svelte/store';

const _earthquakeStore = () => {
  const { set, update, subscribe } = writable({
    items: []
  })

  return {
    subscribe,
    hydrate: (items: any) => set({ items: items }),
    addItem: (item: any) => update((currentState) => {
      const spliceAt = currentState.items.find(el => el.order === item.order - 1)
      const spliceIndex = currentState.items.indexOf(spliceAt);
      if (spliceIndex === -1) {
        currentState.items.splice(0, 0, item)
      } else {
        currentState.items.splice(spliceIndex + 1, 0, item)
      }
      return { ...currentState }
    })
  }
}

export const earthquakeStore = _earthquakeStore();