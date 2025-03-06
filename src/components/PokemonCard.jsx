import React, { useContext, useState} from "react";
import ScroreCard from "./ScroreCard";
import Form from "./Form";
import Pokecontext from "./context/Pokecontext";
import { FactPoke } from "./context/Pokeserives";
import { useEffect } from "react";


import { useWindowSize } from 'react-use'
import Confetti from 'react-confetti'


const PokemonCard = () => {
  const { width, height } = useWindowSize()

  const{ dispatch,pokemon,Chances ,score,blur}=useContext(Pokecontext)
  console.log(pokemon)

  const [winner, setWinner]=useState(false)

const  getpoke = async()=>{
  const  rendom= Math.floor(Math.random()*100)
  const data = await FactPoke(rendom);
  dispatch({type:'ADD_POKEMON',payload:data})



}

useEffect(() => {
  getpoke()
  if(Chances===0){
    window.alert('your loss')
    window.location.reload()
  }
  if(score === 100){
    setWinner(true)
  }
  if(winner){
    setTimeout(() => {
      window.location.reload()
    }, 10000);
  }
}, [Chances ,score , winner])


if(!pokemon){
 
  return (
    <h1 className="text-center text-gray-400 font-bold text-2xl"> ...loading</h1>
  )
}
 if(winner){
 return(
  <>
  <div className="p-12 rounded-md border my-4 flex items-center justify-center flex-col space-y-12">
   <h1 className="text-center text-gray-400 font-bold text-2xl">
     Guess That Pokemon?
   </h1>
   <Confetti
width={width}
height={height}/>
   
   </div>
</>
 )
 }





  return (
    <div className="p-12 rounded-md border my-4 flex items-center justify-center flex-col space-y-12">
      <h1 className="text-center text-gray-400 font-bold text-2xl">
        Guess That Pokemon?
      </h1>
      <img
        className={
          blur ?"h-52 blur-sm":"h-52 "
        }

        src={pokemon.imge}
        alt=""
      />
      <ScroreCard />
      <Form />
    
    </div>
  );
};

export default PokemonCard;
