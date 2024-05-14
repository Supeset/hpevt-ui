<script setup lang="ts">
</script>

<template>
  <div class="h-screen w-screen flex flex-col">
    <Titlebar class="flex-none" />
    <div class="flex flex-y-hidden">
      <MenuBar v-show="lsShowMenuBar" class="flex-none" />
      <MapContainer />
    </div>
  </div>
</template>
