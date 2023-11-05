import { writable } from "svelte/store";

const _earthquakesDataStore = () => {
  const { set, subscribe } = writable({
    lastUpdated: null,
    count: 0,
    earthquakes: []
  })

  return {
    subscribe,
    set: (data: any) => set(data as any),
  }
}

export const earthquakesDataStore = _earthquakesDataStore()