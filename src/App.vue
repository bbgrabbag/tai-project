<script setup lang="ts">
import Preview from './components/Preview/Preview.vue'
import Navbar from './components/Navbar/Navbar.vue'
import { ref } from 'vue';

const collapsed = ref(false);
const toggleCollapsed = () => collapsed.value = !collapsed.value
</script>

<template>
  <!-- <Preview /> -->

  <div class="app">
    <div class="app-sidebar">
      <Navbar :collapsed="collapsed" @toggle-expand="toggleCollapsed" />
    </div>
    <section class="app-content"></section>
  </div>

</template>

<style scoped lang="scss">
@import "./style.scss";

.app {
  display: flex;
}

.app-sidebar {
  border-right: 1px solid $gray-300;
}

.app-content {
  background: $gray-300;
  flex: 1;
}
</style>
