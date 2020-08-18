import React, { useState, useEffect, useCallback } from "react";
import { useParams, Link } from "react-router-dom";
import PageTemplate from "../../UIElements/page-template";
import { cardInfo } from "../../challenge/data/cardInfo";
import { getWeaponsData } from "../components/getWeaponsData";

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

  const renderWeaponOptions = (image, key) => {
    const content = (
      <div key={key} className="battle__weapon">
        <a href="https://www.vecteezy.com/vector-art/691489-retro-offset-rock-paper-scissors-icons" className="battle__vecteezy-attr-link">
          <img src={image.src} alt={image.alt} className="battle__weapon-img" />
        </a>

        <h5 className="font-amatic">{image.name}</h5>
      </div>
    );

    return content;
  };

  const gameGrid = () => {
    const content = (
      <div className="battle__grid">
        {/* User selections and scores */}
        <div className="battle__user-selection-parent">
          <div className="battle__user-selection">
            {/* User Selection */}
            <div className="battle__user-selection-one">
              User Selection Display here
            </div>

            <div className="battle__user-selection-two battle__user-selection">
              Bot Selection Display Here
            </div>
          </div>

          {/* Score */}
          <div className="battle__score">
            <div className="battle__score-one battle__score">
              User Battle Score One
            </div>
            <div className="battle__score-two battle__score">
              Bot Battle Score Two
            </div>
          </div>
        </div>

        {/* player avatars and user options */}
        <div className="battle__player-and-options">
          <div className="battle__player-one">AVATAR</div>
          <div className="battle__options">
            {getWeaponsData().map((image, key) => {
              return renderWeaponOptions(image, key);
            })}
          </div>
          <div className="battle__player-two">AVATAR</div>
        </div>
      </div>
    );

    return content;
  };

  const battleContent = () => {
    const content = (
      <div className="battle__content">
        <Backdrop
          classes="animate__animated animate__fadeIn"
          showBackdrop={showBackdrop}
        >
          <Modal
            show={showModal}
            classes="center animate__animated animate__backInDown font-amatic"
            header="Instructions"
            text={instructions}
            hideModal={() => hideModal()}
          />
        </Backdrop>
        {gameGrid()}
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
