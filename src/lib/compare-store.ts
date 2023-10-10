import { writable } from 'svelte/store';

const _compareStore = () => {
  const { set, update, subscribe } = writable({
    items: []
  })

  return {
    subscribe,
    hydrate: (items: any) => set({ items: items }),
  }
}

export const compareStore = _compareStore();