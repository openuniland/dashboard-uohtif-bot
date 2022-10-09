<script lang="ts">
import { computed } from "vue";
import { useRouter } from "vue-router";
import DefaultLayout from "@/app/layouts/versions/DefaultLayout.vue";

export default {
  setup() {
    const route = useRouter();

    return {
      layout: computed(
        () => route.currentRoute.value.meta.layout || DefaultLayout
      ),
    };
  },
};
</script>

<template>
  <component :is="layout">
    <router-view />
  </component>
</template>
