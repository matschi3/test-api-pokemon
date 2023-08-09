import useSWR from "swr";

export default function HomePage() {
  const { data, isLoading, error } = useSWR(
    "https://pokeapi.co/api/v2/pokemon"
  );
  if (isLoading) return <div>Loading...</div>;
  if (error) return <div>Error</div>;
  console.log(data);
  const { results } = data;
  console.log(results);
  return (
    <>
      <h1>Pokemons</h1>
      {results.map((result) => (
        <p key={result.name}>{result.name}</p>
      ))}
    </>
  );
}
