import styled from "styled-components";

export const StyledLoginAside = styled.aside`
  margin-top: 200px;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: flex-start;
  gap: 20px;

  .logo {
    width: 243.43px;
    height: 56.4px;
    object-fit: contain;
  }

  .sideCard {
    display: flex;
    justify-content: space-between;
    width: 377px;
    background: #ffffff;
    border: 1px solid #e0e0e0;
    box-shadow: 0px 4px 40px -20px rgba(0, 0, 0, 0.25);
    border-radius: 5px;
    align-items: center;
    padding: 10px 10px;
    gap: 8px;
  }

  .green-box {
    display: flex;
    justify-content: center;
    align-items: center;
    width: 60px;
    min-width: 60px;
    height: 60px;
    background: rgba(39, 174, 96, 0.1);
    border-radius: 5px;
  }

  p {
    font-weight: 400;
    width: 261px;
    font-size: 14px;
    line-height: 22px;
    color: #828282;
  }
  @media (max-width: 900px) {
    display: none;
  }
`;
