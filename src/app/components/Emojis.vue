<script lang="ts">
import { emojis } from '@/utils/emojis';
import { ref } from 'vue';
export default {
  name: 'Emojis',
  components: {},
  setup(props, context) {
    const emojisList = ref(emojis);
    const emoji = ref('');
    const show = ref(true);

    const getEmoji = (e: string) => {
      emoji.value = e;

      context.emit('getEmoji', e);

      return e;
    };

    const showEmojis = () => {
      show.value = !show.value;
    };

    const handleFocusOut = () => {
      show.value = !show.value;
    };

    return { emojisList, getEmoji, show, showEmojis, handleFocusOut };
  },
};
</script>

<template>
  <div class="wrapper-emoji-icon" tabindex="0" @focusout="handleFocusOut">
    <span class="emoji-icon" @click="showEmojis">😉</span>
    <div :class="{ emojisWrapper: true, hidden: show }">
      <div class="emojis">
        <span v-for="(value, key) in emojisList">
          <span
            :key="key"
            class="cursor-pointer item"
            @click="getEmoji(value)"
            >{{ value }}</span
          >
        </span>
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.emojisWrapper {
  width: 312px;
  height: 345px;
  overflow-y: auto;
  border: rgb(153, 151, 151) 2px solid;
  border-radius: 10px;
  position: absolute;
  right: 0;
  top: 0;
  background-color: #fff;

  /* width */
  &::-webkit-scrollbar {
    width: 8px;
    border-radius: 10px;
  }

  /* Track */
  &::-webkit-scrollbar-track {
    background: #f1f1f1;
    border-radius: 10px;
  }

  /* Handle */
  &::-webkit-scrollbar-thumb {
    background: #888;
    border-radius: 10px;
  }

  /* Handle on hover */
  &::-webkit-scrollbar-thumb:hover {
    background: #555;
    border-radius: 10px;
  }

  & .emojis {
    width: 100%;
    display: flex;
    flex-wrap: wrap;

    & .item {
      padding: 0.2rem;
      font-size: 1.8rem;
      user-select: none;
    }

    & .item:hover {
      background-color: #f1f1f1;
    }
  }
}

.emoji-icon {
  width: 2rem;
  height: 2rem;
  font-size: 1.5rem;
  cursor: pointer;
}

.wrapper-emoji-icon {
  width: fit-content;
  position: absolute;
  top: 0;
  right: 0;
}
</style>
