import styled, { css } from 'styled-components';

export const Container = styled.button`
  ${({ theme, disabled }) => css`
    width: 100%;
    height: 5.6rem;

    display: flex;
    align-items: center;
    justify-content: center;
    
    background: ${theme.colors.secondary};
    color: ${theme.colors.shapesPrimary};

    font: 600 1.6rem Archivo;

    border: none;
    border-radius: ${theme.radius.default};

    transition: all .2s;

    :hover {
      background: ${theme.colors.secondaryDark};
    }

    ${disabled
      ? css`
          background: ${theme.colors.shapesDisabled};
          color: ${theme.colors.textComplement};

          cursor: initial;
      
          :hover {
            background: ${theme.colors.shapesDisabled};
          }
        `
      : ''
    }
  `}

`;
