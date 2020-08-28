import styled, { css } from 'styled-components';

import { Container as InputContainer } from '../../components/Input/styles';
import { Container as SelectContainer } from '../../components/Select/styles';


export const Container = styled.div`
  ${({ theme }) => css`
    && {
      width: 100vw;
      max-width: 100%;
      height: 100vh;

      
      main {
        width: 90%;

        margin: 3.2rem auto;
      }


      @media (min-width: 70rem) {
        ${Form} {
          display: grid;
          grid-template-columns: repeat(4, 1fr);
          column-gap: 1.6rem;

          position: absolute;
          bottom: -2.8rem;

          ${InputContainer} + ${InputContainer},
          ${SelectContainer} + ${SelectContainer} {
            margin-top: 0;
          }
        }

        main {
          max-width: 74rem;

          margin: 0 auto;
          padding: 3.2rem 0;
        }
      }
    }
  `}
`;

export const Form = styled.form`
  ${({ theme }) => css`
    && {
      margin-top: 3.2rem;

      label {
        color: ${theme.colors.textBaseInPrimary};
      }

      button {
        width: 100%;
        height: 5.6rem;

        display: flex;
        align-items: center;
        justify-content: center;

        margin-top: 3.2rem;

        background: ${theme.colors.secondary};
        color: ${theme.colors.shapesPrimary};

        font: 700 1.6rem Archivo;
        
        border: 0;
        border-radius: 0.8rem;
        
        cursor: pointer;
        text-decoration: none;
        outline: 0;
        
        transition: background-color 0.2s;

        :hover {
          background: ${theme.colors.secondaryDark};
        }
      }
    }
  `}
`;
