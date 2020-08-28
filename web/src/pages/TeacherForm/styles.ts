import styled, { css } from 'styled-components';

import { Container as PageHeaderContainer, HeaderContent } from '../../components/PageHeader/styles';
import { Container as InputContainer } from '../../components/Input/styles';
import { Container as SelectContainer } from '../../components/Select/styles';
import { Container as TextareaContainer } from '../../components/Textarea/styles';


export const Container = styled.div`
  ${({ theme }) => css`
    && {
      width: 100vw;
      height: 100vh;

      max-width: 100vw;

      > ${PageHeaderContainer} {
        ${HeaderContent} {
          margin-bottom: 6.4rem;
        }
      }
        
      @media (min-width: 70rem) {

        > ${PageHeaderContainer} {
          ${HeaderContent} {
            margin-bottom: 0;
          }
        }

        > ${Main} {
          ${Fieldset} {
            padding: 0 6.4rem;
          }
          
          .schedule-item {
            display: grid;
            grid-template-columns: 2fr 1fr 1fr;
            column-gap: 1.6rem;

            ${InputContainer} {
              margin-top: 0!important;
            }
          }

          ${Footer} {
            display: flex;
            align-items: center;
            justify-content: space-between;
            
            padding: 4rem 6.4rem;
            
            p {
              justify-content: space-between;
            }

            button {
              width: 20rem;

              margin-top: 0;
            }
          }
        }
      }
    }
  `}
`;

export const Main = styled.main`
  ${({ theme }) => css`
    width: 100%;
    max-width: 74rem;

    margin: -3.2rem auto 3.2rem;
    padding-top: 6.4rem;

    background: ${theme.colors.shapesPrimary};

    border-radius: 0.8rem;
    
    overflow: hidden;

    & ${InputContainer} + ${TextareaContainer},
    & ${SelectContainer} + ${InputContainer} {
      margin-top: 2.4rem;
    }

    & ${InputContainer} {
      label {
        color: ${theme.colors.textComplement};
      }
    }
  `}
`;

export const Fieldset = styled.fieldset`
  ${({ theme }) => css`
    padding: 0 2.4rem;

    border: 0;

    & + & {
      margin-top: 6.4rem;
    }

    legend {
      width: 100%;
      
      display: flex;
      align-items: center;
      justify-content: space-between;
      
      margin-bottom: 2.4rem;
      padding-bottom: 1.6rem;
      
      font: 700 2.4rem Archivo;
      color: ${theme.colors.textTitle};
      
      border-bottom: 0.1rem solid ${theme.colors.backgroundLinesInWhite};

      button {
        background: none;
        color: ${theme.colors.primary};

        font: 700 1.6rem Archivo;
        
        border: 0;
        
        cursor: pointer;
        
        transition: color 0.2s;

        &:hover {
          color: ${theme.colors.primaryDark};
        }
      }
    }
  `}
`;

export const Footer = styled.footer`
  ${({ theme }) => css`
    padding: 4rem 2.4rem;
    background: ${theme.colors.shapesSecondary};
    border-top: 0.1rem solid ${theme.colors.backgroundLinesInWhite};
    margin-top: 6.4rem;

    p {
      display: flex;
      align-items: center;
      justify-content: center;
      font-size: 1.4rem;
      line-height: 2.4rem;
      color: ${theme.colors.textComplement};

      img {
        margin-right: 2rem;
      }
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

      &:hover {
        background: ${theme.colors.secondaryDark};
      }
    }
  `}
`;