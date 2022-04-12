<!--
 * @Description:
 * @Author: zby
 * @Date: 2022-04-11 17:24:53
 * @LastEditors: zby
 * @Reference:
-->
<template>
  <div class="g_tab_bar">
    <van-tabbar v-model="active" :active-color="cssVar.wyyRed" @change="changeUrl">
      <van-tabbar-item>
        <span class="item_name">发现</span>
        <template #icon="props">
          <div class="item_icon_box" :class="{ item_active: props.active }">
            <GLIcon icon="icon-wangyiyunyinlezizhi-copy" />
          </div>
        </template>
      </van-tabbar-item>
      <van-tabbar-item>
        <span class="item_name">我的</span>
        <template #icon="props">
          <div class="item_icon_box" :class="{ item_active: props.active }">
            <GLIcon icon="icon-yinle" />
          </div>
        </template>
      </van-tabbar-item>
      <van-tabbar-item>
        <span class="item_name">关注</span>
        <template #icon="props">
          <div class="item_icon_box" :class="{ item_active: props.active }">
            <GLIcon icon="icon-dongtai" />
          </div>
        </template>
      </van-tabbar-item>
    </van-tabbar>
  </div>
</template>

<script lang="ts">
export default { name: 'TabBar' };
</script>

<script lang="ts" setup>
import { ref } from 'vue';
import { useRouter } from 'vue-router';
import cssVar from '@/styles/export.module.scss';
const router = useRouter();

const active = ref(1);

const changeUrl = (activeIdx: number | string) => {
  switch (activeIdx) {
    case 0:
      router.push({ path: '/home/discovery' });
      break;
    case 1:
      router.push({ path: '/home/mine' });
      break;
    case 2:
      router.push({ path: '/home/attention' });
      break;
  }
};
</script>

<style lang="scss">
.g_tab_bar {
  .item_icon_box {
    width: 24px;
    height: 24px;
    font-size: 20px;
    display: flex;
    align-items: center;
    justify-content: center;
  }
  .item_active {
    background: $linearColor;
    border-radius: 50%;
    color: #fff;
    font-size: 16px;
  }
}
</style>
