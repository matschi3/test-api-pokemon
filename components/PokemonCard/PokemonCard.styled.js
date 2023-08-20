import styled from "styled-components";
import Image from "next/image";

export const CardContainer = styled.section`
  display: flex;
  flex-direction: ${(props) => props.direction || "column"};
  align-items: ${(props) => props.align || "center"};
  justify-content: ${(props) => props.justify || "center"};
  margin-top: ${(props) => props.marginTop || "2em"};
  ${(props) => props.absolute && "position: absolute"};
  ${(props) => props.top && `top: ${props.top}`};
  ${(props) => props.left && `left: ${props.left}`};
  ${(props) => props.right && `right: ${props.right}`};
  ${(props) => props.bottom && `bottom: ${props.bottom}`};
  ${(props) => props.width && `width: ${props.width}`};
`;

export const Card = styled.article`
  border-radius: 1em;
  width: 90vw;
  height: 60vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  position: relative;
  background-color: var(--color-grey);
  overflow: hidden;
`;

export const BackgroundBall = styled.span`
  background-color: ${(props) => props.color || "var(--color-white)"};
  border-radius: 50%;
  width: 110vw;
  height: 110vw;
  position: absolute;
  top: -60vw;
`;

export const CardImage = styled(Image)`
  position: absolute;
  top: 2em;
  filter: drop-shadow(1em 1em 0.5em var(--color-black)) saturate(150%);
`;

export const CardName = styled.h2`
  position: absolute;
  top: 12em;
  color: var(--color-black);
  transform: scale(1.5);
`;

export const CardHP = styled.p`
  position: absolute;
  top: 1.2em;
  right: 1.2em;
  background-color: var(--color-grey);
  border-radius: 1em;
  padding: 0.5em;
  font-weight: bold;
`;

export const CardType = styled.p`
  background-color: ${(props) => props.color || "var(--color-black)"};
  color: var(--color-white);
  border-radius: 1em;
  padding: 0.5em 2em;
  margin: 0 0.5em;
`;

export const CardStats = styled.p`
  ${(props) => props.bold && "font-weight: bold"};
  transform: scale(1.5);
  padding: 0.3em;
`;
