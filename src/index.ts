import * as components from './components';
import type { App } from 'vue';

export const BastianTouchComponentLib = {
  install: (app: App) =>{
    Object.entries(components).forEach(([componentName, component]) => {
      console.debug(componentName);
      app.component(componentName, component);
    });
  }
};

export * as components from './components';
