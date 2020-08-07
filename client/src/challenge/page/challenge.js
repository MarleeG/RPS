import React from "react";
import PageTemplate from "../../UIElements/page-template";

import "./challenge.css";
import ChallengeCard from "../components/challenge-card";

import {cardInfo} from '../data/cardInfo';

const cardData = cardInfo;

const Challenge = (props) => {
  return (
    <PageTemplate classes="center challenge-template-style">
      <div className="challenge__container">
        <strong>
          <h1 className="challenge__header font-amatic">Choose your battle</h1>
        </strong>


        <div className="challenge__card-wrapper">
          {cardData.map((info, i) => {
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
