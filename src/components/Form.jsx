import React, { useContext, useState } from "react";
import Pokecontext from "./context/Pokecontext";
import { FactPoke } from "./context/Pokeserives";

const Form = () => {
const {pokemon,dispatch}=useContext(Pokecontext)

  const [text,settext]=useState()



const  getpoke = async()=>{
  const  rendom= Math.floor(Math.random()*100)
  const data = await FactPoke(rendom);
  dispatch({type:'ADD_POKEMON',payload:data})



}








const headar=(e)=>{

e.preventDefault();


if(text.toLowerCase()===pokemon.name){
  dispatch({type:"Incerent"})
   setTimeout(() => {
    getpoke()
   }, 500);
}
else{
  dispatch({type:"decerent"})
}

settext('')


}



  return (
    <form className="my-2 w-full" onSubmit={headar}>
      <input
        type="text"
        placeholder="Your Answer"
        className="focus:outline-none bg-white p-2 rounded-md placeholder:text-lg w-full"
        onChange={(e)=> settext(e.target.value)}
        value={text}
      />
      <button className="hover:bg-green-600 duration-200 cursor-pointer bg-green-500 py-2 px-6 rounded-md w-full my-2 font-bold text-white">
        Submit
      </button>
    </form>
  );
};

export default Form;
