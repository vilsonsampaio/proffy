import styled, { css } from 'styled-components';

import { Container as SessionsHero } from '../../../components/SessionsHero/styles';
import { Container as ArrowBack } from '../../../components/ArrowBack/styles';


export const Container = styled.div`
  ${({ theme }) => css`
    width: 100vw;
    height: 100vh;

    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;

    color: ${theme.colors.textBaseInPrimary};
    background: ${theme.colors.background};

    @media (min-width: 700px) {
      position: relative;

      flex-direction: row;

      ${ProffyHero} {
        position: absolute;
        right: 0;
    
        display: block;

        width: 50vw;
        height: 100%;

        > ${SessionsHero} {
          background-size: 100%, 30%;

          svg {
            max-width: 30rem;
          }
        }
      }

      ${FormContainer} {
        position: absolute;
        left: 0%;
        
        width: 50vw;
        height: 100%;

        ${FormWrapper} {
          position: relative;

          max-width: 35rem;

          > div {
            position: absolute;
            bottom: 5rem;

            margin-top: 0;
          }
        }
      }
    }
  `}
`;

export const ProffyHero = styled.div`
  ${({ theme }) => css`
    display: none;

    flex: 1;

    width: 100%;
  `}
`;

export const FormContainer = styled.div`
  ${({ theme }) => css`
    width: 100%;
    height: 100%;

    display: flex;
    align-items: center;
    justify-content: center;

    background: ${theme.colors.background};
  `}
`;

export const FormWrapper = styled.div`
  ${({ theme }) => css`
    position: relative;

    display: flex;
    flex-direction: column;
    align-items: flex-start;
    justify-content: center;
    
    width: 100%;
    height: 100%;
    
    max-width: 35rem;

    ${ArrowBack} {
      position: absolute;
      top: 1.6rem;
      left: 0;
    }

    
    form {
      display: flex;
      flex-direction: column;
      align-items: flex-start;
      
      width: 100%;

      h1 {
        color: ${theme.colors.textTitle};
        
        font: 600 3.6rem Poppins;
        line-height: 1;
      }

      h2 {
        margin: 2rem 0 4rem;

        max-width: 30rem;

        color: ${theme.colors.textBase};
        
        font: 400 1.6rem Poppins;
        line-height: 2.6rem;
      }

      > button {
        margin-top: 4rem;
      }
    }
  `}
`;