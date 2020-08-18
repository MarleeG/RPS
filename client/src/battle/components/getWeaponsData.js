import Paper from "../assets/images/img-paper.png";
import Rock from "../assets/images/img-rock.png";

import Scissors from "../assets/images/img-scissors.png";

export const getWeaponsData = () => {
  const weaponImages = [
    { src: Rock, alt: "rock", name: "Rock" },
    { src: Paper, alt: "paper", name: "Paper" },
    { src: Scissors, alt: "scissor", name: "Scissors" },
  ];

  return weaponImages;
};
