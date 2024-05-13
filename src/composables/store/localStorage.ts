export const lsShowMenuBar = useStorage('lsShowMenuBar', true)
export function setLsShowMenuBar(value: boolean) {
  lsShowMenuBar.value = value
}
