const imageURL =
  "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/";

export default function Pokemon({ pokemon }) {
  return (
    <>
      <img src={`${imageURL}/${pokemon.numero}.png`} alt={pokemon.name} />
      {pokemon.nome}
    </>
  );
}
