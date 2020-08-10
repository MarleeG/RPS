import React, { Fragment, useEffect, useState, useCallback } from "react";
import { Link } from "react-router-dom";

import "./Button.css";

const log = console.log;
const Button = (props) => {
  const [isAnimated, setIsAnimated] = useState(false);
  const [classes, setClasses] = useState(props.classes);

  const checkButtonAnimation = useCallback(() => {
    const class_arr = props.classes.split(" ");

    const animateOption = class_arr.indexOf("animate__animated");

    if (animateOption > -1) {
      setIsAnimated(true);
    } else {
      setIsAnimated(false);
    }

    log(`animateOption:: ${animateOption}`);
  }, [props.classes]);

  useEffect(() => {
    checkButtonAnimation();
  }, [checkButtonAnimation, isAnimated]);

  return (
    <Fragment>
      {props.path ? (
        <Link to={props.path}>
          <button
            type={props.type}
            className={classes || "button-default"}
            onMouseEnter={() => {
              if (isAnimated) {
                setClasses(`${props.classes} animate__shakeX`);
              } else {
                setClasses(props.classes);
              }
            }}
            onMouseLeave={() => setClasses(props.classes)}
            onClick={() => {
              if (props.onClick) {
                props.onClick();
              }
            }}
          >
            {props.text}
          </button>
        </Link>
      ) : (
        // without a path for the btn
        <button
          type={props.type}
          className={classes || "button-default"}
          onMouseEnter={() => {
            if (isAnimated) {
              setClasses(`${props.classes} animate__shakeX`);
            } else {
              setClasses(props.classes);
            }
          }}
          onMouseLeave={() => setClasses(props.classes)}
          onClick={() => {
            if (props.onClick) {
              props.onClick();
            }
          }}
        >
          {props.text}
        </button>
      )}
    </Fragment>
  );
};

export default Button;
