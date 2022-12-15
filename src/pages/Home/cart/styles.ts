import styled from "styled-components";

export const StyledAside = styled.aside`
  display: flex;
  flex-direction: column;
  width: 600px;
  min-width: 400px;
  height: max-content;
  background-color: var(--grey-20);
  margin-bottom: 1.25rem;
  margin-top: 1.25rem;
  position: fixed;
  border-radius: 10px;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  z-index: 2;
  input {
    width: 20%;
  }
  ul {
    background-color: var(--grey-0);
    padding: 20px;
    width: 100%;
    max-height: 300px;
    overflow-y: auto;
    display: flex;
    flex-direction: column;
    gap: 1rem;
  }

  & > div:first-child {
    width: 100%;
    background: var(--Color-primary);
    border-top-left-radius: 10px;
    border-top-right-radius: 10px;
    padding: 1.25rem;
    display: flex;
    justify-content: space-between;
    align-items: center;
    gap: 12px;
  }
  & > div:nth-child(3) {
    background-color: var(--grey-0);
    width: 100%;
    margin-top: 0.25rem;
    padding: 1rem;
    display: flex;
    flex-direction: column;
    gap: 1rem;
  }
  & > div:nth-child(3) > div {
    display: flex;
    justify-content: space-between;
    gap: 12px;
  }

  @media (max-width: 900px) {
    width: 90%;
    min-width: 90%;
  }
`;

export const CartBG = styled.div`
  background-color: rgba(30, 29, 30, 0.5);
  width: 100vw;
  height: 100vh;
  position: fixed;
  top: 0;
  z-index: 1;
`;
