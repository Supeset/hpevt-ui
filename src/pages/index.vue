<script setup lang="ts">
</script>

<template>
  <div class="h-screen w-screen flex flex-col">
    <Titlebar class="flex-none" />
    <div class="flex shrink grow basis-0 overflow-y-hidden">
      <MenuBar v-show="lsShowMenuBar" class="flex-none" />
      <MapContainer />
    </div>
  </div>
</template>
