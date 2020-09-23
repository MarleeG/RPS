import React, { useState, useEffect, useCallback } from "react";
import { useParams, Link } from "react-router-dom";
import PageTemplate from "../../UIElements/page-template";
import { cardInfo } from "../../challenge/data/cardInfo";
import {
  getWeaponsData,
  getAvatarData,
  getTwoPlayers,
  // GameData,
} from "../components/getImageData";

import "./battle.css";
import Button from "../../UIElements/Button";
import Modal from "../../UIElements/Modal";
import Backdrop from "../../UIElements/Backdrop";

const log = console.log;
const Battle = () => {
  const { battleTypeParam } = useParams();
  const [fallbackHeader, setFallbackHeader] = useState();
  const [instructions, setInstructions] = useState("");
  const [showModal, setShowModal] = useState(true);
  const [showBackdrop, setShowBackdrop] = useState(true);

  const [animateRock, setAnimateRock] = useState("");
  const [animatePaper, setAnimatePaper] = useState("");
  const [animateScissors, setAnimateScissors] = useState("");

  const [avatarPlayers, setAvatarPlayers] = useState([]);

  const [playerOneClasses, setPlayerOneClasses] = useState([
    "battle__player-one",
  ]);

  const [playerTwoClasses, setPlayerTwoClasses] = useState([
    "battle__player-two",
  ]);

  const [gameData, updateGameData] = useState([
    { player_footer_text: "YOU" },
    { player_footer_text: "BOT" },
  ]);

  const [weaponChoosen, setWeaponChoosen] = useState("");

  // const [rpsData, updateRPSData] = useState([]);

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

  const setPlayerTurn = (player) => {
    let randomNum = player || Math.floor(Math.random() * 2);

    log(`PLAYER ${randomNum + 1}'s turn`);

    // if backdrop is not displayed...
    if (!showBackdrop) {
      let updated_footer = gameData;;

      // if the random number (randomNum) is 0 then it's user's turn
      if (randomNum === 0) {
        // updated_footer = gameData;

        updated_footer[0].player_footer_text = "YOUR TURN";
        updated_footer[1].player_footer_text = "BOT";



        if (!player) {
          // disable the 2nd player
          setPlayerTwoClasses([
            "battle__player-two",
            "battle__player-backdrop",
          ]);
          setPlayerOneClasses(["battle__player-one"]);
          log(`player defined: ${player}`);
          log("disabling player 2. enabling player 1. - a");
        }

        // if the random number (randomNum) is 1 then it's bot's turn
      } else if (randomNum === 1) {
        // let updated_footer_p2 = gameData;

        updated_footer[1].player_footer_text = "BOT'S TURN";
        updated_footer[0].player_footer_text = "YOU";


        // disable the 1st player
        if (!player) {
          setPlayerOneClasses([
            "battle__player-one",
            "battle__player-backdrop",
          ]);

          setPlayerTwoClasses(["battle__player-two"]);
          log(`player defined: ${player}`);
          log("disabling player 1. enabling player 2 -b");
        }
      }

      updateGameData(updated_footer);

    }
  };

  const updateWeaponChoosenByUser = (weapon) => {
    console.log(`weapon: ${weapon}`);
    setWeaponChoosen(weapon);

    if(weapon){
      if (playerOneClasses.length === 2 && playerTwoClasses.length === 1) {
        // remove the class battle__player-backdrop for player 1
        setPlayerOneClasses(["battle__player-one"]);
        setPlayerTurn(0);
  
        // add class battle__player-backdrop for player 2
        setPlayerTwoClasses(["battle__player-two", "battle__player-backdrop"]);
  
        log("disabling player 2. enable player 1 - c");
      } else if (playerTwoClasses.length === 2 && playerOneClasses.length === 1) {
        // playerTwoClasses has a length of 2
        // enable player 2
  
        setPlayerTwoClasses(["battle__player-two"]);
        setPlayerTurn(1);
  
        // add class battle__player-backdrop for player 2
        setPlayerOneClasses(["battle__player-one", "battle__player-backdrop"]);
        log("disabling player 1. enable player 2 - d");
      }
    }
  };

  const hideModal = () => {
    setShowModal(false);
    setShowBackdrop(false);
  };

  const animateIcon = (icon, active) => {
    if (active) {
      if (icon === "rock") {
        setAnimateRock("headShake");
      } else if (icon === "paper") {
        setAnimatePaper("headShake");
      } else {
        setAnimateScissors("headShake");
      }
    } else {
      setAnimateRock("");
      setAnimatePaper("");
      setAnimateScissors("");
    }
  };

  const renderWeaponOptions = (image, key) => {
    const content = (
      <div
        key={key}
        className={`battle__weapon`}
        onClick={() => updateWeaponChoosenByUser(image.alt)}
      >
        {image.alt === "rock" && (
          <img
            src={image.src}
            alt={image.alt}
            className={`battle__weapon-img animate__animated animate__${animateRock} battle__img-${image.alt}`}
            onMouseEnter={() => animateIcon(image.alt, true)}
            onMouseLeave={() => animateIcon(image.alt, false)}
          />
        )}

        {image.alt === "paper" && (
          <img
            src={image.src}
            alt={image.alt}
            className={`battle__weapon-img animate__animated animate__${animatePaper} battle__img-${image.alt}`}
            onMouseEnter={() => animateIcon(image.alt, true)}
            onMouseLeave={() => animateIcon(image.alt, false)}
          />
        )}

        {image.alt === "scissors" && (
          <img
            src={image.src}
            alt={image.alt}
            className={`battle__weapon-img animate__animated animate__${animateScissors} battle__img-${image.alt}`}
            onMouseEnter={() => animateIcon(image.alt, true)}
            onMouseLeave={() => animateIcon(image.alt, false)}
          />
        )}

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
          {/* Player One */}
          <div className={playerOneClasses.join(" ")}>
            {avatarPlayers.length > 0 && (
              <div>
                <h4 className="font-amatic">{avatarPlayers[0].name}</h4>
                <img src={avatarPlayers[0].src} alt={avatarPlayers[0].alt} />
              </div>
            )}

            <p className="battle__player-one-footer">
              {/* {GameData()[0].player_footer_text} */}
              {gameData[0].player_footer_text}
            </p>
          </div>

          {/* Weapons */}
          <div className="battle__options">
            {getWeaponsData().map((image, key) => {
              return renderWeaponOptions(image, key);
            })}
          </div>

          {/* Player Two */}
          <div className={playerTwoClasses.join(" ")}>
            {avatarPlayers.length > 0 ? (
              <div>
                <h4 className="font-amatic">{avatarPlayers[1].name}</h4>

                <img src={avatarPlayers[1].src} alt={avatarPlayers[1].alt} />
              </div>
            ) : null}

            <p className="battle__player-one-footer">
              {gameData[1].player_footer_text}
            </p>
          </div>
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

    setAvatarPlayers(getTwoPlayers(getAvatarData()));

    // updateRPSData(GameData())

    if (!showBackdrop && !showModal) {
      setPlayerTurn();
    }
  }, [setFallbackHeader, getAcceptableBattleType, showBackdrop, showModal]);

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
