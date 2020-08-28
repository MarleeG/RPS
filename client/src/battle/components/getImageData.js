import Paper from "../assets/images/weapons/img-paper.png";
import Rock from "../assets/images/weapons/img-rock.png";
import Scissors from "../assets/images/weapons/img-scissors.png";

import Dragon from "../assets/images/avatars/img-dragon.png";
import Jaguar from "../assets/images/avatars/img-black-jaguar.png";
import Skull from "../assets/images/avatars/img-skull.png";
import Virus from "../assets/images/avatars/img-virus.png";

export const getWeaponsData = () => {
  const weaponImages = [
    { src: Rock, alt: "rock", name: "Rock" },
    { src: Paper, alt: "paper", name: "Paper" },
    { src: Scissors, alt: "scissor", name: "Scissors" },
  ];

  return weaponImages;
};

export const getAvatarData = () => {
  const avatarImageData = [
    { src: Dragon, alt: "dragon", name: "Dragon" },
    { src: Jaguar, alt: "jaguar", name: "Jaguar" },
    { src: Skull, alt: "skull", name: "Skull" },
    { src: Virus, alt: "virus", name: "Virus" },
  ];

  return avatarImageData;
};
