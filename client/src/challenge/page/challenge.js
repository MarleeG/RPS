import React from "react";
import PageTemplate from "../../UIElements/page-template";

import "./challenge.css";
import ChallengeCard from "../components/challenge-card";

// #e9ecef, #6c757d, #212529
let cardInfo = [
  {
    type: "easy",
    background: "#e9ecef",
    title: "THE NICE GUY",
    rules:
      "I'll play by the rules. You'll be able to play an unlimited amount of times.",
  },
  {
    type: "medium",
    background: "#990000",
    title: "THREAT",
    rules: "Best 2 out of 3. Good luck, you'll need it.",
  },
  {
    type: "hard",
    background: "#212529",
    title: "SUICIDE",
    color: "#fff",
    rules: "I don't play by the rules. I know your next move.",
  },
];

const Challenge = (props) => {
  return (
    <PageTemplate classes="center challenge-template-style">
      <div className="challenge__container">
        <strong>
          <h1 className="challenge__header font-amatic">Choose your battle</h1>
        </strong>


        <div className="challenge__card-wrapper">
          {cardInfo.map((info, i) => {
            return (
              <ChallengeCard
                key={i}
                background={info.background}
                title={info.title}
                rules={info.rules}
                type={info.type}
                color={info.color || undefined}
              />
            );
          })}



        </div>
      </div>
    </PageTemplate>
  );
};

export default Challenge;
