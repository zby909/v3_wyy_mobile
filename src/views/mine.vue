<template>
  <div class="mine__page">
    我的
    <hr v-for="(item, index) in 500" :key="index" />
    123
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
export default defineComponent({
  name: 'mine-page',
});
</script>
<style lang="scss">
.mine__page {
  padding-bottom: 50px;
}
</style>
