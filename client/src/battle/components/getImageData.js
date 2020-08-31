import {useCallback} from 'react';
import { uniqueNamesGenerator, names, colors } from 'unique-names-generator';

import Paper from "../assets/images/weapons/img-paper.png";
import Rock from "../assets/images/weapons/img-rock.png";
import Scissors from "../assets/images/weapons/img-scissors.png";



// Avatars
import BlackBird from '../assets/images/avatars/img-blk-bird.png';
import BlackCat from '../assets/images/avatars/img-blk-cat.png'; 
import BlackChick from '../assets/images/avatars/img-blk-chick.png';
import BlackRat from '../assets/images/avatars/img-blk-rat.png';
import RedBird from '../assets/images/avatars/img-red-bird.png';
import RedCat from '../assets/images/avatars/img-red-cat.png';
import RedChick from '../assets/images/avatars/img-red-chick.png';
import RedRat from '../assets/images/avatars/img-red-rat.png';


const config = {
  dictionaries: [names, colors],
  length: 2,
  separator: ' '
}

export const getWeaponsData = () => {
  const weaponImages = [
    { src: Rock, alt: "rock", name: "Rock" },
    { src: Paper, alt: "paper", name: "Paper" },
    { src: Scissors, alt: "scissor", name: "Scissors" },
  ];

  return weaponImages;
};

export const getAvatarData = () => {
  let avatarImageData = [
    { src: BlackBird, alt: "black bird", name: '' },
    { src: RedBird, alt: "red bird", name: '' },
    { src: BlackCat, alt: "black cat", name: '' },
    { src: RedCat, alt: "red cat", name: '' },
    { src: BlackChick, alt: "black chick", name: '' },
    { src: RedChick, alt: "RedChick", name: '' },
    { src: BlackRat, alt: "black rat", name: '' },
    { src: RedRat, alt: "red rat", name: '' },
  ];

  avatarImageData.map((obj, i) => {
    obj.name = uniqueNamesGenerator(config);
  });

  return avatarImageData;
};
