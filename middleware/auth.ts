import { Middleware } from '@nuxt/types';

const authMiddleware: Middleware = async (context: any) => {
  await context.$api.fetchMe();
  if (!context.$api.me) {
    context.redirect('/login');
  }
};
export default authMiddleware;
