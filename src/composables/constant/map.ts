import type { LngLatLike } from 'mapbox-gl'

export const MAP_MAPBOX_TOKEN = 'pk.eyJ1IjoieHVlemh1aHVuIiwiYSI6ImNrZ3FlN2ltNDI0eWEydW5hZno3YzFveG4ifQ.jzEYxRDyz0i2U5aGU0LQBg'

export const MAP_INIT_CENTER: LngLatLike = [108.84, 31.06]
export const MAP_INIT_ZOOM = 4

export const BASE_LAYER = [
  'tianditu-terrain',
  'tianditu-image',
  'tianditu-vector',
  'mapbox-style1',
  'mapbox-style2',
  'mapbox-style3',
]
// eslint-disable-next-line ts/ban-ts-comment
// @ts-expect-error
const COMPUTED_LAYERS: mapboxgl.AnyLayer = BASE_LAYER.map((item, index) => {
  return {
    id: `${item}-layer`,
    type: 'raster',
    source: item,
    layout: { visibility: index === 0 ? 'visible' : 'none' },
  }
})
const OVERLAP_LAYER_NAME = 'tianditu-vector-anno-layer'
export const MAP_STYLE: mapboxgl.Style = {
  version: 8,
  name: 'Basic',
  glyphs: 'mapbox://fonts/mapbox/{fontstack}/{range}.pbf',
  sprite: 'mapbox://sprites/mapbox/bright-v8',
  sources: {
    'tianditu-vector': {
      type: 'raster',
      tiles: [
        'https://t0.tianditu.gov.cn/DataServer?T=vec_w&x={x}&y={y}&l={z}&tk=8c1768e11fec4006319e69e4a2a58793',
      ],
      tileSize: 256,
    },
    'tianditu-image': {
      type: 'raster',
      tiles: [
        'https://t0.tianditu.gov.cn/DataServer?T=img_w&x={x}&y={y}&l={z}&tk=8c1768e11fec4006319e69e4a2a58793',
      ],
      tileSize: 256,
    },
    'tianditu-terrain': {
      type: 'raster',
      tiles: [
        'https://t0.tianditu.gov.cn/DataServer?T=ter_w&x={x}&y={y}&l={z}&tk=8c1768e11fec4006319e69e4a2a58793',
      ],
      tileSize: 256,
    },
    'tianditu-vector-anno': {
      type: 'raster',
      tiles: [
        'https://t0.tianditu.gov.cn/cva_w/wmts?SERVICE=WMTS&REQUEST=GetTile&VERSION=1.0.0&LAYER=cva&STYLE=default&TILEMATRIXSET=w&FORMAT=tiles&TILEMATRIX={z}&TILEROW={y}&TILECOL={x}&tk=8c1768e11fec4006319e69e4a2a58793',
      ],
      tileSize: 256,
    },
    'mapbox-style1': {
      type: 'raster',
      tiles: [
        `https://api.mapbox.com/styles/v1/xuezhuhun/cl8figjhr000114pdi6ssaay9/tiles/256/{z}/{x}/{y}@2x?access_token=${MAP_MAPBOX_TOKEN}`,
      ],
      tileSize: 256,
    },
    'mapbox-style2': {
      type: 'raster',
      tiles: [
        `https://api.mapbox.com/styles/v1/xuezhuhun/cl8fifwmc001z14qilganef03/tiles/256/{z}/{x}/{y}@2x?access_token=${MAP_MAPBOX_TOKEN}`,
      ],
      tileSize: 256,
    },
    'mapbox-style3': {
      type: 'raster',
      tiles: [
        `https://api.mapbox.com/styles/v1/xuezhuhun/cl7obude3001y15npbnat955g/tiles/256/{z}/{x}/{y}@2x?access_token=${MAP_MAPBOX_TOKEN}`,
      ],
      tileSize: 256,
    },
  },
  layers: [
    // eslint-disable-next-line ts/ban-ts-comment
    // @ts-expect-error
    ...COMPUTED_LAYERS,
    {
      id: OVERLAP_LAYER_NAME,
      type: 'raster',
      source: 'tianditu-vector-anno',
      layout: { visibility: 'none' },
    },
  ],
}
