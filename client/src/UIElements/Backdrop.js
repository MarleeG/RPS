import React, { useState, useEffect } from "react";
import ReactDOM from "react-dom";

import "./Backdrop.css";

const log = console.log;
const Backdrop = (props) => {
  const [backdropDisplay, setBackdropDisplay] = useState("block");

  // log(props.showBackdrop);

  useEffect(() => {
    if (props.showBackdrop) {
      // show backdrop
     setBackdropDisplay("block");
    } else {
      // hide backdrop
     setBackdropDisplay("none");
    }
  }, [props.showBackdrop]);
  const content = (
    <div
      className={`backdrop__container ${props.classes}`}
      onClick={props.hideModal}
      style={{ display: backdropDisplay }}
    >
      {props.children}
    </div>
  );

  return ReactDOM.createPortal(
    content,
    document.getElementById("backdrop-hook")
  );
};

export default Backdrop;