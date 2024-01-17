import { useState } from "react";
import Pokemon from "./Pokemon";

export default function App({ pokemons }) {
  const [selecionados, setSelecionados] = useState([]);

  function clicouCard(pokemon) {
    if (selecionados.length < 3 && !selecionados.includes(pokemon)) {
      let novoArrayPokemons = [...selecionados, pokemon];
      setSelecionados(novoArrayPokemons);
      console.log(novoArrayPokemons);
    } else if (selecionados.includes(pokemon)) {
      let novoArraySelecionados = selecionados.filter((p) => p != pokemon);
      setSelecionados(novoArraySelecionados);
      console.log(novoArraySelecionados);
    }
  }

  return (
    <>
      <h1>Escolha seu time de 3 pokémons</h1>

      <ul className="lista">
        {pokemons.map((p) => (
          <li
            key={p.nome}
            onClick={() => clicouCard(p)}
            className={selecionados.includes(p) ? `selecionado` : `pokecard`}
          >
            <Pokemon pokemon={p} />
          </li>
        ))}
      </ul>
    </>
  );
}
