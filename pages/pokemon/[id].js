import useSWR from "swr";
import { useRouter } from "next/router";
import PokemonCard from "../../components/PokemonCard/index.js";
import { StyledButton } from "../../components/StyledLinkButton/StyledLinkButton.styled.js";
import { useState } from "react";

export default function DetailPokemonPage() {
  const [tcgIsActive, setTcgIsActive] = useState(false);
  const router = useRouter();
  const { id } = router.query;
  const {
    data: pokemon,
    isLoading,
    error,
  } = useSWR(`https://pokeapi.co/api/v2/pokemon/${id}`);
  const {
    data: species,
    isLoading: speciesIsLoading,
    error: speciesError,
  } = useSWR(`https://pokeapi.co/api/v2/pokemon-species/${id}`);
  if (isLoading || speciesIsLoading) return <div>Loading...</div>;
  if (error || speciesError) return <div>Error</div>;

  return (
    <>
      <StyledButton href="/pokemon">back</StyledButton>
      <PokemonCard pokemon={pokemon} species={species} />
      {!tcgIsActive ? (
        <button>Show TradingCards</button>
      ) : (
        <button>Hide TradingCards</button>
      )}
    </>
  );
}
