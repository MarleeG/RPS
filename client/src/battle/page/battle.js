import React from "react";
import { useParams } from "react-router-dom";
import PageTemplate from "../../UIElements/page-template";

import "./battle.css";

const Battle = () => {
  const { battleType } = useParams();
  return (
    <PageTemplate classes="center battle-template-style">
      <div className="battle__container">
        <h1 className="font-amatic">Battle - {battleType}</h1>
      </div>
    </PageTemplate>
  );
};

export default Battle;
