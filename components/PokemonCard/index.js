import {
  CardContainer,
  Card,
  BackgroundBall,
  CardImage,
  CardName,
  CardHP,
  CardTypeContainer,
  CardType,
  CardStatsContainer,
  CardStats,
} from "./PokemonCard.styled";

export default function PokemonCard({ pokemon, species }) {
  const { name, sprites, types, stats } = pokemon;
  return (
    <Card>
      <BackgroundBall color={species.color.name} />
      <CardImage
        src={sprites.other["official-artwork"].front_default}
        alt={name}
        width={260}
        height={260}
        layout="responsive"
      />
      <CardName color={species.color.name}>
        {name[0].toUpperCase() + name.slice(1)}
      </CardName>
      <CardHP>
        {stats[0].stat.name.toUpperCase()} {stats[0].base_stat}
      </CardHP>
      <CardTypeContainer>
        {types.map((type) => (
          <CardType
            key={type.type.name}
            color={`var(--color-type-${type.type.name})`}
          >
            {type.type.name}
          </CardType>
        ))}
      </CardTypeContainer>
      <CardStatsContainer>
        <CardContainer style={{ flexDirection: "column", margin: 0 }}>
          <CardStats bold>{stats[1].base_stat}</CardStats>
          <CardStats>
            {stats[1].stat.name[0].toUpperCase() + stats[1].stat.name.slice(1)}
          </CardStats>
        </CardContainer>
        <CardContainer style={{ flexDirection: "column", margin: 0 }}>
          <CardStats bold>{stats[2].base_stat}</CardStats>
          <CardStats>
            {stats[2].stat.name[0].toUpperCase() + stats[2].stat.name.slice(1)}
          </CardStats>
        </CardContainer>
        <CardContainer style={{ flexDirection: "column", margin: 0 }}>
          <CardStats bold>{stats[5].base_stat}</CardStats>
          <CardStats>
            {stats[5].stat.name[0].toUpperCase() + stats[5].stat.name.slice(1)}
          </CardStats>
        </CardContainer>
      </CardStatsContainer>
    </Card>
  );
}
