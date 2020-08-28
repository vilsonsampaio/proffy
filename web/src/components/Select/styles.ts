import styled, { css } from 'styled-components';

export const Container = styled.div`
  ${({ theme }) => css`
    position: relative;

    & + & {
      margin-top: 1.4rem;
    }

    label {
      font-size: 1.4rem;
    }

    select {
      width: 100%;
      height: 5.6rem;

      margin-top: 0.8rem;
      padding: 0 1.6rem;

      background: ${theme.colors.shapesSecondary};
      color: ${theme.colors.textInputs};

      font: 1.6rem Archivo;

      border: 0.1rem solid ${theme.colors.backgroundLinesInWhite};
      border-radius: ${theme.radius.default};
      
      outline: 0;
    }

    &:focus-within::after {
      width: calc(100% - 3.2rem);
      height: 0.2rem;

      content: '';
      
      position: absolute;
      left: 1.6rem;
      right: 1.6rem;
      bottom: 0;

      background: ${theme.colors.primary};
    }
  `}
`;
