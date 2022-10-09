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
  <div class="flex-1">
    <UsersTable />
  </div>
</template>
