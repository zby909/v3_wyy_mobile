import { createRouter, createWebHashHistory, RouteRecordRaw } from 'vue-router';
import HomeView from '@/components/container/HomeView.vue';

const routes: Array<RouteRecordRaw> = [
  {
    path: '/',
    redirect: '/home',
  },
  {
    path: '/home',
    name: 'HomeView',
    component: HomeView,
    redirect: '/home/mine',
    children: [
      {
        path: 'mine',
        name: 'mine',
        // this generates a separate chunk (about.[hash].js) for this route
        // which is lazy-loaded when the route is visited.
        component: () => import(/* webpackChunkName: "mine" */ '../views/mine.vue'),
      },
      {
        path: 'discovery',
        name: 'Discovery',
        component: () => import(/* webpackChunkName: "discovery" */ '../views/discovery.vue'),
      },
      {
        path: 'attention',
        name: 'Attention',
        component: () => import(/* webpackChunkName: "attention" */ '../views/attention.vue'),
      },
    ],
  },
];

const router = createRouter({
  history: createWebHashHistory(),
  routes,
});

export default router;
