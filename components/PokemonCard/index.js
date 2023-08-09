import Image from "next/image";

export default function PokemonCard({ pokemon }) {
  console.log(pokemon);
  const { name, sprites } = pokemon;
  return (
    <article>
      <h2>{name}</h2>
      <Image
        src={sprites.other["official-artwork"].front_default}
        alt={name}
        width={100}
        height={100}
      />
    </article>
  );
}
