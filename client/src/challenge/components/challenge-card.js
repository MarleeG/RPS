import React, { useState } from "react";
import { Link } from "react-router-dom";

import "./challenge-card.css";

const ChallengeCard = (props) => {
  const [animate, setAnimate] = useState("");

  return (
    <Link to={`/challenges/${props.type}`}>
      <div
        className={`card__container font-amatic box-shadow animate__animated ${animate}`}
        style={{
          background: props.background || "#fff",
          color: props.color || "#212529",
        }}
        onMouseEnter={() => setAnimate("animate__shakeX")}
        onMouseLeave={() => setAnimate("")}
      >
        <h3 className="card__header">{props.title}</h3>

        <hr style={{ background: props.color || "#212529" }} />

        <p className="card__rules">{props.rules}</p>
      </div>
    </Link>
  );
};

export default ChallengeCard;
