import styled from "styled-components";
import { StyledLink } from "../StyledLink/StyledLink.styled.js";

export const StyledLinkButton = styled(StyledLink)`
  background-color: var(--color-grey);
  border: 2px solid var(--color-black);
  border-radius: 30px;
  box-shadow: var(--color-black) 4px 4px 0 0;
  color: var(--color-black);
  cursor: pointer;
  font-weight: 600;
  font-size: 18px;
  text-decoration: none;
  user-select: none;
  -webkit-user-select: none;
  touch-action: manipulation;

  &:hover {
    background-color: var(--color-white);
  }

  &:active {
    box-shadow: var(--color-gray) 2px 0 0;
    transform: translate(2px, 2px);
    border: 2px solid var(--color-grey);
  }
`;
