import { defineConfig } from 'wxt';

export default defineConfig({
    modules: ['@wxt-dev/module-react'],
    manifest: {
        background: {
            service_worker: '/background.tsx',
        },
        permissions: [
            "activeTab",
        ],
        host_permissions: [
            "*://www.linkedin.com/*",
            "*://*.google.com/*"
        ],
        action: {
            default_icon: {
                16: '/icon16.png',
                32: '/icon32.png',
            },
        },
        "web_accessible_resources": [
    {
      "matches": ["*://*.google.com/*","*://www.linkedin.com/*"],
      "resources": ["icon/*.png"]
    }
  ]
      },
});