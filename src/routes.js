import Index from '@/pages/index.vue';
import basicLayout from '@/pages/basicLayout.vue';
import NotFound from '@/pages/not-found.vue';

export const routes = [
  { path: '/', component: Index },
  { path: '/base', component: basicLayout },
  { path: '/:path(.*)', component: NotFound },
];

export default routes;
