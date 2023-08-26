import styled from "styled-components";

export const StyledButtonContainer = styled.section`
  display: flex;
  white-space: nowrap;
  overflow-x: scroll;
  margin: 0.05em;
  width: 100vw;

  @media (min-width: 768px) {
    flex-wrap: wrap;
    position: absolute;
    bottom: 0;
  }
`;

export const StyledButton = styled.button`
  background-color: ${(props) => props.backgroundColor || "var(--color-grey)"};
  border: 2px solid var(--color-black);
  border-radius: 30px;
  box-shadow: var(--color-black) 4px 4px 0 0;
  color: var(--color-black);
  cursor: pointer;
  display: inline-block;
  font-weight: 600;
  font-size: 18px;
  padding: 0 18px;
  line-height: 50px;
  text-align: center;
  text-decoration: none;
  user-select: none;
  -webkit-user-select: none;
  touch-action: manipulation;
  margin: 0.15em;

  &:hover {
    background-color: var(--color-white);
  }

  &:active {
    box-shadow: var(--color-gray) 2px 0 0;
    transform: translate(2px, 2px);
    border: 2px solid var(--color-grey);
  }

  @media (min-width: 768px) {
    min-width: 120px;
    padding: 0 25px;
  }
`;
