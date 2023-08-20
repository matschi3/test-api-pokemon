import Image from "next/image";
import Link from "next/link";
import {
  CardContainer,
  Card,
  BackgroundBall,
  CardImage,
  CardName,
  CardHP,
} from "./PokemonCard.styled";

export default function PokemonCard({ pokemon, species }) {
  const { name, sprites, types, stats } = pokemon;
  return (
    <>
      <Link href="/pokemon">back</Link>
      <CardContainer>
        <Card>
          <BackgroundBall color={species.color.name} />
          <CardImage
            src={sprites.other["official-artwork"].front_default}
            alt={name}
            width={260}
            height={260}
          />
          <CardName color={species.color.name}>
            {name[0].toUpperCase() + name.slice(1)}
          </CardName>
          <CardHP />
        </Card>
      </CardContainer>
      <article>
        <h2 style={{ color: species.color.name }}>
          {name[0].toUpperCase() + name.slice(1)}
        </h2>
        <Image
          src={sprites.other["official-artwork"].front_default}
          alt={name}
          width={100}
          height={100}
        />
        {types.map((type) => (
          <p key={type.type.name}>{type.type.name}</p>
        ))}
        {
          <p>
            {stats[0].base_stat} {stats[0].stat.name}
          </p>
        }
        <p>
          {stats[1].base_stat} {stats[1].stat.name}
        </p>
        <p>
          {stats[2].base_stat} {stats[2].stat.name}
        </p>
        <p>
          {stats[5].base_stat} {stats[5].stat.name}
        </p>
      </article>
    </>
  );
}
