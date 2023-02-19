import type Enhancement           from 'mhrise-damage-simulator/enhancement'
import type {WeaponType}          from '$lib/mhrise-metadata'
import {ITEMS}                    from 'mhrise-damage-simulator/enhancement/item'
import {DANGOS}                   from 'mhrise-damage-simulator/enhancement/dango'
import {SKILLS}                   from 'mhrise-damage-simulator/enhancement/skill'
import {WEAPONS}                  from 'mhrise-damage-simulator/enhancement/weapon'
import {QURIOUS_CRAFTS}           from 'mhrise-damage-simulator/enhancement/qurious-craft'
import {RAMPAGE_DECORATIONS}      from 'mhrise-damage-simulator/enhancement/rampage-decoration'
import {MISC_ENHANCEMENTS}        from 'mhrise-damage-simulator/enhancement/misc-enhancement'

export class EnhancementMaster {
  private static   _enhancementListMapCache: {[key: string]: Map<string, Enhancement[][]>} = {}
  private readonly _enhancementListMap: Map<string, Enhancement[][]>

  constructor(weaponType: WeaponType) {
    if ( EnhancementMaster._enhancementListMapCache[weaponType] == null ) {
      EnhancementMaster._enhancementListMapCache[weaponType] = this._generateEnhancementMap(weaponType)
    }
    this._enhancementListMap = EnhancementMaster._enhancementListMapCache[weaponType]
  }

  private _generateEnhancementMap(weaponType: WeaponType) {
    const enhancementFilter = (i: Enhancement) => i.metadata.weaponFilter.length == 0 || i.metadata.weaponFilter.includes(weaponType)
    const enhancementReducer = (acc: Enhancement[][], cur: Enhancement) => {
      const targetArray = acc.find(i => i[0]?.metadata?.name === cur.metadata.name)
      if (targetArray != null) { targetArray.push(cur) }
      else                     { acc.push([cur]) }
      return acc
    }

    return new Map<string, Enhancement[][]>([
      ['items',              ITEMS              .filter(enhancementFilter).reduce(enhancementReducer, [])],
      ['dango',              DANGOS             .filter(enhancementFilter).reduce(enhancementReducer, [])],
      ['quriousCrafts',      QURIOUS_CRAFTS     .filter(enhancementFilter).reduce(enhancementReducer, [])],
      ['weapons',            WEAPONS            .filter(enhancementFilter).reduce(enhancementReducer, [])],
      ['skills',             SKILLS             .filter(enhancementFilter).reduce(enhancementReducer, [])],
      ['rampageDecorations', RAMPAGE_DECORATIONS.filter(enhancementFilter).reduce(enhancementReducer, [])],
      ['miscEnhancements',   MISC_ENHANCEMENTS  .filter(enhancementFilter).reduce(enhancementReducer, [])],
    ])
  }

  public getEnhancementCategories() {
    return this._enhancementListMap.keys()
  }

  public getEnhancementListByCategory(category: string) {
    return Object.freeze(this._enhancementListMap.get(category))
  }
}

export class EnhancementSelection {
  public value: {[key: string]: (Enhancement|null)[]}
  private enhancementMaster: EnhancementMaster // tmp

  constructor(weaponType: WeaponType) {
    // const enhancementMaster = new EnhancementMaster(weaponType) // tmp
    this.enhancementMaster = new EnhancementMaster(weaponType)

    this.value = {} as {[key: string]: (Enhancement|null)[]}
    for (const category of this.enhancementMaster.getEnhancementCategories()) {
      this.initCategory(category, {useDefault: true})
    }
  }

  public initCategory(category: string, {useDefault}: {useDefault: boolean}) {
    this.value[category] = this.enhancementMaster
      .getEnhancementListByCategory(category)
      ?.map(e => (useDefault && e.find(i => i.metadata.isEnabledByDefault)) ?? null)
      ?? []
  }

  public clear() {
    this.initCategory('skills', {useDefault: false})
  }

  public asList() {
    return Object.values(this.value).flat().filter(i => !!i) as Enhancement[]
  }

  public setSkill(skill: string, level: string) {
    const skills = this.enhancementMaster.getEnhancementListByCategory('skills')
    if (skills == null) {
      console.log('failed to get skill data')
      return
    }

    const skillIndex = skills.findIndex(i => i[0].metadata.name === skill)
    if (skillIndex < 0) { return }

    const skillValue = skills[skillIndex].find(i => i.metadata.level === level)
    if (skillValue == null) {
      console.log(`failed to get skill details`); return
    }

    this.value.skills[skillIndex] = skillValue
  }
}
