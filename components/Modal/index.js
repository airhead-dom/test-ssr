import React from 'react';
import style from './style.module.css';

function Modal({ isOpen }) {
  return (
    <div className={`${style.modal} ${isOpen ? style.open : ''}`}>
      <p>Test</p>
      <p>MODAL</p>
    </div>
  );
}

export default Modal;
