import useSWR from "swr";
import Image from "next/image";
import { useState } from "react";
import {
  StyledButton,
  StyledButtonContainer,
} from "../StyledButton/StyledButton.styled.js";

export default function TcgCards({ pokemonName }) {
  const [activeTcgCard, setActiveTcgCard] = useState("");
  const {
    data: tcg,
    isLoading: tcgIsLoading,
    error: tcgError,
  } = useSWR(`https://api.pokemontcg.io/v2/cards/?q=name:${pokemonName}`);
  if (tcgIsLoading) return <div>Loading...</div>;
  if (tcgError) return <div>Error</div>;
  return (
    <>
      <StyledButtonContainer>
        {tcg.data.map((tcgCard) => (
          <StyledButton
            key={tcgCard.id}
            onClick={() => setActiveTcgCard(`${tcgCard.images.large}`)}
          >
            {tcgCard.set.name}
          </StyledButton>
        ))}
      </StyledButtonContainer>
      {activeTcgCard === "" ? (
        ""
      ) : (
        <Image
          src={activeTcgCard}
          alt={pokemonName}
          width={367}
          height={512}
          loading="lazy"
          style={{ margin: "0.5em", borderRadius: "0.5em" }}
        />
      )}
    </>
  );
}
