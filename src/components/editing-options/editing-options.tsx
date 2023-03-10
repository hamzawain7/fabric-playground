import React from 'react';
import styles from './editing-options.module.scss';

interface EditingOptionsProps {
// add props here
}

const LOCAL_STORAGE_KEY = 'canvas_object';

export function EditingOptions(
  {
    ...props
  }: EditingOptionsProps) {

  const posterToObject = () => {
    console.log(window.fabricCanvas.toJSON());
  };
  const posterFromObject = async () => {
    const posterObjectFromLocalStorage = localStorage.getItem(LOCAL_STORAGE_KEY);
    if (posterObjectFromLocalStorage) {
      console.log(posterObjectFromLocalStorage);
      await window.fabricCanvas.loadFromJSON(posterObjectFromLocalStorage);
      window.fabricCanvas.renderAll();
    }
  };
  const posterSaveObject = () => {
    localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(window.fabricCanvas.toJSON()));
  };

  return <ul className={styles.buttons}>
    <button onClick={posterToObject}>Console Object</button>
    <button onClick={posterFromObject}>From Object</button>
    <button onClick={posterSaveObject}>Save Object</button>
  </ul>;
};
