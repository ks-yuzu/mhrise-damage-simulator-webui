import {writable}                                from 'svelte/store'
import {EnhancementMaster, EnhancementSelection} from '$lib/mhrise-enhancement'
import {initialWeaponType}                       from '$lib/config'

export const isSeriesVisible = writable({} as {[key: string]: boolean})
const enhancementMaster = new EnhancementMaster(initialWeaponType)
export const enhancementSelection = writable(new EnhancementSelection(enhancementMaster))

