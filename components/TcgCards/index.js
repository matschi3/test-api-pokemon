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
      <p>TCG Cards for {pokemonName}</p>
      <Image
        src={tcg.data[0].images.large}
        alt={pokemonName}
        width={367}
        height={512}
        loading="lazy"
      />
    </>
  );
}
