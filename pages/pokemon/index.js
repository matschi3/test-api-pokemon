import useSWR from "swr";
import { StyledButton } from "../../components/StyledButton/StyledButton.styled.js";

export default function PokemonPage() {
  const { data, isLoading, error } = useSWR(
    "https://pokeapi.co/api/v2/pokemon"
  );
  if (isLoading) return <div>Loading...</div>;
  if (error) return <div>Error</div>;
  const { results } = data;
  return (
    <>
      <StyledButton href="/">back</StyledButton>
      <h1>Pokemons</h1>
      <ul>
        {results.map((result) => (
          <li key={result}>
            <StyledButton href={`/pokemon/${result.name}`}>
              {result.name[0].toUpperCase() + result.name.slice(1)}
            </StyledButton>
          </li>
        ))}
      </ul>
    </>
  );
}
