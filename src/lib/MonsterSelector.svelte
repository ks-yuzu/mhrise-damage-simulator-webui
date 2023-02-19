<script lang="ts">
  import Autocomplete             from '@smui-extra/autocomplete'
  import {Text}                   from '@smui/list'
  import MONSTERS, {type Monster} from '$lib/mhrise-monsters'

  export let style = ''
  export let value:         Monster | undefined
  export let previousValue: Monster | undefined
</script>

<div class="monster-selector">
  <Autocomplete label="モンスター"
                options={MONSTERS}
                getOptionLabel={(monster) => { return monster?.name ?? '' }}
                bind:value
                on:focus={() => {previousValue = value; value = undefined}}
                on:blur={() => setTimeout(() => value ??= previousValue, 200)}
                style="width: 20rem; {style}"
                textfield$style="width: 20rem;"
                textfield$variant="filled"
                >
    <div slot="match" let:match={monster}>
      <div><Text>{monster.name}</Text></div>
      <!-- {#if monster.weakElement} -->
      <!--   <\!-- <div><Text style="font-size: 0.85rem; color: gray;">{getSpecText(monster)}</Text></div> -\-> -->
      <!-- {/if} -->
    </div>
  </Autocomplete>
</div>

<!-- <style> -->
<!--   .monster-selector :global(.mdc-select__menu) { -->
<!--     width: 13rem -->
<!--   } -->
<!-- </style> -->
