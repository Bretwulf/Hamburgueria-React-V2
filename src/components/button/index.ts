import styled from "styled-components";
import { css } from "styled-components";

interface iButtonProps {
  medium?: boolean;
  full?: boolean;
  green?: boolean;
}

export const Button = styled.button<iButtonProps>`
  box-sizing: border-box;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  gap: 0.625rem;
  border-radius: 0.5rem;
  ${({ medium }) =>
    medium
      ? css`
          padding: 5px 15px;
        `
      : css`
          padding: 10px 15px;
        `};

  ${({ full }) =>
    full
      ? css`
          width: 100%;
        `
      : css`
          width: max-content;
        `};
  ${({ green }) =>
    green
      ? css`
          background: var(--Color-primary);
          border: 2px solid var(--Color-primary);
          color: white;
        `
      : css`
          background: var(--grey-20);
          border: 2px solid var(--grey-20);
          color: var(--grey-50);
        `}

  font-weight: 600;
  font-size: 1rem;
  line-height: 1.1875rem;
  cursor: pointer;

  &:hover {
    ${({ green }) =>
      green
        ? css`
            background: var(--Color-primary-50);
            border: 2px solid var(--Color-primary-50);
            color: white;
          `
        : css`
            background: var(--grey-50);
            border: 2px solid var(--grey-50);
            color: var(--grey-20);
          `}
  }
  &:disabled {
    opacity: 50%;
  }
  &:disabled:hover {
    ${({ green }) =>
      green
        ? css`
            background: var(--Color-primary);
            border: 2px solid var(--Color-primary);
            color: white;
          `
        : css`
            background: var(--grey-20);
            border: 2px solid var(--grey-20);
            color: var(--grey-50);
          `}
  }
`;
