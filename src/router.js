import VueRouter from 'vue-router';

const SearchPolicy = require('./views/SearchPolicyPage.vue');

const routes = [
  {
    path: '/search_policy',
    component: SearchPolicy,
    meta: {
      requiresAuth: true,
    },
  },
];

const router = VueRouter.createRouter({
  // 4. Provide the history implementation to use. We are using the hash history for simplicity here.
  history: VueRouter.createWebHashHistory(),
  routes, // short for `routes: routes`
});

router.beforeEach((to, from, next) => {
  if (to.meta.requiresAuth) {
    const token = localStorage.getItem('token');
    if (token) {
      // User is authenticated, proceed to the route
      next();
    } else {
      // User is not authenticated, redirect to login
      next('/');
    }
  } else {
    // Non-protected route, allow access
    next();
  }
});

export default router;
