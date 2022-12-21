import styled from "styled-components";

export const Content = styled.div`
  background: none;
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 0.5rem;
  border: none;
  width: 100%;

  @media (max-width: 600px) {
    grid-template-columns: repeat(1, 1fr);
  }
`;
