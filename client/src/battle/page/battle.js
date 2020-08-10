import React, { useState, useEffect, useCallback } from "react";
import { useParams } from "react-router-dom";
import PageTemplate from "../../UIElements/page-template";
import { cardInfo } from "../../challenge/data/cardInfo";

import "./battle.css";
import Button from "../../UIElements/Button";
import Modal from "../../UIElements/Modal";
import Backdrop from "../../UIElements/Backdrop";

const Battle = () => {
  const { battleTypeParam } = useParams();
  const [fallbackHeader, setFallbackHeader] = useState();
  const [instructions, setInstructions] = useState("");
  const [showModal, setShowModal] = useState(true);
  const [showBackdrop, setShowBackdrop] = useState(true);

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
      } else {
        // set the battle instructions
        const battleInstructions = arrayData.find(
          (battle) => battle.type === battleTypeParam
        );
        setInstructions(battleInstructions.clear_instructions);
      }
    },
    [battleTypeParam]
  );

  const hideModal = () => {
    setShowModal(false);
    setShowBackdrop(false);
  };

  const battleContent = () => {
    const content = (
      <div className="battle__content">
        <Backdrop
          classes="animate__animated animate__fadeIn"
          showBackdrop={showBackdrop}
          // hideModal={() => hideModal()}
        >
          <Modal
            show={showModal}
            classes="center animate__animated animate__backInDown font-amatic"
            header="Instructions"
            text={instructions}
            hideModal={() => hideModal()}
          />
        </Backdrop>
      </div>
    );

    return content;
  };

  useEffect(() => {
    getAcceptableBattleType(cardInfo);
  }, [setFallbackHeader, getAcceptableBattleType]);

  return (
    <PageTemplate classes="center battle-template-style">
      <div className="battle__container">
        <h1 className="font-amatic battle__header">
          {fallbackHeader || battleTypeParam}
        </h1>

        {fallbackHeader ? (
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
        ) : (
          battleContent()
        )}
      </div>
    </PageTemplate>
  );
};

export default Battle;
