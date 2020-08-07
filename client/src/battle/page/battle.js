import React, { useState, useEffect, useCallback } from "react";
import { useParams } from "react-router-dom";
import PageTemplate from "../../UIElements/page-template";
import { cardInfo } from "../../challenge/data/cardInfo";

import "./battle.css";
import Button from "../../UIElements/Button";

const Battle = () => {
  const { battleTypeParam } = useParams();
  const [fallbackHeader, setFallbackHeader] = useState();

  const getAcceptableBattleType = useCallback(
    (arrayData) => {
      let battleTypes = [];

      for (let i = 0; i < arrayData.length; i++) {
        battleTypes.push(arrayData[i].type);
      }

      if (
        battleTypes.indexOf(battleTypeParam) === -1 &&
        battleTypes.length > 0
      ) {
        setFallbackHeader("Choose a valid battle");
      }
    },
    [battleTypeParam]
  );

  useEffect(() => {
    getAcceptableBattleType(cardInfo);
  }, [setFallbackHeader, getAcceptableBattleType]);

  return (
    <PageTemplate classes="center battle-template-style">
      <div className="battle__container">
        <h1 className="font-amatic battle__header">
          {fallbackHeader || battleTypeParam}
        </h1>

        {fallbackHeader && (
          <div className="battle__fallback_content">
            {/* <Button
              text="Choose Battle"
              path="/challenges"
              classes="font-amatic battle__fallback_content-btn center animate__animated"
              type="button"
            /> */}

            <Button
              text="Choose Battle"
              path="/challenges"
              classes="font-amatic battle__fallback_content-btn button--bop center"
              type="button"
            />
          </div>
        )}
      </div>
    </PageTemplate>
  );
};

export default Battle;
