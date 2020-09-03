import styled, { css } from 'styled-components';

import { Container as ButtonContainer } from '../../components/Button/styles';

import successBackground from '../../assets/images/success-background.svg'


export const Container = styled.div`
  ${({ theme }) => css`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;

    width: 100vw;
    height: 100vh;

    background: ${theme.colors.primary};

    @media (min-width: 700px) {
      ${Wrapper} {
        background-size: contain, cover;
      }
    } 
  `}
`;

export const Wrapper = styled.div`
  ${({ theme }) => css`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;

    width: 90vw;
    height: 100%;

    background: url(${successBackground}) center center no-repeat ${theme.colors.primary};
    background-size: 150%, cover;

    > svg {
      width: 12rem;
      height: auto;

      margin-bottom: 4rem;

      > * {
        stroke: ${theme.colors.secondary};
      }
    }
  `}
`;

export const Title = styled.h1`
  ${({ theme }) => css`
    color: ${theme.colors.textTitleInPrimary};

    font: 700 5.4rem Archivo;
    line-height: 4.2rem;
  `}
`;

export const Description = styled.p`
  ${({ theme }) => css`
    max-width: 40rem;

    margin-top: 2.4rem; 
    color: ${theme.colors.textBaseInPrimary};

    font: 400 1.6rem Poppins;
    line-height: 2.6rem;


    text-align: center;
  `}
`;

export const Button = styled(ButtonContainer)`
  ${({ theme }) => css`
    width: auto;
    height: 5.6rem;

    margin-top: 8rem;
    padding: 0 4rem;

    font: 600 1.6rem Archivo;
  `}
`;
