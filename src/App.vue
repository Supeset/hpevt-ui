<script setup lang="ts">
import zhCN from '@arco-design/web-vue/es/locale/lang/zh-cn'
</script>

<template>
  <AConfigProvider
    :locale="zhCN"
    size="mini"
  >
    <main font-sans text="gray-700 dark:gray-200">
      <RouterView />
    </main>
  </AConfigProvider>
</template>
