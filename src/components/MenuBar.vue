<script lang="ts" setup></script>

<template>
  <div class="w-40px flex flex-col items-center border-r-1px border-gray-1 bg-white py-1px dark:border-gray-8 dark:bg-black">
    <div class="h-full w-full flex flex-col justify-between">
      <div>
        <IconBtn
          v-for="item in MENU_TAB_LIST" :key="item.value"
          :icon-name="item.icon"
          :tooltip-name="item.name"
          :active="globalActiveTabMenuValue === item.value"
          @click="setGlobalActiveTabMenuValue(item.value)"
        />
      </div>
      <div>
        <IconBtn icon-name="i-carbon-rotate-360" tooltip-name="刷新" />
        <IconBtn icon-name="i-carbon-settings" tooltip-name="设置" />
        <IconBtn icon-name="i-carbon-sun dark:i-carbon-moon" tooltip-name="主题" @click="() => toggleDark()" />
        <IconBtn icon-name="i-carbon-help" tooltip-name="关于" />
      </div>
    </div>
  </div>
</template>
