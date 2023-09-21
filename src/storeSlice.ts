

import { create } from 'zustand'
// import { createBearSlice } from './bearSlice'
// import { createFishSlice } from './fishSlice'

export const createFishSlice = (set) => ({
    fishes: 0,
    addFish: () => set((state) => ({ fishes: state.fishes + 1 })),
  })

  export const createBearSlice = (set) => ({
    bears: 0,
    addBear: () => set((state) => ({ bears: state.bears + 1 })),
    eatFish: () => set((state) => ({ fishes: state.fishes - 1 })),
  })


export const useBoundStore = create((...a) => ({
  ...createBearSlice(...a),
  ...createFishSlice(...a),
}));