import Link from "next/link";
import useSWR from "swr";
import { StyledLink } from "../../components/StyledLink/StyledLink.styled.js";

export default function PokemonPage() {
  const { data, isLoading, error } = useSWR(
    "https://pokeapi.co/api/v2/pokemon"
  );
  if (isLoading) return <div>Loading...</div>;
  if (error) return <div>Error</div>;
  const { results } = data;
  return (
    <>
      <Link href="/">back</Link>
      <h1>Pokemons</h1>
      <ul>
        {results.map((result) => (
          <li key={result.name}>
            <StyledLink href={`/pokemon/${result.name}`}>
              {result.name}
            </StyledLink>
          </li>
        ))}
      </ul>
    </>
  );
}
