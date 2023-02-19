<script lang="ts">
  import {Subtitle}          from '@smui/drawer'
  import Button, {Label}     from '@smui/button'
  import MonsterSelector     from '$lib/MonsterSelector.svelte'
  import MonsterPartSelector from '$lib/MonsterPartSelector.svelte'
  import {type Monster}      from '$lib/mhrise-monsters'
  import {simulationParams}  from '$lib/store'

  export let onApply = () => {}

  let monster: Monster | undefined  = undefined
  let monsterPartMultiplier: {physical?: number, elemental?: number} = {}

  function setMonsterPart(monster: (Monster|undefined)[]) {
    $simulationParams.monsterPartMultiplier = Object.assign({}, $simulationParams.monsterPartMultiplier, monsterPartMultiplier)
  }
</script>

<div class="monster-param-input-support-form container">
  <Subtitle>モンスター選択</Subtitle>
  <div>
    <div style="display: flex;">
      <MonsterSelector let:specText
                       bind:value={monster}
                       >
        <div style="margin-left: 1rem; align-self: center">{specText}</div>
      </MonsterSelector>
    </div>
  </div>

  {#if monster}
    <div>
      <MonsterPartSelector {monster}
                           bind:monsterPartMultiplier
                           />
    </div>

    <div>
      <Button variant="raised"
              style="margin: 0.5rem 0; width: 100%;"
              on:click={() => {setMonsterPart(monster); onApply()}}
              disabled={monsterPartMultiplier.physical == null || monsterPartMultiplier.elemental == null}
              >
        <Label>Apply</Label>
      </Button>
    </div>
  {/if}
</div>

<style>
  .container > div {
    margin: 0.5rem 1rem;
    display: flex;
    flex-direction: column;
  }
</style>
