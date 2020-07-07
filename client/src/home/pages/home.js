import React from "react";

import "./home.css";
import PageTemplate from "../../UIElements/page-template";
import Button from '../../UIElements/Button';

let templateStyle = {};
const Home = () => {
  return (
    <PageTemplate classes="center home-template-style">
      <div className="home__container">
        <div className="home_main-text">
          <h1 className="home__header font-sea">RPS</h1>
          <h4 className="home__sub-header font-elite">Rock Paper Scissors War</h4>
        </div>

        <Button text="BRAWL" type="text" classes="home-btn-style font-sea button--bop"/>


      </div>
    </PageTemplate>
  );
};

export default Home;
