import React, { useState, useEffect } from "react";
import "./App.css";
import { getAllPokemon, getEachPokemonUrl } from "./services/Pokemon";
import Card from "./components/Card/Card";
import Navbar from "./components/Navbar/Navbar";

function App() {
  const [pokemonData, setPokemonData] = useState([]);
  const [ nextUrl, setNextUrl ] = useState("");
  const [ prevUrl, setPrevUrl ] = useState("");
  const [ loading, setLoading ] = useState(true);
  const initialUrl = "https://pokeapi.co/api/v2/pokemon";

  useEffect(()=>{
      //Fetch all pokemons data from the pokemon endpoint
      async function getAllPokemonData(){
        let response = await getAllPokemon(initialUrl);
        setNextUrl(response.next);
        setPrevUrl(response.previous);
        await getEachPokemon(response.results);
        setLoading(false);
      }
      //The above function call
      getAllPokemonData();
  }, []);

  const next = async () =>{
      setLoading(true);
      let data = await getAllPokemon(nextUrl);
      await getEachPokemon(data.results);
      setNextUrl(data.next);
      setPrevUrl(data.previous);
      setLoading(false);
  }

  const previous = async () =>{
    if(!prevUrl){
      alert("No previous pokemons");
    }else{
      setLoading(true);
      let data = await getAllPokemon(prevUrl);
      await getEachPokemon(data.results);
      setNextUrl(data.next);
      setPrevUrl(data.previous);
      setLoading(false);
    }
}

  //This is use to get individual pokemon from the url in the general pokemons api
  const getEachPokemon = async (pokemons) => {
        const pokemonsDetails = await Promise.all(
          pokemons.map( async pokemon => {
          let eachPokemonDetails = await getEachPokemonUrl(pokemon.url); 
          return eachPokemonDetails;
          })
        )
        setPokemonData(pokemonsDetails);
  };
console.log(pokemonData);
  return (
    <div>
      { 
        loading ? <h1>Loading...</h1>: (
        <>
          <Navbar />
          <div className="btn">
            <button onClick={previous}>Previous</button>
            <button onClick={next} style={{marginLeft:"2em"}}>Next</button>
          </div>
          <div className="pokemon-container">
            {pokemonData.map((pokemon, i) => {
              return <Card key= {i} pokemon= {pokemon} />
            })}
          </div>
        </>
        )
      }
    <p>
     <a href="https://online.visualstudio.com/environments/new?name=My%20Project&repo=username/reponame /">
    <img src="https://img.shields.io/endpoint?style=social&url=https%3A%2F%2Faka.ms%2Fvso-badge" alt="pokemon" />
     </a>
   </p>
    </div>
  )
}
export default App;
