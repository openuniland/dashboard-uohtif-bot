<script setup lang="ts">
import HelloWorld from "@/components/HelloWorld.vue";
import VueIcon from "@/assets/vue.svg";
</script>

<template>
  <div>
    <img v-bind:src="VueIcon" alt="" />
  </div>
  <HelloWorld msg="Vite + Vue" />
</template>

<style scoped>
.logo {
  height: 6em;
  padding: 1.5em;
  will-change: filter;
}
.logo:hover {
  filter: drop-shadow(0 0 2em #646cffaa);
}
.logo.vue:hover {
  filter: drop-shadow(0 0 2em #42b883aa);
}
</style>
