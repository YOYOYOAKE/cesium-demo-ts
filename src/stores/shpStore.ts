import { defineStore } from 'pinia'
import { Reactive } from 'vue'
import { GeoDataList, NamedGeoJson } from '../types'
import { useViewerStore } from './viewerStore'

export const useShpStore = defineStore('shpStore', () => {

  const { addLayer, removeLayer } = useViewerStore()

  const shpList: Reactive<GeoDataList> = reactive([])

  const createShp = (newShp: NamedGeoJson): void => {
    shpList.push(newShp)
  }

  const addShp = async (name: string): Promise<void> => {
    const res: NamedGeoJson | undefined = shpList.find((shp) => {
      return shp.name === name
    })
    if (res) {
      await addLayer(res)
    }
  }

  const removeShp = (name: string): void => {
    removeLayer(name)
  }

  return {
    shpList,
    createShp,
    addShp,
    removeShp
  }
})