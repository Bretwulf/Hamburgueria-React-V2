import styled from "styled-components";
import { css } from "styled-components";

export const ProdCard = styled.li`
  box-sizing: border-box;
  width: 16.875rem;
  min-width: 16.875rem;
  background: #ffffff;
  border: 0.125rem solid var(--grey-20);
  border-radius: 0.3125rem;
  & div:first-child {
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100%;
    height: 9.375rem;
    background-color: #f5f5f5;
  }
  & > div > img {
    width: 100%;
    height: 9.375rem;
    object-fit: contain;
  }
  & > div {
    padding: 1.25rem;
    display: flex;
    flex-direction: column;
    gap: 1.25rem;
  }
  &:hover {
    border: 0.125rem solid var(--Color-primary);
  }
`;
