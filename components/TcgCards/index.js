import useSWR from "swr";
import Image from "next/image";

export default function TcgCards({ pokemonName }) {
  const {
    data: tcg,
    isLoading: tcgIsLoading,
    error: tcgError,
  } = useSWR(`https://api.pokemontcg.io/v2/cards/?q=name:${pokemonName}`);
  if (tcgIsLoading) return <div>Loading...</div>;
  if (tcgError) return <div>Error</div>;
  console.log(tcg);
  return (
    <>
      {tcg.data.map((tcgCard) => (
        <Image
          key={tcgCard.id}
          src={tcgCard.images.large}
          alt={pokemonName}
          width={367}
          height={512}
          loading="lazy"
          style={{ margin: "0.5em", borderRadius: "0.5em" }}
        />
      ))}
    </>
  );
}
