import styled from "styled-components";
export const StyledCartCard = styled.li`
  width: 100%;
  display: flex;
  align-items: center;
  gap: 0.5rem;

  input {
    text-align: center;
  }
  & > div:first-child {
    width: 4.375rem;
    height: 4.375rem;
    display: flex;
    align-items: center;
    justify-content: center;
    background-color: var(--grey-20);
    border-radius: 8px;
  }

  & > div > img {
    width: 4.375rem;
    height: 4.375rem;
    object-fit: contain;
  }

  & > div:nth-child(2) {
    width: 100%;
    display: flex;
    flex-direction: column;
    gap: 0.5rem;
  }
  .increment-button {
    height: 20px;
    width: 20px;
    border-radius: 3px;
    background-color: var(--grey-20);
    color: red;
    cursor: pointer;
  }
  .incrementer {
    display: flex;
    width: max-content;
    height: max-content;
  }
  .product-header {
    width: 100%;
    display: flex;
    justify-content: space-between;
    align-items: center;
    gap: 0.5rem;
  }
`;
