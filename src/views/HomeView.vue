<template>
  <div class="home">
    <GLBgIcon class="vue_icon" :img="require('@/assets/logo.png')" />
    <div class="sss">123</div>
    <van-button type="primary">主要按钮</van-button>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
// import GLIcon from '@/components/common/GLBgIcon.vue';

export default defineComponent({
  name: 'HomeView',
  components: {
    // GLBgIcon,
  },
});
</script>
<style lang="scss">
.home {
  display: flex;
  text-align: center;
  user-select: none;
  .vue_icon {
    width: 100px;
    height: 150px;
  }
  .sss {
    color: $zby;
  }
}
</style>
