import React from "react";

import "./home.css";
import PageTemplate from "../../UIElements/page-template";
import Button from "../../UIElements/Button";

const Home = () => {
  return (
    <PageTemplate classes="center home-template-style page-template-default-color">
      <div className="home__container">
        <div className="home_main-text">
          <h1 className="home__header font-amatic">RPS</h1>

          <strong>
            <h4 className="home__sub-header font-amatic">
              Rock Paper Scissors War
            </h4>
          </strong>
        </div>

        <Button
          text="BRAWL"
          type="text"
          classes="home-btn-style font-amatic button--bop"
          path="challenges"
        />
      </div>
    </PageTemplate>
  );
};

export default Home;
