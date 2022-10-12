<script lang="ts">
import { computed } from 'vue';
import { useRoute } from 'vue-router';
export default {
  name: 'Sidebar',
  setup() {
    const route = useRoute();

    const path = computed(() => route.path);

    const activeRouter = (router: string) => {
      return path.value === router;
    };

    return {
      path,
      activeRouter,
    };
  },
};
</script>

<template>
  <div class="sidebar">
    <RouterLink
      :class="{ link: true, active: activeRouter('/dashboard') }"
      to="/dashboard"
    >
      Home
    </RouterLink>
    <RouterLink
      :class="{ link: true, active: activeRouter('/users') }"
      to="/users"
    >
      Users
    </RouterLink>
    <RouterLink
      :class="{ link: true, active: activeRouter('/messages') }"
      to="/messages"
    >
      Messages
    </RouterLink>
  </div>
</template>

<style lang="scss" scoped>
.sidebar {
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: #6f6af8;
  min-height: calc(100vh - 4rem);
  border-radius: 20px;
}

.link {
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 50px;
  color: #fff;
  font-size: 1.2rem;
  font-weight: 500;

  &:hover {
    background-color: #4a47ad;
    border-radius: 20px;
  }
}

.active {
  position: relative;
}

.active::after {
  position: absolute;
  content: '';
  display: block;
  width: 5px;
  height: 75%;
  background-color: #fff;
  border-radius: 20px;
  left: 20px;
}
</style>
