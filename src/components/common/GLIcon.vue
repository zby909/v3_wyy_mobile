<!--
阿里巴巴图标库使用说明：
icon--对应图片库font class名
iconClass--自定义类名
<GLIcon icon="icon-404" fontSize="16px" iconClass="hk-header-list-icon"></GLIcon>
-->
<template>
  <svg class="gl-icon" :class="iconClass" aria-hidden="true" :style="{ fontSize: fontSize }">
    <use :xlink:href="'#' + icon"></use>
  </svg>
</template>

<script>
export default {
  name: 'GLIcon',
  props: {
    icon: {
      type: String,
      require: true,
    },
    iconClass: {
      type: String,
      default: '',
    },
    fontSize: {
      type: String,
      default: '1em',
    },
  },
};
</script>

<style scoped>
.gl-icon {
  width: 1em;
  height: 1em;
  /* vertical-align: middle; */
  fill: currentColor;
  overflow: hidden;
}
</style>
