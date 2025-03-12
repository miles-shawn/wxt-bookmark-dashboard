import { createRouter, createWebHashHistory } from 'vue-router';

declare module 'vue-router' {
  interface RouteMeta {
    title?: string;
  }
}

const router = createRouter({
  history: createWebHashHistory(),
  routes: [
    {
      path: '/',
      component: () => import('@/components/Layout.vue'),
      children: [
        {
          path: '/',
          meta: { title: 'Bookmarks' },
          component: () => import('./pages/Index.vue'),
        },
        {
          path: '/options',
          meta: { title: 'Options' },
          component: () => import('./pages/Options.vue'),
        },
      ],
    },
    {
      path: '/readme',
      meta: { title: 'Readme' },
      component: () => import('./pages/Readme.vue'),
    },
  ],
});

router.afterEach(async (to, _from, failure) => {
  if (!failure) {
    nextTick(() => {
      document.title = `Bookmark Dashboard - ${to.meta.title || 'Unkown'}`;
    });
    await lastVisitedRoute.setValue(to.path);
  }
});

export default router;
