import { ComponentType } from 'react';

declare module '*.tsx' {
  const component: ComponentType<any>;
  export default component;
}