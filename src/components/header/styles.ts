import styled from "styled-components";

export const StyledHeader = styled.header`
  background-color: var(--grey-0);
  margin-bottom: 20px;

  .right-side-header {
    display: flex;
    gap: 1rem;
    justify-content: space-between;
    align-items: center;
    padding: 2.5rem 0.75rem;
  }
  div {
    display: flex;
    gap: 1rem;
    justify-content: space-between;
    align-items: center;
    padding: 0.75rem 0.75rem;
  }
  div > img {
    width: 9.375rem;
    object-fit: contain;
  }
  .search-input {
    position: relative;
    top: 0;
    right: 0;
    height: max-content;
  }
  .search-input > button {
    position: absolute;
    top: 18px;
    right: 20px;
  }
`;

export const StyledInput = styled.input`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  padding: 0.625rem 135px 0.625rem 0.9375rem;
  gap: 7.1875rem;
  width: 22.8125rem;
  background: #ffff;
  border: 0.125rem solid var(--grey-20);
  border-radius: 0.5rem;
  font-weight: 400;
  font-size: 1rem;
  color: var(--grey-20);

  &:focus {
    outline: none;
    border: 0.125rem solid var(--grey-50);
  }
  @media (max-width: 900px) {
    width: 100vw;
  }
`;

export const StyledCartIcon = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  position: relative;
  top: 0px;

  .item-number {
    position: absolute;
    padding: 3px;
    border-radius: 3px;
    top: 5px;
    right: 10px;
    width: max-content;
    height: max-content;
    font-size: 8px;
    color: white;
    background-color: var(--Color-primary);
  }
`;
