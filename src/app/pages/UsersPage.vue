<script lang="ts">
import UsersTable from '@/app/containers/UsersTable.vue';

export default {
  name: 'UsersPage',
  components: {
    UsersTable,
  },
};
</script>
<template>
  <div class="flex-1 bg">
    <UsersTable />
  </div>
</template>

<style lang="scss">
.bg {
  background-color: #f8f9fa;
  border-radius: 20px;
}
</style>
