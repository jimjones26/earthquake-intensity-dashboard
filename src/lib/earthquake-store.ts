import { writable } from 'svelte/store';

const _earthquakeStore = () => {
  const { set, update, subscribe } = writable({
    items: []
  })

  return {
    subscribe,
    hydrate: (items: any) => set({ items: items }),
  }
}

export const earthquakeStore = _earthquakeStore();