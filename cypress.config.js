import { defineConfig } from "cypress";
import { installPlugin } from '@chromatic-com/cypress'  

export default defineConfig({
  e2e: {
    setupNodeEvents(on, config) {
      // implement node event listeners here
      installPlugin(on, config);
    },
  },
});
