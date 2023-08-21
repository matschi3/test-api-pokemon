import useSWR from "swr";
import { StyledButton } from "../../components/StyledButton/StyledButton.styled.js";
import Image from "next/image.js";
import { CardContainer } from "../../components/PokemonCard/PokemonCard.styled.js";
import { useState } from "react";

export default function PokemonPage() {
  const [tcgIsActive, setTcgIsActive] = useState(false);
  const {
    data: fetchData,
    isLoading,
    error,
  } = useSWR("https://pokeapi.co/api/v2/pokemon");
  if (isLoading) return <div>Loading...</div>;
  if (error) return <div>Error</div>;
  const { results } = fetchData;
  return (
    <>
      <StyledButton href="/">back</StyledButton>
      <h1>Pokemons</h1>
      <CardContainer marginBottom="1em">
        {results.map((result) => (
          <StyledButton key={result.name} href={`/pokemon/${result.name}`}>
            <Image
              src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${
                result.url.match(/\/([0-9]*)\/$/)[1]
              }.png`}
              alt={result.name}
              width={30}
              height={30}
              loading="lazy"
              style={{ verticalAlign: "middle", marginRight: "0.5em" }}
            />
            {result.name[0].toUpperCase() + result.name.slice(1)}
          </StyledButton>
        ))}
      </CardContainer>
    </>
  );
}
