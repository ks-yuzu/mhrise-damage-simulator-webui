<script lang="ts">
  import Autocomplete                                from '@smui-extra/autocomplete'
  import {Text}                                      from '@smui/list'
  import type {EquipmentType, WeaponType, ArmorType} from '$lib/mhrise-metadata'
  import WEAPONS, {type Weapon}                      from '$lib/mhrise-weapons'
  import ARMORS, {type Armor}                        from '$lib/mhrise-armors'

  export let equipmentType: EquipmentType
  export let weaponType:    WeaponType | undefined = undefined
  export let armorType:     ArmorType  | undefined = undefined

  export let value:  Weapon | Armor | undefined = undefined
  let previousValue: Weapon | Armor | undefined = undefined
  let specText = ''
  $: specText = value ? getSpecText(value) : ''

  let equipments = (() => {
    if      (equipmentType === '武器') {
      return WEAPONS as Weapon[]
    }
    else if (equipmentType === '防具')  {
      return ARMORS.flat().filter(i => i.part === armorType) as Armor[]
    }
  })()

  function isWeapon(_opt: Weapon | Armor): _opt is Weapon { return equipmentType === '武器' }
  function isArmor(_opt: Weapon | Armor):  _opt is Armor  { return equipmentType === '防具' }

  function getName(opt: Weapon | Armor): string {
    if (opt == null) { return '' }
    else if (equipmentType === '武器') {
      return opt.name
    }
    else if (equipmentType === '防具') {
      return opt.name
    }

    return ''
  }

  function getSpecText(opt: Weapon | Armor): string {
    if (opt == null) { return '' }
    else if (isWeapon(opt)) {
      const element     = opt.elementType ? `${opt.elementType}${opt.elementValue}` : '無'
      const slots       = [...opt.slot, 0, 0, 0].slice(0, 3).join('-')
      const rampageSlot = opt.rampageSlot.join('-') || '0'

      return `攻${opt.attack} / ${opt.affinity}% / ${element} / s${slots} / rs${rampageSlot}`
    }
    else if (isArmor(opt)) {
      const skills = opt.skills.map(i => i.name + i.level).join(', ')
      const slots  = opt.slots.split('').join('-')

      return `${skills} / s${slots}`
    }

    return ''
  }
</script>

<Autocomplete label={`${equipmentType} (${weaponType ?? armorType})`}
              options={equipments}
              getOptionLabel={getName}
              bind:value
              on:focus={() => {previousValue = value; value = undefined}}
              on:blur={() => setTimeout(() => value ??= previousValue, 200)}
              style="width: 20rem;"
              textfield$style="width: 20rem;"
              textfield$variant="filled"
              >
  <div slot="match" let:match={match}>
    <div><Text>{getName(match)}</Text></div>
    <div><Text style="font-size: 0.85rem; color: gray;">{getSpecText(match)}</Text></div>
  </div>
</Autocomplete>
<slot {specText}></slot>

<!-- <style> -->
<!--   :global(.mdc-text-field) { -->
<!--     width: 18rem; -->
<!--   } -->
<!-- </style> -->
