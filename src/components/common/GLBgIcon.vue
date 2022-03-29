<!--
描述：将图片以背景显示 by: zby
使用说明：
<BackgroundImg :img="'图片路径'" :size="类型，可选cover / contain"/> 外部定义类名设置宽高即可显示
-->
<template>
  <div class="gl-bgicon">
    <div
      class="gl-bgicon__bg"
      :class="[size, { hover: hoverImg }]"
      :style="{ '--bgImg': 'url(' + img + ')', '--hoverImg': 'url(' + hoverImg + ')' }"
    ></div>
  </div>
</template>

<script>
export default {
  name: 'GLBgIcon',
  props: {
    img: {
      type: String,
      require: true,
    },
    hoverImg: {
      type: String,
    },
    size: {
      type: String,
      default: 'contain',
    },
  },
};
</script>

<style lang="scss" scoped>
.gl-bgicon {
  display: inline-block;

  .gl-bgicon__bg {
    display: block;
    width: 100%;
    height: 100%;
    background-position: center;
    background-repeat: no-repeat;
    background-size: contain;
    background-image: var(--bgImg);

    &.cover {
      background-size: cover;
    }

    &.hover:hover {
      background-image: var(--hoverImg);
    }
  }
}
</style>
