import * as fabric from './library/fabric/index';
export {};

declare global {
  interface Window {
    fabricCanvas: fabric.Canvas;
  }
}
