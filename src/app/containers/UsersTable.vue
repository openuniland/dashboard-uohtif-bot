<script lang="ts">
import DataTable from 'primevue/datatable';
import InputText from 'primevue/inputtext';
import Column from 'primevue/column';
import { FilterMatchMode } from 'primevue/api';
import { getAllUsers } from '@/services/users';
import { UserType } from '@/types/users';
import { onMounted, ref } from 'vue';

export default {
  name: 'UsersTable',
  components: {
    DataTable,
    Column,
    InputText,
  },
  setup() {
    const users = ref([] as UserType[]);

    async function fetchData() {
      const res = await getAllUsers();
      users.value = res;
      return res;
    }

    onMounted(async () => {
      fetchData();
    });
    return { users };
  },
  data() {
    return {
      filters: {
        global: { value: null, matchMode: FilterMatchMode.CONTAINS },
      },
    };
  },
};
</script>
<template>
  <DataTable
    v-model:filters="filters"
    :value="users"
    :paginator="true"
    responsive-layout="scroll"
    :rows="10"
    :row-hover="true"
    :global-filter-fields="[
      'username',
      'subscribedID',
      'isSubscribedSubject',
      'isTrackTimetable',
    ]"
    class="w-full"
  >
    <template #header>
      <div class="flex items-center justify-between">
        <h5>Users</h5>
        <span class="p-input-icon-left">
          <i class="pi pi-search" />
          <InputText
            v-model="filters['global'].value"
            placeholder="Keyword Search"
          />
        </span>
      </div>
    </template>
    <template #empty> No users found. </template>
    <template #loading> Loading users data. Please wait. </template>
    <Column sortable field="username" header="User name" />
    <Column sortable field="subscribedID" header="Subscribed ID" />
    <Column sortable field="isSubscribedSubject" header="Subscribed Subject" />
    <Column sortable field="isTrackTimetable" header="Track Timetable" />
  </DataTable>
</template>

<style lang="scss" scoped>
::v-deep(.p-datatable-header) {
  border-top-left-radius: 20px;
  border-top-right-radius: 20px;
}
</style>
