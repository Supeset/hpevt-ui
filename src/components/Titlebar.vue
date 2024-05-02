<script setup lang="ts">
const AboutModalRef = shallowRef()
function handleAbout() {
  AboutModalRef.value.open()
}
</script>

<template>
  <div class="h-40px w-full flex select-none items-center justify-between border-b-1px border-gray-1 bg-white px-1 dark:border-gray-8 dark:bg-black">
    <div class="flex items-center gap-4">
      <IconBtn icon-name="i-carbon-menu" tooltip-name="菜单" />
      <div class="font-bold">
        历史地名探索与可视化工具 Historical Placename Exploration and Visualization Tool
      </div>
    </div>
    <div>
      <IconBtn icon-name="i-carbon-help" tooltip-name="关于" @click="handleAbout" />
      <!-- <AboutModal ref="AboutModalRef" /> -->
    </div>
  </div>
</template>
