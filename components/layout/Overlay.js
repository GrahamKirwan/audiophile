import React from 'react'
import { useEffect } from 'react';

import styles from '../layout/Overlay.module.scss'

export default function Overlay(props) {

    // Pause scrolling on body when overlay is showing
    useEffect(() => {
        if(props.show) {
            document.body.style.overflow = 'hidden';
        } else if (props.show == false) {
            document.body.style.overflow = 'unset';
        }
     }, [props.show]);

     function overlayClickHandler() {
         props.overlayClickHandler();
     }

  return (
    <div onClick={overlayClickHandler} className={styles.overlay} style={props.show ? {display: 'initial'} : {display: 'none'}}></div>
  )
}
