<template>
    <CesiumContainer />
</template>

<script setup>
import CesiumContainer from './components/CesiumContainer.vue'
</script>

<style>
/* Global Style */

.el-drawer .el-drawer__header {
    margin-bottom: 0;
}

.cesium-viewer-infoBoxContainer,
.cesium-viewer-selectionIndicatorContainer {
    display: none;
}
</style>
