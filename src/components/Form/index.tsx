import styled from "styled-components";

export const Form = styled.form`
  margin-top: 200px;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  padding: 33.6911px 17.6477px;
  gap: 17.65px;
  width: 500px;
  border: 2px solid #f5f5f5;
  background: var(--Grey-0);
  border-radius: 3.20867px;
  div {
    width: 100%;
  }
  .link {
    width: 160px;

    font-weight: 500;
    font-size: 14px;
    line-height: 22px;
    text-decoration-line: underline;
    color: #828282;
  }
  .register-header {
    width: 100%;
    display: flex;
    gap: 12px;
    justify-content: space-between;
    align-items: center;
  }

  h3 {
    font-weight: 700;
    font-size: 18px;
    line-height: 24px;
    color: #333333;
  }

  label {
    align-self: flex-start;
    font-weight: 400;
    font-size: 14px;
    color: var(--Grey-0);
  }

  small {
    width: 190px;
    align-self: center;
    font-weight: 600;
    font-size: 9.62602px;
    color: var(--grey-50);
    text-align: center;
  }
  .inputbox {
    width: 100%;
    display: flex;
    flex-direction: column;
    gap: 8px;
  }

  .submitbox {
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 12px;
  }

  .error-mesage {
    align-self: flex-start;
    color: var(--Negative);
    font-weight: 600;
    font-size: 11px;
  }

  @media (max-width: 900px) {
    width: 100%;
    margin-top: 30px;
  }
`;
