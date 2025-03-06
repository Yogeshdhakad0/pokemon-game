import React from "react";
import Navbar from "./components/Navbar";
import PokemonCard from "./components/PokemonCard";

const App = () => {
  return (
    <>
      <Navbar />
      <div className="min-h-screen bg-gray-800 p-10">
        <PokemonCard />
      </div>
    </>
  );
};

export default App;
