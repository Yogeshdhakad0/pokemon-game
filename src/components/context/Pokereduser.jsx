
 export const Pokereduscer=(state,action)=>{

switch(action.type){

    case "ADD_POKEMON":

    return{
...state,blur: true,
pokemon:action.payload


    }


case 'Incerent':
    return{
        ...state,
        blur: false,
        score:state.score+1
    }
case 'decerent':
    return{
        ...state,
        Chances:state.Chances-1
    }





    default:
    return state
}


 }