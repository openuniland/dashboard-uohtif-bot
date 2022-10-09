<script lang="ts">
import Sidebar from '@/app/layouts/components/Sidebar.vue';

export default {
  components: {
    Sidebar,
  },
};
</script>

<template>
  <div class="home-layout p-8">
    <Sidebar class="sidebar" />
    <slot class="slot" />
  </div>
</template>

<style lang="scss" scoped>
.home-layout {
  display: flex;
  width: 100%;

  & .slot {
    flex: 1;
  }

  & .sidebar {
    width: 250px;
    margin-right: 20px;
  }
}
</style>
