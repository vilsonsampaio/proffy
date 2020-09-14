import styled, { css } from 'styled-components';

const variants: any = {
  sessions: css`
    ${({ theme }) => css`
      & + & {
        margin-top: -0.2rem;
      }

      input::placeholder {
        color: transparent;
      }

      &:only-of-type input {
        border-radius: ${theme.radius.default};
      }

      &:first-of-type input {
        border-top-left-radius: ${theme.radius.default};
        border-top-right-radius: ${theme.radius.default};
      }

      &:last-of-type input {
        border-bottom-left-radius: ${theme.radius.default};
        border-bottom-right-radius: ${theme.radius.default};
      }

      &:focus-within::after {
        top: 1.2rem;
        bottom: 1.2rem;
        left: 0;

        width: 0.2rem;
        height: calc(100% - 2.4rem);
      }

      input {
        height: 7.2rem;

        padding: 1rem 2.4rem 0;

        font: 400 1.6rem Poppins;
      }

      label {
        position: absolute;
        top: 0;
        left: 0;

        margin: 2.4rem;

        color: ${theme.colors.textComplement};

        pointer-events: none;

        transition: all 0.3s ease-out;
      }

      input:focus + label,
      input:not(:placeholder-shown) + label {
        margin: 1rem 2.4rem 0;

        font-size: 1.2rem;
      }
    `}
  `,
  default: css`
    ${({ theme }) => css`
      & + & {
        margin-top: 1.4rem;
      }

      &:focus-within::after {
        left: 2.4rem;
        right: 2.4rem;
        bottom: 0;

        width: calc(100% - 4.8rem);
        height: 0.15rem;
      }

      label {
        color: ${theme.colors.textComplement};

        font-size: 1.4rem;
      }

      input {
        height: 5.6rem;

        padding: 0 1.5rem;
        margin-top: 0.8rem;

        font: 400 1.6rem Archivo;

        border-radius: ${theme.radius.default};
      }

      button {
        top: calc(50% + 1.5rem);
      }
    `}
  `,
};

export const Container = styled.div<{ variant: string }>`
  ${({ theme, variant }) => css`
    position: relative;

    width: 100%;

    &:focus-within::after {
      content: '';

      position: absolute;

      background: ${theme.colors.primary};

      border-radius: ${theme.radius.default};
    }

    input {
      width: 100%;

      background: ${theme.colors.shapesSecondary};
      color: ${theme.colors.textBase};

      border: 0.1rem solid ${theme.colors.backgroundLinesInWhite};

      :disabled {
        opacity: 0.6;
      }
    }

    button {
      position: absolute;
      top: 50%;
      right: 2.4rem;
      transform: translateY(-50%);

      display: flex;

      background: none;
      border: none;

      cursor: pointer;

      > svg {
        width: 1.8rem;
        height: auto;

        color: ${theme.colors.textComplement};

        transition: all 0.2s;

        :hover {
          color: ${theme.colors.primary};
        }
      }
    }

    ${variant ? variants[variant] : ''}
  `}
`;
