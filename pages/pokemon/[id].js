import useSWR from "swr";
import { useRouter } from "next/router";
import PokemonCard from "../../components/PokemonCard/index.js";
import { StyledLinkButton } from "../../components/StyledLinkButton/StyledLinkButton.styled.js";
import { StyledButton } from "../../components/StyledButton/StyledButton.styled.js";
import { useState } from "react";
import { CardContainer } from "../../components/PokemonCard/PokemonCard.styled.js";
import TcgCards from "../../components/TcgCards/index.js";
import Header from "@/components/Header/index.js";
import { StyledButtonContainer } from "../../components/StyledButton/StyledButton.styled.js";
import Image from "next/image.js";

export default function DetailPokemonPage() {
  const [tcgIsActive, setTcgIsActive] = useState(false);
  const [activeTcgSet, setActiveTcgCard] = useState("");
  const router = useRouter();
  const { id } = router.query; // id is a name for tcg api cause no pkmn-id there
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
  const {
    data: tcg,
    isLoading: tcgIsLoading,
    error: tcgError,
  } = useSWR(`https://api.pokemontcg.io/v2/cards/?q=name:${id}`);
  if (isLoading || speciesIsLoading || tcgIsLoading)
    return <div>Loading...</div>;
  if (error || speciesError || tcgError) return <div>Error</div>;
  return (
    <>
      <Header />
      <StyledLinkButton href="/pokemon">{"<- Pokemon"}</StyledLinkButton>
      <StyledButton onClick={() => setTcgIsActive(!tcgIsActive)}>
        {!tcgIsActive ? "Show TradingCards" : "Hide TradingCards"}
      </StyledButton>
      <StyledButtonContainer>
        {tcg.data.map((tcgCard) => (
          <StyledButton
            key={tcgCard.id}
            onClick={() => setActiveTcgCard(`${tcgCard.images.large}`)}
          >
            <Image
              src={tcgCard.set.images.symbol}
              alt={tcgCard.set.name}
              width={30}
              height={30}
              loading="lazy"
              style={{ verticalAlign: "middle", marginRight: "0.5em" }}
            />
            {tcgCard.set.name}
          </StyledButton>
        ))}
      </StyledButtonContainer>
      <CardContainer marginTop="0" marginBottom="1em">
        <PokemonCard pokemon={pokemon} species={species} />
        {!tcgIsActive ? "" : <TcgCards tcg={tcg} />}
      </CardContainer>
    </>
  );
}
