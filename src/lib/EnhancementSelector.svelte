<script lang="ts">
  import Select, {Option} from '@smui/select'
  import {Text}           from '@smui/list'
  import type Enhancement from 'mhrise-damage-simulator/enhancement'

  export let style = ''

  export let enhancements: Enhancement[] = []
  export let value:        Enhancement | null
</script>

<!-- <div class="enhancement-selector"> -->
  <Select key={b => `${b ? b.metadata.level : ''}`}
    bind:value
    variant="filled"
    label={enhancements[0]?.metadata?.name ?? ''}
    {style}
    >
    <Option value={null}></Option>
    {#each enhancements as e}
      <Option value={e}>
        <div><Text>{e.metadata.level}</Text></div>
        {#if e.metadata.description}
        <div><Text style="font-size: 0.85rem; color: gray;">{e.metadata.description}</Text></div>
        {/if}
      </Option>
    {/each}
  </Select>
<!-- </div> -->

<style>
  /* .enhancement-selector */ :global(.mdc-menu-surface--fullwidth) {
    width:     auto;
    min-width: 100%;
  }

  /* .enhancement-selector */ :global(.mdc-select__menu > ul > li) {
    display:         flex;
    flex-direction:  column;
    align-items:     flex-start;
    justify-content: center;
  }
</style>
