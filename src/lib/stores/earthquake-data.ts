import { writable } from "svelte/store";

const _earthquakesDataStore = () => {
  const { set, subscribe } = writable({
    migrants: []
  })

  return {
    subscribe,
    set: (data: any) => set(data as any),
  }
}

export const earthquakesDataStore = _earthquakesDataStore()