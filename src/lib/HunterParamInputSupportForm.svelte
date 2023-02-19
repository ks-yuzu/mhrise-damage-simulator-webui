<script lang="ts">
  import {Subtitle}        from '@smui/drawer'
  import Button, {Label}   from '@smui/button'
  import EquipmentSelector from '$lib/EquipmentSelector.svelte'
  import {type Weapon}     from '$lib/mhrise-weapons'
  import {type Armor}      from '$lib/mhrise-armors'
  import {ARMOR_TYPES}     from '$lib/mhrise-metadata'
  import {weaponType, simulationParams, enhancementSelection}
                           from '$lib/store'

  export let onApply = () => {}

  let   weapon: Weapon | undefined  = undefined
  const armors: (Armor|undefined)[] = []

  function getSkillListText(armors: (Armor|undefined)[]) {
    const skillMap = armors
      .filter(i => !!i)
      .flatMap(i => i!.skills)
      .reduce((acc, cur) => {
        acc[cur.name] ??= 0
        acc[cur.name] += parseInt(cur.level)
        return acc
      }, {} as {[key: string]: number})

    return Object
      .entries(skillMap)
      .map(([skill, level]) => `${skill} Lv${level}`)
      .join(', ')

  }
  function getSlotListText(armors: (Armor|undefined)[]) {
    const slotMap = armors
      .filter(i => !!i)
      .flatMap(i => i!.slots.split(''))
      .reduce((acc, cur) => {
        if (cur === '0') { return acc }
        acc[cur] ??= 0
        acc[cur]++
        return acc
      }, {} as {[key: number]: number})

    return Object
      .entries(slotMap)
      .sort(([s1], [s2]) => s1 < s2 ? 1 : -1)
      .map(([slot, num]) => `(${slot}) ${num}個`)
      .join(', ')
  }

  function setWeapon(weapon: Weapon | undefined) {
    $simulationParams.weapon = {
      attack:   weapon.attack,
      element:  weapon.elementValue ?? 0,
      affinity: weapon.affinity     ?? 0,
    }
  }
  function setArmors(armors: (Armor|undefined)[]) {
    const skillMap = armors
      .filter(i => !!i)
      .flatMap(i => i!.skills)
      .reduce((acc, cur) => {
        acc[cur.name] ??= 0
        acc[cur.name] += parseInt(cur.level)
        return acc
      }, {} as {[key: string]: number})

    $enhancementSelection.clear()
    Object
      .entries(skillMap)
      .forEach(([skill, level]) => $enhancementSelection.setSkill(skill, String(level)))
    $enhancementSelection.value = $enhancementSelection.value
  }
</script>

<div class="container">
  <Subtitle>武器選択</Subtitle>
  <div>
    <div style="display: flex;">
      <EquipmentSelector equipmentType="武器"
                         weaponType={$weaponType}
                         let:specText
                         bind:value={weapon}
                         >
        <div style="margin-left: 1rem; align-self: center">{specText}</div>
      </EquipmentSelector>
    </div>
  </div>
  <div>
    <Button variant="raised"
            style="margin: 0.5rem 0; width: 100%;"
            on:click={() => {setWeapon(weapon); onApply()}}
            disabled={weapon == null}
            >
      <Label>Apply</Label>
    </Button>
  </div>

  <Subtitle>防具選択</Subtitle>
  <div>
    {#each ARMOR_TYPES as armorType, i}
    <div style="display: flex;">
      <EquipmentSelector equipmentType="防具"
                         {armorType}
                         let:specText
                         bind:value={armors[i]}
                         >
        <div style="margin-left: 1rem; align-self: center">{specText}</div>
      </EquipmentSelector>
    </div>
    {/each}
  </div>
  <div>
    <div style="margin: 0.5rem 0 0;">
      <Subtitle tag="h3">合計スキル:</Subtitle>
      {getSkillListText(armors)}
    </div>
    <div style="margin: 0.5rem 0;">
      <Subtitle tag="h3">合計スロット:</Subtitle>
      {getSlotListText(armors)}
    </div>
    <Button variant="raised"
            style="margin: 0.5rem 0;"
            on:click={() => {setArmors(armors); onApply()}}
            >
      <Label>Apply</Label>
    </Button>
  </div>
</div>

<style>
  .container > div {
    margin: 0.5rem 1rem;
    display: flex;
    flex-direction: column;
  }
</style>
