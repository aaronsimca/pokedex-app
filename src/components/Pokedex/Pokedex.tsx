import React from "react";
import './Pokedex.css';
import Searchbox from '../Searchbox/Searchbox';
import PokeSearchResult from '../PokeSearchResult/PokeSearchResult';
import Pokelist from "../Pokelist/Pokelist";
import { PokemonSchema } from "../../types/PokemonSchema";

interface PokedexProps {
    searchedPokemons: PokemonSchema[];
    selectedPokemon: PokemonSchema | undefined;
    onInputChange: (inputeValue: string) => void;
    onPokemonClick: (pokemonName: string) => void;
}

const Pokedex = ({
    searchedPokemons,
    selectedPokemon,
    onInputChange,
    onPokemonClick,
}: PokedexProps) => {
    return (
        <div className="pokedex-container">
            <div className="pokelist-container">
                <Searchbox onInputChange={onInputChange} />
                <Pokelist
                    onPokemonClick={onPokemonClick}
                    searchedPokemons={searchedPokemons}
                />

            </div>
            <div className="pokesearchresult-container">
                <PokeSearchResult selectedPokemon={selectedPokemon} />

            </div>
        </div>
    )
}

export default Pokedex;