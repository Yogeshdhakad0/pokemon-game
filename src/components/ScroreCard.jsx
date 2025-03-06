import React, { useContext } from "react";
import Pokecontext from "./context/Pokecontext";

const ScroreCard = () => {
  const {Chances,score}=useContext(Pokecontext)
  return (
    <div className="flex items-center justify-between w-full">
      <h1 className="text-white font-semibold text-lg">Your Score : {score}</h1>
      <h1 className="text-white font-semibold text-lg">Chances : {Chances}</h1>
    </div>
  );
};

export default ScroreCard;
