import styled, { css } from 'styled-components';

export const Container = styled.button`
  ${({ theme }) => css`
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

    transition: background-color .2s;

    :hover {
      background: ${theme.colors.secondaryDark};
    }
  `}

`;
