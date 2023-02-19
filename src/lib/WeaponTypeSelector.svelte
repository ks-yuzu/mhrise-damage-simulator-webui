<script lang="ts">
  import Select, {Option} from '@smui/select'
  import {WEAPON_TYPES}   from '$lib/mhrise-metadata'

  export let style = ''
  export let value: string
</script>

<div class="weapon-type-selector">
  <Select bind:value
          variant="filled"
          label="武器種"
          {style}
          >
    {#each WEAPON_TYPES as weaponType}
      <Option value={weaponType}>{weaponType}</Option>
    {/each}
  </Select>
</div>

<style>
  .weapon-type-selector :global(.mdc-select__menu) {
    width: 13rem
  }
</style>
