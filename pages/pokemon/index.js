import useSWR from "swr";

export default function PokemonPage() {
  const { data, isLoading, error } = useSWR(
    "https://pokeapi.co/api/v2/pokemon"
  );
  if (isLoading) return <div>Loading...</div>;
  if (error) return <div>Error</div>;
  const { results } = data;
  return (
    <>
      <h1>Pokemons</h1>
      {results.map((result) => (
        <p key={result.name}>{result.name}</p>
      ))}
    </>
  );
}