import styled from "styled-components";
import Image from "next/image";

export const CardContainer = styled.section`
  display: flex;
  flex-direction: ${(props) => props.direction || "column"};
  align-items: ${(props) => props.align || "center"};
  justify-content: ${(props) => props.justify || "center"};
  margin-top: ${(props) => props.marginTop || "2em"};
  ${(props) => props.marginbottom && `margin-bottom: ${props.marginbottom}`};
  ${(props) => props.absolute && "position: absolute"};
  ${(props) => props.top && `top: ${props.top}`};
  ${(props) => props.left && `left: ${props.left}`};
  ${(props) => props.right && `right: ${props.right}`};
  ${(props) => props.bottom && `bottom: ${props.bottom}`};
  ${(props) => props.width && `width: ${props.width}`};

  @media (min-width: 768px) {
    flex-direction: row;
    flex-wrap: wrap;
  }
`;

export const Card = styled.article`
  border-radius: 1em;
  width: min(90vw, 375px);
  height: 500px;
  background-color: var(--color-grey);
  display: grid;
  grid-template-areas:
    ". . . hp hp"
    ". img img img ."
    ". img img img ."
    ". img img img ."
    ". pkmnname pkmnname pkmnname ."
    "type type type type type"
    "stats stats stats stats stats";
  grid-template-columns: 0.5fr repeat(3, 1fr) 0.5fr;
  grid-template-rows: repeat(7, 1fr);
  position: relative;
  overflow: hidden;
`;

export const BackgroundBall = styled.span`
  position: absolute;
  top: -50%;
  justify-self: center;
  background-color: ${(props) => props.color || "lightgrey"};
  border-radius: 50%;
  width: 500px;
  height: 500px;
`;

export const CardImage = styled(Image)`
  grid-area: img;
  justify-self: center;
  align-self: center;
  filter: drop-shadow(1em 1em 0.5em var(--color-black)) saturate(150%);
`;

export const CardName = styled.h2`
  grid-area: pkmnname;
  justify-self: center;
  align-self: center;
  color: var(--color-black);
  font-size: 2.2em;
`;

export const CardHP = styled.p`
  grid-area: hp;
  justify-self: center;
  align-self: center;
  background-color: var(--color-grey);
  border-radius: 1em;
  padding: 0.5em;
  font-weight: bold;
  z-index: 1;
`;

export const CardTypeContainer = styled.div`
  grid-area: type;
  display: flex;
  justify-content: center;
  align-items: baseline;
`;

export const CardType = styled.p`
  background-color: ${(props) => props.color || "var(--color-black)"};
  color: var(--color-white);
  border-radius: 1em;
  padding: 0.5em 2em;
  margin: 0 0.5em;
  font-size: 1.2em;
`;

export const CardStatsContainer = styled.div`
  grid-area: stats;
  display: flex;
  justify-content: space-evenly;
  align-items: baseline;
`;

export const CardStats = styled.p`
  ${(props) => props.bold && "font-weight: bold"};
  transform: scale(1.5);
  padding: 0.3em;
`;
