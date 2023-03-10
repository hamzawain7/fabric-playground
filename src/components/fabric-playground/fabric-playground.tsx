import React, {useEffect, useRef} from 'react';
import * as fabric from '../../library/fabric/index';
import styles from './fabric-playground.module.scss';
import './fabric-playground.scss';
import {EditingOptions} from '../editing-options';
import $ from 'jquery';

export interface FabricPlaygroundProps {
}

export function FabricPlayground({}: FabricPlaygroundProps) {
  const canvasEl = useRef<HTMLCanvasElement>(null);
  useEffect(() => {
    const html = `<canvas id='fabric-canvas' width='400' height='500'/>`;
    $('#canvas-container').append(html);

    const canvas = new fabric.Canvas('fabric-canvas', {
      // backgroundColor: '#ffffff'
    });
    window.fabricCanvas = canvas;

    const rect = new fabric.Rect({
      left: 100,
      top: 50,
      fill: '#D81B60',
      width: 50,
      height: 50,
      strokeWidth: 2,
      stroke: '#880E4F',
      rx: 10,
      ry: 10,
      angle: 45,
      scaleX: 3,
      scaleY: 3,
      hasControls: true,
    });
    canvas.add(rect);

    return () => {
      $('#canvas-container').empty();
      canvas.dispose();
      window.fabricCanvas = null;
    };
  }, []);

  // return <div/>;
  return <div className={styles.container}>
    <div id={'canvas-container'} className={styles.canvasContainer}>
    </div>
    <EditingOptions />
  </div>;
}
