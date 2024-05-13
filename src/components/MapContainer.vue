<script lang="ts" setup>
import mapboxgl from 'mapbox-gl'
import { MAP_INIT_CENTER, MAP_INIT_ZOOM, MAP_STYLE } from '~/composables';

(mapboxgl.accessToken as any)
  = MAP_MAPBOX_TOKEN

const mapContainer = shallowRef()

onMounted(() => {
  window.map = new mapboxgl.Map({
    container: mapContainer.value,
    style: MAP_STYLE,
    center: MAP_INIT_CENTER,
    zoom: MAP_INIT_ZOOM,
    hash: true,
  })

  window.map.addControl(new mapboxgl.NavigationControl())
})
</script>

<template>
  <div class="relative h-full w-full">
    <div
      ref="mapContainer"
      class="relative h-full w-full"
    />
  </div>
</template>
