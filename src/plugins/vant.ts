import { App } from '@vue/runtime-core';

import { Button, Icon } from 'vant';

const install = (Vue: App) => {
  Vue.use(Button);
  Vue.use(Icon);
};

export default {
  install,
};
