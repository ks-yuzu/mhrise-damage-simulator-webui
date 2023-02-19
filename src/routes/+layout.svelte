<script lang="ts">
  import TopAppBar, {Row, Section, AutoAdjust}
                                      from '@smui/top-app-bar'
  import IconButton                   from '@smui/icon-button'
  import Drawer, {AppContent, Content, Header, Title, Scrim}
                                      from '@smui/drawer'
  import WeaponIcon                   from '$lib/WeaponIcon.svelte'
  // import ArmorIcon                  from '$lib/ArmorIcon.svelte'
  import MonsterIcon                  from '$lib/MonsterIcon.svelte'
  import HunterParamInputSupportForm  from '$lib/HunterParamInputSupportForm.svelte'
  import MonsterParamInputSupportForm from '$lib/MonsterParamInputSupportForm.svelte'

  let topAppBar: TopAppBar
  let isDrawerOpen                     = false
  let drawerType: 'hunter' | 'monster' = null
</script>

<TopAppBar bind:this={topAppBar}
           dense={true}
           color="secondary"
           variant="short"
           collapsed
           style="background-color: #333;"
           >
  <Row>
    <Section>
      <IconButton on:click={() => {drawerType = 'hunter'; isDrawerOpen = true}}>
        <WeaponIcon style="width: 36px; height: 36px;" />
      </IconButton>
    </Section>
    <Section align="end" toolbar>
      <IconButton on:click={() => {drawerType = 'monster'; isDrawerOpen = true}}>
        <MonsterIcon style="width: 36px; height: 36px;" />
      </IconButton>
    </Section>
  </Row>
</TopAppBar>
<!-- <AutoAdjust {topAppBar} /> -->

<Drawer variant="modal" fixed={false}
        bind:open={isDrawerOpen}
        style="top: 0; width: 50rem; max-width: 100%;"
        >
  {#if drawerType === 'hunter'}
  <Header> <Title>パラメータ・スキルの自動入力</Title> </Header>
  <Content style="padding: 0 1rem;">
    <HunterParamInputSupportForm onApply={() => isDrawerOpen = false}/>
  </Content>
  {:else if drawerType === 'monster'}
  <Header> <Title>モンスター肉質の自動入力</Title> </Header>
  <Content style="padding: 0 1rem;">
    <MonsterParamInputSupportForm onApply={() => isDrawerOpen = false}/>
  </Content>
  {/if}
</Drawer>
<Scrim fixed={false} />

<AppContent class="app-content">
  <slot></slot>
</AppContent>


<style>
  /* Hide everything above this component. */
  :global(#smui-app),
  :global(body),
  :global(html) {
    display:  block  !important;
    height:   auto   !important;
    width:    auto   !important;
    position: static !important;
  }

  * :global(.app-content) {
    flex: auto;
    overflow: auto;
    position: relative;
    flex-grow: 1;
  }

  * :global(.app-content > *) {
    overflow: auto;
    padding: 16px;
    height: 100%;
    box-sizing: border-box;
  }
</style>
