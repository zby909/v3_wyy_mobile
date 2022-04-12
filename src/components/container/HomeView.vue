<template>
  <div>
    <router-view></router-view>
    <TabBar />
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import TabBar from './TabBar.vue';
export default defineComponent({
  name: 'discovery-page',
  components: { TabBar },
});
</script>
<style lang="scss"></style>
