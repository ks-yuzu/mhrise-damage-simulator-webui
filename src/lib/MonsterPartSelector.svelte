<script lang="ts">
  import {type Monster}                     from '$lib/mhrise-monsters'
  import DataTable, {Head, Body, Row, Cell} from '@smui/data-table'

  const physicalTypes = ['sever', 'blunt', 'ammo']
  const elementalTypes = ['fire', 'water', 'thunder', 'ice', 'dragon']

  export let monster:               Monster
  export let monsterPartMultiplier: {physical?: number, elemental?: number}

  let selectedPart          = null
  let selectedPhysicalType  = null
  let selectedElementalType = null

  function onClick({part, type, value}) {
    selectedPart = part

    if (physicalTypes.includes(type) ) {
      monsterPartMultiplier.physical = value
      selectedPhysicalType           = type
    }
    else if (elementalTypes.includes(type)) {
      monsterPartMultiplier.elemental = value
      selectedElementalType           = type
    }
  }
</script>


<div class="monster-part-selector">
  <DataTable style="width: 100%">
    <Head>
      <Row>
        <Cell>部位</Cell>
        <Cell>斬撃</Cell>
        <Cell>打撃</Cell>
        <Cell>弾</Cell>
        <Cell>火</Cell>
        <Cell>水</Cell>
        <Cell>雷</Cell>
        <Cell>氷</Cell>
        <Cell>龍</Cell>
      </Row>
    </Head>
    <Body>
      {#each monster.parts as part}
        <Row>
          <Cell>{part.partName}</Cell>
          {#each physicalTypes as type}
            <td class="mdc-data-table__cell"
                class:selected={part.partName === selectedPart && type === selectedPhysicalType}
                on:click={() => onClick({part: part.partName, type: type, value: part[type]})}
                >
              {part[type]}
            </td>
          {/each}
          {#each elementalTypes as type}
            <td class="mdc-data-table__cell"
                class:selected={part.partName === selectedPart && type === selectedElementalType}
                on:click={() => onClick({part: part.partName, type: type, value: part[type]})}
                >
              {part[type]}
            </td>
          {/each}
          <!-- <td class:mdc-data-table__cell class:selected={false} on:click={() => onClick({partName: part.partName, type: 'blunt',   value: part.blunt  })}>{part.blunt}</td> -->
          <!-- <td class:mdc-data-table__cell class:selected={false} on:click={() => onClick({partName: part.partName, type: 'ammo',    value: part.ammo   })}>{part.ammo}</td> -->
          <!-- <td class:mdc-data-table__cell class:selected={false} on:click={() => onClick({partName: part.partName, type: 'fire',    value: part.fire   })}>{part.fire}</td> -->
          <!-- <td class:mdc-data-table__cell class:selected={false} on:click={() => onClick({partName: part.partName, type: 'water',   value: part.water  })}>{part.water}</td> -->
          <!-- <td class:mdc-data-table__cell class:selected={false} on:click={() => onClick({partName: part.partName, type: 'thunder', value: part.thunder})}>{part.thunder}</td> -->
          <!-- <td class:mdc-data-table__cell class:selected={false} on:click={() => onClick({partName: part.partName, type: 'ice',     value: part.ice    })}>{part.ice}</td> -->
          <!-- <td class:mdc-data-table__cell class:selected={false} on:click={() => onClick({partName: part.partName, type: 'dragon',  value: part.dragon })}>{part.dragon}</td> -->
        </Row>
      {/each}
    </Body>
  </DataTable>
</div>


<style>
  .monster-part-selector :global(th),
  .monster-part-selector :global(td) {
    text-align: center;
  }

  .monster-part-selector :global(th:first-of-type),
  .monster-part-selector :global(td:first-of-type) {
    width: 8rem;
  }
  .monster-part-selector :global(th:nth-of-type(n+2)),
  .monster-part-selector :global(td:nth-of-type(n+2)) {
    width: 5rem;
  }

  .monster-part-selector :global(td:nth-of-type(n+2):hover) {
    background-color: rgb(255, 182, 73, 0.5)
  }

  .monster-part-selector :global(td.selected) {
    background-color: rgb(255, 128, 0, 0.5)
  }
</style>
