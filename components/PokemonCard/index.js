import Image from "next/image";

export default function PokemonCard({ pokemon }) {
  const { name, sprites, types } = pokemon;
  return (
    <article>
      <h2>{name}</h2>
      <Image
        src={sprites.other["official-artwork"].front_default}
        alt={name}
        width={100}
        height={100}
      />
      {types.map((type) => (
        <p key={type.type.name}>{type.type.name}</p>
      ))}
    </article>
  );
}
