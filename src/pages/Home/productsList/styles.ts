import styled from "styled-components";

export const StyledUl = styled.ul`
  margin-top: 20px;
  margin-bottom: 40px;
  display: flex;
  flex-wrap: wrap;
  padding: 0px 30px;
  justify-content: center;
  gap: 2rem;
  width: 100%;
  margin-top: 1.25rem;
  margin-bottom: 1.25rem;

  @media (max-width: 900px) {
    overflow-x: auto;
    flex-wrap: nowrap;
    justify-content: stretch;
  }
`;
