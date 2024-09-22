import React from 'react';
import { createRoot } from 'react-dom/client';

export default defineContentScript({
    matches: ['*://google.com/*', '*://www.linkedin.com/*'],
    cssInjectionMode: 'manual',

    main() {
        
    },
});
