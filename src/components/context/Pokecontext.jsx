import { createContext, useReducer } from "react";
import { Pokereduscer } from "./Pokereduser";

const Pokecontext=createContext();


export const Pokeprovider=({children})=>{


const initiaistate={

    pokemon:null,
    Chances:3,
    score:0,
    blur: true
}


const [state,dispatch]=useReducer(Pokereduscer,initiaistate)


    return <Pokecontext.Provider value={{...state, dispatch}}>

        {children}
    </Pokecontext.Provider>
}



export  default Pokecontext
























