import React from 'react'
import "./Card.css";

function Card({ pokemon }) {
    return (
        <div className="pokemon-card">
            <div className="pokemon-img">
                <img src={pokemon.sprites.front_default} alt="" />
            </div>
            <div className="pokemon-name">
                {pokemon.name}
            </div>
            <div className="pokemon-types">
                {pokemon.types.map(type => {
                    return(
                        <div className="pokemon-type">
                            {type.type.name}
                        </div>
                    )
                })}
            </div>
            <div className="pokemon-info">
                <div className="pokemon-data pokemon-weight">
                    <p className="pokemon-title">Weight</p>
                    <p>{pokemon.weight}</p>
                </div>
                <div className="pokemon-data pokemon-height"> 
                    <p className="pokemon-title">Height</p>
                    <p>{pokemon.height}</p>
                </div>
                <div className="pokemon-data pokemon-ability">
                    <p className="pokemon-title">Ability</p>
                    <p>{pokemon.abilities[0].ability.name}</p>
                </div>
            </div>
        </div>
    )
}

export default Card;
