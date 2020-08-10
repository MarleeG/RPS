import React, { Fragment } from "react";
import { CSSTransition } from "react-transition-group";
import ReactDOM from "react-dom";
import Button from '../UIElements/Button';

import "./Modal.css";

const ModalOverlay = (props) => {
  const content = (
    <div className={`modal__container ${props.classes}`}>
        <span onClick={props.hideModal}>X</span>
      <h1>{props.header}</h1>
      <p>{props.text}</p>
      <Button text="play" classes="font-amatic modal__btn button--bop" onClick={props.hideModal} />
    </div>
  );

  return ReactDOM.createPortal(content, document.getElementById("modal-hook"));
};

const Modal = (props) => {
  return (
    <Fragment>
      <CSSTransition
        in={props.show}
        mountOnEnter
        unmountOnExit
        timeout={200}
        classNames="modal"
      >
        <ModalOverlay {...props} />
      </CSSTransition>
    </Fragment>
  );
};

export default Modal;
