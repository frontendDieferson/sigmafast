<template>
  <div class="dashboard w-full h-screen flex">
    
    <aside
      class="h-screen bg-secondaryColorF w-[280px] p-3"
    >
    <LogoAside />
    <ProfileAside />
    <FrameAside />
    <div class="divider w-full h-[1px] bg-zinc-700 my-3"></div>
    <LogoutAside />
    </aside>

    <header class="h-full">
      <nav class="h-[60px]">

      </nav>
      <main class="bg-secondaryColorF w-full overflow-y-auto p-3">
        <NuxtPage />

      </main>
    </header>
  </div>
</template>

<script setup>

import LogoAside from './dashboard/components/DashBoard/LogoAside.vue'
import FrameAside from './dashboard/components/DashBoard/FrameAside.vue'
import ProfileAside from './dashboard/components/DashBoard/ProfileAside.vue'
import LogoutAside from './dashboard/components/DashBoard/LogoutAside.vue'



definePageMeta({
  middleware: 'auth'
})

useHead({
  title: 'Dashboard'
})

</script>

<style lang="scss" scoped>
header {
    width: calc(100% - 280px);
  }

  nav {
    background-color: #1b1b1d;
  }

  main {
    height: calc(100% - 60px);
  }
</style>