import useSWR from "swr";
import { StyledButton } from "../../components/StyledButton/StyledButton.styled.js";
import Image from "next/image.js";
import { useState } from "react";

export default function PokemonPage() {
  const [data, setData] = useState([]);
  const {
    data: fetchData,
    isLoading,
    error,
  } = useSWR("https://pokeapi.co/api/v2/pokemon");
  if (isLoading) return <div>Loading...</div>;
  if (error) return <div>Error</div>;

  setData(
    fetchData.results.map((result) => ({
      id: result.url.match(/\/([0-9]*)\/$/)[1],
      name: result.name,
      image: `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${
        result.url.match(/\/([0-9]*)\/$/)[1]
      }.png`,
    }))
  );
  console.log(data);
  /* const { results } = data; */
  return (
    <>
      <StyledButton href="/">back</StyledButton>
      <h1>Pokemons</h1>
      <ul>
        {data.map((result) => (
          <li key={result.id}>
            <StyledButton href={`/pokemon/${result.name}`}>
              {
                <Image
                  href={result.image}
                  alt={result.name}
                  width={20}
                  height={20}
                />
              }
              {result.name[0].toUpperCase() + result.name.slice(1)}
            </StyledButton>
          </li>
        ))}
      </ul>
    </>
  );
}
