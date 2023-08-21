import useSWR from "swr";
import { useRouter } from "next/router";
import PokemonCard from "../../components/PokemonCard/index.js";
import { StyledLinkButton } from "../../components/StyledLinkButton/StyledLinkButton.styled.js";
import { StyledButton } from "../../components/StyledButton/StyledButton.styled.js";
import { useState } from "react";
import { CardContainer } from "../../components/PokemonCard/PokemonCard.styled.js";

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
      <StyledLinkButton href="/pokemon">back</StyledLinkButton>
      <CardContainer marginTop="0" marginBottom="1em">
        <PokemonCard pokemon={pokemon} species={species} />
        <StyledButton onClick={() => setTcgIsActive(!tcgIsActive)}>
          {!tcgIsActive ? "Show TradingCards" : "Hide TradingCards"}
        </StyledButton>
        {!tcgIsActive ? "" : <p>TraidingCards coming...</p>}
      </CardContainer>
    </>
  );
}
