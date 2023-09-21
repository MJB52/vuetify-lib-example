import * as components from './components';
import type { App } from 'vue';

export default {
  install: (app: App) => {
    Object.entries(components).forEach(([componentName, component]) => {
      console.debug(componentName);
      app.component(componentName, component);
    });
  }
};

export { StandardDialog, StandardSelect } from './components';
