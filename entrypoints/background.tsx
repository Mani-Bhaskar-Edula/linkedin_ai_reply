import React from 'react';
import ReactDOM from 'react-dom';

export default defineBackground({
    main() {
        chrome.runtime.onInstalled.addListener(() => {
            const data = { version: chrome.runtime.getManifest().version };
            console.log('Extension installed or updated:', data.version);
        });
    },
  });