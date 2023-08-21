import useSWR from "swr";
import Image from "next/image";
import { useState } from "react";
import { StyledButton } from "../StyledButton/StyledButton.styled.js";

export default function TcgCards({ pokemonName }) {
  const [activeTcgCard, setActiveTcgCard] = useState("");
  const {
    data: tcg,
    isLoading: tcgIsLoading,
    error: tcgError,
  } = useSWR(`https://api.pokemontcg.io/v2/cards/?q=name:${pokemonName}`);
  if (tcgIsLoading) return <div>Loading...</div>;
  if (tcgError) return <div>Error</div>;
  console.log(tcg);
  console.log(activeTcgCard);
  return (
    <>
      {tcg.data.map((tcgCard) => (
        <StyledButton
          key={tcgCard.set.id}
          onClick={() => setActiveTcgCard(`${tcgCard.images.large}`)}
        >
          {tcgCard.set.name}
        </StyledButton>
      ))}
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
