import { defineConfig } from 'wxt';

const description = 'Manage your bookmarks through a dashboard.';

// See https://wxt.dev/api/config.html
export default defineConfig({
  extensionApi: 'chrome',
  modules: ['@wxt-dev/module-vue'],

  manifest: {
    name: 'Bookmark Dashboard',
    description,
    version: '0.0.1',
    action: { default_title: description },
    permissions: ['tabs', 'storage'],
  },
});
