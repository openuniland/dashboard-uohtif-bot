<!-- eslint-disable vue/no-export-in-script-setup -->
<script lang="ts">
import RadioButton from 'primevue/radiobutton';
import Textarea from 'primevue/textarea';
import Button from 'primevue/button';
import AutoComplete from 'primevue/autocomplete';
import { ref, onMounted } from 'vue';
import { getAllUsers, sendNotiToUser } from '@/services/users';
import { sendNotiForUserOfCTMS } from '@/services/ctms';
import { sendNotiForUserOfFithou } from '@/services/fithou';
import { UserType } from '@/types/users';
import { FilterService, FilterMatchMode } from 'primevue/api';
import Emojis from '@/app/components/Emojis.vue';
import { useToast } from 'primevue/usetoast';
import { ToastType } from '@/types/primevue';

export default {
  name: 'Messages',
  components: {
    Textarea,
    RadioButton,
    Button,
    AutoComplete,
    Emojis,
  },
  setup() {
    const services = ref('');
    const textEditer = ref('');
    const selectedUser: any = ref(null);
    const loading = ref(false);

    const serviceOff = ref(true);
    const emailInput = ref(true);

    const messages = ref([] as any[]);

    const addMessages = (mess: any) => {
      messages.value = [mess];
    };

    const sendMessages = async () => {
      serviceOff.value = true;
      emailInput.value = true;

      if (textEditer.value === '') {
        serviceOff.value = false;
        return;
      }

      switch (services.value) {
        case 'ctms':
          loading.value = true;
          const result = await sendNotiForUserOfCTMS(textEditer.value);
          loading.value = false;

          if (result) {
            textEditer.value = '';
            showToast({
              detail: '[CTMS] Send message success',
              summary: 'Success',
              severity: 'success',
              life: 3000,
            });
          } else {
            showToast({
              detail: '[CTMS] Send message error',
              summary: 'Error',
              severity: 'error',
              life: 3000,
            });
          }
          break;
        case 'fithou':
          loading.value = true;
          const res = await sendNotiForUserOfFithou(textEditer.value);
          loading.value = false;
          if (res) {
            textEditer.value = '';
            showToast({
              detail: '[FITHOU] Send message success',
              summary: 'Success',
              severity: 'success',
              life: 3000,
            });
          } else {
            showToast({
              detail: '[FITHOU] Send message error',
              summary: 'Error',
              severity: 'error',
              life: 3000,
            });
          }
          break;
        case 'options':
          if (!selectedUser.value?.subscribedID) {
            emailInput.value = false;
            return;
          }
          loading.value = true;
          const message = await sendNotiToUser({
            id: selectedUser.value?.subscribedID,
            message: textEditer.value,
          });
          loading.value = false;
          if (message) {
            textEditer.value = '';
            selectedUser.value = '';
            showToast({
              detail: '[OPIONS] Send message success',
              summary: 'success',
              severity: 'success',
              life: 3000,
            });
          } else {
            showToast({
              detail: '[OPIONS] Send message error',
              summary: 'Error',
              severity: 'error',
              life: 3000,
            });
          }
          break;
        default:
          serviceOff.value = false;
          break;
      }
    };

    async function fetchData() {
      const res: UserType[] = await getAllUsers();
      users.value = res;
      return res;
    }

    onMounted(() => {
      fetchData();
    });

    const users = ref([] as UserType[]);
    const filteredUsers = ref();
    const searchUsers = (event: any) => {
      setTimeout(() => {
        if (!event.query.trim().length) {
          filteredUsers.value = [...users.value];
        } else {
          filteredUsers.value = FilterService.filter(
            users.value,
            ['username'],
            event.query,
            FilterMatchMode.CONTAINS,
          );
        }
      }, 250);
    };

    const handleGetEmoji = (e: any) => {
      textEditer.value += e;
    };

    const toast = useToast();

    const showToast = (content: ToastType) => {
      toast.add({
        severity: content.severity,
        summary: content.summary,
        detail: content.detail,
        life: content.life,
      });
    };

    return {
      services,
      textEditer,
      sendMessages,
      selectedUser,
      searchUsers,
      filteredUsers,
      serviceOff,
      emailInput,
      loading,
      addMessages,
      messages,
      handleGetEmoji,
      showToast,
    };
  },
};
</script>

<template>
  <div class="h-full flex flex-1 flex-col">
    <!-- header -->
    <header class="w-full flex justify-center">
      <h1 class="text-4xl font-semibold">Message management</h1>
    </header>
    <!-- header end -->
    <!-- chooose options -->
    <div class="flex justify-center mt-8">
      <div class="flex items-center px-4">
        <RadioButton
          v-model="services"
          input-id="fithou"
          name="services"
          value="fithou"
        />
        <label class="ml-2" for="fithou">Fithou services</label>
      </div>
      <div class="flex items-center px-4">
        <RadioButton
          v-model="services"
          input-id="ctms"
          name="services"
          value="ctms"
        />
        <label class="ml-2" for="ctms">CTMS services</label>
      </div>
      <div class="flex items-center px-4">
        <RadioButton
          v-model="services"
          input-id="options"
          name="services"
          value="options"
        />
        <label class="ml-2" for="options">Options</label>
      </div>
    </div>
    <!-- chooose options end -->

    <!-- Selection -->
    <p :class="{ hidden: emailInput }" class="text-red-500">
      Hãy chọn một người dùng để gửi thông báo
    </p>

    <div :class="{ hidden: services !== 'options' }">
      <AutoComplete
        v-model="selectedUser"
        :suggestions="filteredUsers"
        option-label="username"
        placeholder="Type by username(email)"
        @complete="searchUsers($event)"
      />
    </div>
    <!-- Selection end -->

    <p :class="{ hidden: serviceOff }" class="text-red-500">
      Bạn chưa nhập nội dung tin nhắn hoặc chưa chọn dịch vụ!
    </p>

    <!-- editer -->
    <div class="mt-8 textarea">
      <Emojis class="emojis" @getEmoji="handleGetEmoji" />
      <Textarea
        v-model="textEditer"
        class="w-full"
        :auto-resize="true"
        rows="10"
      />
    </div>
    <!-- editer end -->

    <!-- toast -->
    <Toast />
    <!-- toast end -->

    <!-- send button -->
    <div class="flex justify-center mt-8">
      <Button
        :loading="loading"
        label="Send"
        class="p-button-raised"
        @click="sendMessages"
      />
    </div>
    <!-- send button end -->
  </div>
</template>

<style lang="scss">
.textarea {
  position: relative;
}
</style>
