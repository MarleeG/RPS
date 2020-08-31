import Paper from "../assets/images/weapons/img-paper.png";
import Rock from "../assets/images/weapons/img-rock.png";
import Scissors from "../assets/images/weapons/img-scissors.png";

// import Dragon from "../assets/images/avatars/img-dragon.png";
// import Jaguar from "../assets/images/avatars/img-black-jaguar.png";
// import Skull from "../assets/images/avatars/img-skull.png";
// import Virus from "../assets/images/avatars/img-virus.png";


import BlackBird from '../assets/images/avatars/img-blk-bird.png';
import BlackCat from '../assets/images/avatars/img-blk-cat.png'; 
import BlackChick from '../assets/images/avatars/img-blk-chick.png';
import BlackRat from '../assets/images/avatars/img-blk-rat.png';
import RedBird from '../assets/images/avatars/img-red-bird.png';
import RedCat from '../assets/images/avatars/img-red-cat.png';
import RedChick from '../assets/images/avatars/img-red-chick.png';
import RedRat from '../assets/images/avatars/img-red-rat.png';



export const getWeaponsData = () => {
  const weaponImages = [
    { src: Rock, alt: "rock", name: "Rock" },
    { src: Paper, alt: "paper", name: "Paper" },
    { src: Scissors, alt: "scissor", name: "Scissors" },
  ];

  return weaponImages;
};

export const getAvatarData = () => {
  // const avatarImageData = [
  //   { src: Dragon, alt: "dragon", name: "Dragon" },
  //   { src: Jaguar, alt: "jaguar", name: "Jaguar" },
  //   { src: Skull, alt: "skull", name: "Skull" },
  //   { src: Virus, alt: "virus", name: "Virus" },
  // ];


  const avatarImageData = [
    { src: BlackBird, alt: "black bird", name: "Black Bird" },
    { src: RedBird, alt: "red bird", name: "Red Bird" },
    { src: BlackCat, alt: "black cat", name: "Black Cat" },
    { src: RedCat, alt: "red cat", name: "Red Cat" },
    { src: BlackChick, alt: "black chick", name: "Black Chick" },
    
    { src: RedChick, alt: "RedChick", name: "Red Chick" },
    { src: BlackRat, alt: "black rat", name: "BlackRat" },
    { src: RedRat, alt: "red rat", name: "Red Rat" },
  ];



  return avatarImageData;
};
