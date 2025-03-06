
export  const FactPoke= async(rendom)=>{
console.log(rendom)
    const response= await fetch(`https://pokeapi.co/api/v2/pokemon/${rendom}`)
    const  data= await  response.json()
    console.log(data)


    const imge= data.sprites.other.dream_world.front_default
    const name= data.name;

return {imge,name}



}