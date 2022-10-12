<script lang="ts">
import Password from 'primevue/password';
import InputText from 'primevue/inputtext';
import Button from 'primevue/button';
import Image from 'primevue/image';
import image from '@/assets/images/wellcome.png';
import { setAuthkey } from '@/utils/storage';
import { ref } from 'vue';

export default {
  name: 'Login',
  components: {
    Password,
    InputText,
    Button,
    Image,
  },
  setup() {
    const password = ref('');
    const imgUrl = ref(image);

    const login = () => {
      setAuthkey(password.value);
      setTimeout(() => {
        window.location.replace('/dashboard');
      }, 500);
    };

    return {
      login,
      password,
      imgUrl,
    };
  },
};
</script>

<template>
  <div class="wrapper">
    <Image id="img" :src="imgUrl" />
    <InputText class="input" placeholder="username" />
    <Password
      v-model="password"
      class="input"
      placeholder="password"
      :feedback="false"
    />
    <Button label="Primary" class="btn" @click="login"> Login </Button>
  </div>
</template>

<style lang="scss">
.wrapper {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 100vh;
}

.input {
  margin-bottom: 20px;
}

#img {
  width: 700px;
  height: auto;
  margin-bottom: 50px;
}

.btn {
  background-color: #2196f3;
}
</style>
