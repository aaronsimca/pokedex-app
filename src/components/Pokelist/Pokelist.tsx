import React from "react";
import './Pokelist.css';
import Pokecard from '../Pokecard/Pokecard';
import { PokemonSchema } from "../../types/PokemonSchema";

interface PokelistProps {
    searchedPokemons: PokemonSchema[];
    onPokemonClick: (pokemonName: string) => void;
}

const Pokelist = ({ searchedPokemons, onPokemonClick }: PokelistProps) => {
    return (
        <div className="pokelist">
            {
                searchedPokemons.map((pokemon) => {
                    return (
                        pokemon.name && (
                            <Pokecard
                                onPokemonClick={onPokemonClick}
                                key={pokemon.id}
                                name={pokemon.name}
                                spriteUrl={pokemon.sprites.normal}
                            />
                        )
                    );
                })}
        </div>
    );
};

export default Pokelist;