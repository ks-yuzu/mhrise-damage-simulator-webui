import {writable}                                from 'svelte/store'
import {SHARPNESS}                               from 'mhrise-damage-simulator/sharpness'
import {EnhancementMaster, EnhancementSelection} from '$lib/mhrise-enhancement'
import {initialWeaponType}                       from '$lib/config'

export const isSeriesVisible = writable({} as {[key: string]: boolean})

export const simulationParams = writable({
  weapon:                {attack: 330, element: 42, affinity: 0},
  sharpness:             SHARPNESS.none,
  motion:                {motionValue: 10, elementModifier: 1},
  enhancements:          [],
  monsterPartMultiplier: {physical: 55, elemental: 25},
})

export const weaponType = writable(initialWeaponType)

const enhancementMaster = new EnhancementMaster(initialWeaponType)
export const enhancementSelection = writable(new EnhancementSelection(enhancementMaster))

