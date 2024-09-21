export default defineContentScript({
    matches: ['*://google.com/*'],
    cssInjectionMode: 'manual',
  
    main(ctx: ContentScriptContext) {
      console.log('Content script is running on Google!');
      
    },
  });
  