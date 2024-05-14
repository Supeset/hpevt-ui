<script lang="ts" setup>
import mapboxgl from 'mapbox-gl'
import { vElementSize } from '@vueuse/components'
import { MAP_INIT_CENTER, MAP_INIT_ZOOM, MAP_STYLE } from '~/composables';

(mapboxgl.accessToken as any)
  = MAP_MAPBOX_TOKEN

const mapContainer = shallowRef()

const debouncedFnMapResize = useDebounceFn(() => {
  window.map.resize()
}, 100, { maxWait: 500 })

onMounted(() => {
  const map = new mapboxgl.Map({
    container: mapContainer.value,
    style: MAP_STYLE,
    center: MAP_INIT_CENTER,
    zoom: MAP_INIT_ZOOM,
    hash: true,
  })
  window.map = map

  map.addControl(new mapboxgl.NavigationControl())

  map.on('load', () => {
    map.resize()
  })
})

function onResize() {
  debouncedFnMapResize()
}
</script>

<template>
  <div ref="mapContainer" v-element-size="onResize" class="relative flex-x-hidden overflow-hidden">
    <div v-show="globalActiveTabMenuValue" class="absolute bottom-0 left-0 top-0 m-2 w-250px rounded-2xl bg-white">
      <div class="border-b py-2 text-center text-12px font-bold">
        {{ globalActiveTabMenu?.name }}
      </div>
      <div v-show="globalActiveTabMenuValue === 'mapData'" class="flex flex-col gap-2 p-2">
        <AInput placeholder="请输入地名关键字" />
        <AInputNumber
          placeholder="请输入年份" mode="button" :min="MAP_DATA_MIN_YEAR" :max="MAP_DATA_MAX_YEAR"
        >
          <template #prefix>
            {{ MAP_DATA_MIN_YEAR }}
          </template>
          <template #suffix>
            {{ MAP_DATA_MAX_YEAR }}
          </template>
        </AInputNumber>
      </div>
    </div>
  </div>
</template>
