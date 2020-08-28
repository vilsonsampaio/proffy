import styled, { css } from 'styled-components';

import SessionsBackground from '../../assets/images/sessions-background.svg';

export const Container = styled.div`
  ${({ theme }) => css`
    width: 100%;
    height: 100%;

    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;

    background: url(${SessionsBackground}) center center no-repeat ${theme.colors.primary};
    background-size: 70%, 30%;

    color: ${theme.colors.textBaseInPrimary};

    > div {
      svg {
        width: 100%;
        height: auto;

        max-width: 25rem;
      }
  
      h2 {
        max-width: 25rem;
        
        margin-top: 0.5rem;

        font: 500 2rem Poppins;
        line-height: 1.28;
      }
    }
  `}
`;
