export const globalActiveTabMenuValue = ref('')

export function setGlobalActiveTabMenuValue(value: string) {
  if (globalActiveTabMenuValue.value === value)
    value = ''
  globalActiveTabMenuValue.value = value
}

export const globalActiveTabMenu = computed(() => {
  return MENU_TAB_LIST.find(item => item.value === globalActiveTabMenuValue.value)
})
