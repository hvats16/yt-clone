import React from "react";
import { Button } from "./Button";

export const ButtonList = () => {
  const buttonNames = [
    "All",
    "Music",
    "Cricket",
    "Kapil Sharma",
    "Valorante",
    "CSGO",
    "Football",
    "Hockey",
    "WWE",
  ];
  return (
    <div>
      <Button buttonNames={buttonNames} />
    </div>
  );
};
