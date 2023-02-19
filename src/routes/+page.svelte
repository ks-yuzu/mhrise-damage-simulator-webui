<script lang="ts">
  import {tick}                                    from 'svelte'
  import _                                         from 'lodash'
  import Card                                      from '@smui/card'
  import Textfield                                 from '@smui/textfield'
  import Select, {Option}                          from '@smui/select'

  import DamageSimulator                           from 'mhrise-damage-simulator'
  import {SHARPNESS, SHARPNESS_JP}                 from 'mhrise-damage-simulator/sharpness'

  import Highcharts                                from '$lib/Highcharts.svelte'
  import WeaponTypeSelector                        from '$lib/WeaponTypeSelector.svelte'
  import EnhancementCard                           from '$lib/EnhancementCard.svelte'
  import {damageExpGraphSettings}                  from '$lib/graph-settings'
  import {EnhancementMaster, EnhancementSelection} from '$lib/mhrise-enhancement'
  import {isBlademaster, type WeaponType}          from '$lib/mhrise-metadata'
  import {SKILL_EVALUATION_MAP}                    from '$lib/mhrise-decorations'
  import {weaponType, simulationParams, enhancementSelection, isSeriesVisible}
                                                   from '$lib/store'

  // let weaponType: WeaponType = '弓'
  let enhancementMaster    = new EnhancementMaster($weaponType)
  // let enhancementSelection = new EnhancementSelection(enhancementMaster)
  $: enhancementMaster = new EnhancementMaster($weaponType)
  $: tick().then(() => {
    $enhancementSelection = new EnhancementSelection($weaponType)
  })
  $: $simulationParams.sharpness = isBlademaster($weaponType) ? SHARPNESS.white : SHARPNESS.none

  // const simulationParams = {
  //   weapon:                {attack: 330, element: 42, affinity: 0},
  //   sharpness:             SHARPNESS.none,
  //   motion:                {motionValue: 10, elementModifier: 1},
  //   enhancements:          [],
  //   monsterPartMultiplier: {physical: 55, elemental: 25},
  // }
  let sim: DamageSimulator = null
  let expectedDamage       = 0
  let expectedDamageInReal = 0
  // Enhancement 以外の更新
  $: sim = new DamageSimulator($simulationParams)
  // Enhancement の更新
  $: {
    sim.setEnhancements($enhancementSelection.asList())
    expectedDamage       = sim.calc()
    expectedDamageInReal = sim.calcInRealNumbers()
    sim = sim
  }

  let graphData: Highcharts.SeriesLineOptions[] = []
  $: {
    const serieses = []
    for (const [skillIdx, skills] of enhancementMaster.getEnhancementListByCategory('skills')?.entries() ?? []) {
      const name              = skills[0].metadata.name
      const currentLevel      = $enhancementSelection.value.skills[skillIdx]?.metadata?.level
      const currentLevelIndex = currentLevel != null ? skills.findIndex(i => i.metadata.level === currentLevel) : -1

      const data = skills.slice(currentLevelIndex + 1).flatMap(s => {
        if (isNaN(Number(s.metadata.level))) { return [] }

        const newEnhancementSelection = _.cloneDeep($enhancementSelection)
        newEnhancementSelection.value.skills[skillIdx] = s
        sim.setEnhancements(newEnhancementSelection.asList())

        const levelDiff = parseInt(s.metadata.level) - parseInt(currentLevel ?? '0')
        // if (SKILL_EVALUATION_MAP[name]?.[levelDiff] == null) {console.log(`${name}:${levelDiff} is not found`)}
        return [{
          name: `Lv${s.metadata.level} (+${levelDiff})`,
          x: SKILL_EVALUATION_MAP[name]?.[levelDiff] ?? (2 * levelDiff),
          y: sim.calcInRealNumbers(),
        }]
      })
      if (data.length > 0) { // series が減ると末尾に古いものが残るので, 点が無くてもスキップはしない
        data.unshift({name: `Lv${currentLevel}`, x: 0, y: expectedDamageInReal})
      }

      serieses.push({
        type: 'line' as 'line',
        name,
        data,
        visible: $isSeriesVisible[name] ?? damageExpGraphSettings.isEnabledByDefault[name] ?? true,
      })
    }

    graphData = serieses
  }

  function setSkill(skill: string, level: string) {
    const skills = enhancementMaster.getEnhancementListByCategory('skills')
    const skillIndex = skills.findIndex(i => i[0].metadata.name === skill)
    if (skillIndex < 0) { return }

    const skillValue = skills[skillIndex].find(i => i.metadata.level === level)
    if (skillValue == null) {
      console.log(`failed to get skill details`); return
    }

    $enhancementSelection.value.skills[skillIndex] = skillValue
  }
</script>


<div>
  <div class="wrappable-flex">
    <Card>
      <WeaponTypeSelector bind:value={$weaponType}
                          style="width: 10rem;"
                          />
    </Card>

    <EnhancementCard category="weapons"
                     enhancements={enhancementMaster.getEnhancementListByCategory('weapons')}
                     bind:value={$enhancementSelection.value['weapons']}
                     selectorWidth="8rem"
                     checkboxWidth="8rem"
                     />
    <EnhancementCard category="items"
                     enhancements={enhancementMaster.getEnhancementListByCategory('items')}
                     bind:value={$enhancementSelection.value['items']}
                     selectorWidth="8rem"
                     checkboxWidth={e => e.metadata.name.length < 7 ? '7rem' : ''}
                     />
  </div>

  <div class="wrappable-flex">
    <EnhancementCard category="rampageDecorations"
                     enhancements={enhancementMaster.getEnhancementListByCategory('rampageDecorations')}
                     bind:value={$enhancementSelection.value['rampageDecorations']}
                     selectorWidth="12rem"
                     />
    <EnhancementCard category="quriousCrafts"
                     enhancements={enhancementMaster.getEnhancementListByCategory('quriousCrafts')}
                     bind:value={$enhancementSelection.value['quriousCrafts']}
                     selectorWidth="12rem"
                     />
    <EnhancementCard category="dango"
                     enhancements={enhancementMaster.getEnhancementListByCategory('dango')}
                     bind:value={$enhancementSelection.value['dango']}
                     selectorWidth="12rem"
                     />
  </div>

  <div class="wrappable-flex">
    <EnhancementCard category="miscEnhancements"
                     enhancements={enhancementMaster.getEnhancementListByCategory('miscEnhancements')}
                     bind:value={$enhancementSelection.value['miscEnhancements']}
                     selectorWidth="12rem"
                     />
  </div>

  <div class="wrappable-flex">
    <EnhancementCard category="skills"
                     enhancements={enhancementMaster.getEnhancementListByCategory('skills')}
                     bind:value={$enhancementSelection.value['skills']}
                     />
  </div>

  <div class="wrappable-flex">
    <Card style="flex-direction: column; min-width: 26rem;">
      <div id="variable-area">
        <div>
          <Textfield style="width: 7rem" label="攻撃力"     type="number" bind:value={$simulationParams.weapon.attack}   variant="filled" />
          <Textfield style="width: 7rem" label="属性値"     type="number" bind:value={$simulationParams.weapon.element}  variant="filled" />
          <Textfield style="width: 7rem" label="武器会心率" type="number" bind:value={$simulationParams.weapon.affinity} variant="filled" />
          {#if isBlademaster($weaponType)}
          <Select    style="width: 7rem" label="切れ味"     type="number" bind:value={$simulationParams.sharpness}       variant="filled">
            {#each Object.keys(SHARPNESS_JP) as name}
              <Option value={name}>{SHARPNESS_JP[name]}</Option>
            {/each}
          </Select>
          {/if}
        </div>

        <div>
          <Textfield style="width: 10rem" label="モーション値"       type="number" bind:value={$simulationParams.motion.motionValue}     variant="filled" />
          <Textfield style="width: 10rem" label="モーション属性補正" type="number" bind:value={$simulationParams.motion.elementModifier} variant="filled" />
        </div>

        <div>
          <Textfield style="width: 10rem" label="物理肉質" type="number" bind:value={$simulationParams.monsterPartMultiplier.physical}  variant="filled" />
          <Textfield style="width: 10rem" label="属性肉質" type="number" bind:value={$simulationParams.monsterPartMultiplier.elemental} variant="filled" />
        </div>

        <div>
          <Textfield style="width: 7rem" label="実質攻撃力" value={Math.floor(sim.rawAttack)}  variant="filled" />
          <Textfield style="width: 7rem" label="実質属性値" value={Math.floor(sim.rawElement)} variant="filled" />
          <Textfield style="width: 7rem" label="実質会心率" value={sim.affinity}               variant="filled" />
        </div>

        <div>
          <Textfield style="width: 10rem" label="会心倍率"     value={1 + sim.physicalCriticalDamageMultiplier}  variant="filled" />
          <Textfield style="width: 10rem" label="属性会心倍率" value={1 + sim.elementalCriticalDamageMultiplier} variant="filled" />
        </div>

        <div>
          <Textfield style="width: 7rem" label="物理ダメージ" value={Math.round(sim.physicalDamage)}  variant="filled" /> +
          <Textfield style="width: 7rem" label="属性ダメージ" value={Math.round(sim.elementalDamage)} variant="filled" /> =
          <Textfield style="width: 7rem" label="合計ダメージ" value={expectedDamage}                  variant="filled" />
        </div>
      </div>
    </Card>

    <Card style="width: calc(100% - 34rem); min-width: 600px; min-height: 40rem; overflow: hidden">
      <Highcharts series={graphData}
                  onClick={(_x, _y, pointName, seriesName) => {
                    const skill = seriesName
                    const level = pointName.replace(/Lv(\w)\s+\(.*\)/, '$1')
                    setSkill(skill, level)
                  }}
                  />
    </Card>
  </div>
</div>


<style>
  :global(
    input[type="number"]::-webkit-outer-spin-button,
    input[type="number"]::-webkit-inner-spin-button
  ) {
    -webkit-appearance: none;
    margin: 0;
  }

  div.wrappable-flex {
    display:   flex;
    flex-flow: wrap;
  }
  :global(div.wrappable-flex > div:first-of-type) {
    flex-grow: 1;
  }
  :global(div.wrappable-flex > div:nth-of-type(2)) {
    flex-grow: 1000;
  }
  :global(div.wrappable-flex > div:nth-of-type(3)) {
    flex-grow: 1000000;
  }

  #variable-area > div {
    margin-top: 0.5rem;
  }
  #variable-area > div:nth-last-of-type(3) {
    margin-top: 1.5rem;
  }
  :global(#variable-area > div > .mdc-select) {
    margin: 0 0.2
  }

  :global(.mdc-card) {
    display: block;
    margin:  0.4rem 0.3rem;
    padding: 0.5rem;
  }

  :global(.mdc-text-field:has(input:not(:placeholder-shown)) > .mdc-line-ripple::before) {
    border-bottom-color: #ff440088;
  }
  :global(.mdc-select > .mdc-select__anchor:has(.mdc-select__selected-text:not(:empty)) > .mdc-line-ripple::before) {
    border-bottom-color: #ff440088;
  }
  /* :global(.mdc-select > .mdc-select__anchor:has(.mdc-select__selected-text:not(:empty)) > label) { */
  /*   color: white; */
  /* } */
</style>
