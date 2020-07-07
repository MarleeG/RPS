import React from "react";

import "./page-template.css";
const PageTemplate = (props) => {
  return (
    <div
      className={`page-template__container ${props.classes || props.classes}`}
      style={props.styles && props.styles}
    >
      {props.children}
    </div>
  );
};

export default PageTemplate;
