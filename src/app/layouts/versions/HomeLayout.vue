<script lang="ts">
import Header from "@/app/layouts/components/Header.vue";

export default {
  components: {
    Header,
  },
};
</script>

<template>
  <Header />
  <h1>home layout</h1>
  <slot />
</template>
