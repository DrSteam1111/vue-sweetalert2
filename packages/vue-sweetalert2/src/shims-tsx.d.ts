import {VNode, VueElement} from 'vue';

declare global {
  namespace JSX {
    // tslint:disable no-empty-interface
    interface Element extends VNode {}
    // tslint:disable no-empty-interface
    interface ElementClass extends VueElement {}
    interface IntrinsicElements {
      [elem: string]: any;
    }
  }
}
