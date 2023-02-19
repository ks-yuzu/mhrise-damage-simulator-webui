<!-- <script lang="ts"> -->
<!--   import FormField from '@smui/form-field' -->
<!--   import Checkbox  from '@smui/checkbox' -->

<!--   export let enhancement -->
<!--   export let value -->

<!--   export let isChecked = false -->
<!--   $: value = isChecked ? enhancement : null -->
<!-- </script> -->

<!-- <FormField> -->
<!--   <Checkbox bind:checked={isChecked} -->
<!--             variant="filled" -->
<!--             /> -->
<!--   <span slot="label">{enhancement.metadata.name}</span> -->
<!-- </FormField> -->


<script lang="ts">
  import Button, {Label}  from '@smui/button'
  import type Enhancement from 'mhrise-damage-simulator/enhancement'

  export let style = ''

  export let enhancement: Readonly<Enhancement>
  export let value:       Readonly<Enhancement> | null

  function toggle() {
    value = (value == null) ? enhancement : null
    return false
  }
</script>


<Button on:click={toggle}
        style={[
          value ? '' : 'color: rgba(255,255,255,0.6);',
          'background-color: #2a2a2e',
          'padding: 1rem',
          'margin: 0.2rem',
          style,
        ].join(';')}
        >
  <Label>{enhancement.metadata.name}</Label>
</Button>

