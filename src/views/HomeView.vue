<template>
  <div class="home">
    <GLBgIcon class="vue_icon" :img="require('@/assets/logo.png')" />
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
  text-align: center;
  .vue_icon {
    width: 100px;
    height: 150px;
  }
}
</style>
