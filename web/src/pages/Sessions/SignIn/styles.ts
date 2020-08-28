import styled, { css } from 'styled-components';

import { Container as SessionsHero } from '../../../components/SessionsHero/styles';

import checkIcon from '../../../assets/images/icons/check.svg';


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
      flex-direction: row;

      ${ProffyHero} {
        height: 100%;

        > ${SessionsHero} {
          background-size: 100%, 30%;

          svg {
            max-width: 30rem;
          }
        }
      }

      ${FormContainer} {
        width: 50vw;
        height: 100%;

        ${FormWrapper} {
          position: relative;

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
    flex: 1;

    width: 100%;
  `}
`;

export const FormContainer = styled.div`
  ${({ theme }) => css`
    width: 100%;
    height: 70vh;

    display: flex;
    align-items: center;
    justify-content: center;

    background: ${theme.colors.background};
  `}
`;

export const FormWrapper = styled.div`
  ${({ theme }) => css`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  
  width: 35rem;
  height: 100%;

  
  form {
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    width: 100%;

    h1 {
      margin-bottom: 4rem;
      
      color: ${theme.colors.textTitle};
      
      font: 600 3.6rem Poppins;
      line-height: 1;
    }

      > span {
        display: flex;
        align-items: center;
        justify-content: space-between;

        width: 100%;

        margin-top: 2.4rem;

        color: ${theme.colors.textComplement};

        font: 400 1.5rem Poppins;


        div {
          display: flex;
          align-items: center;

          input[type=checkbox] {
            width: 2.4rem;
            height: 2.4rem;

            background: ${theme.colors.shapesPrimary};

            border: 0.1rem solid ${theme.colors.backgroundLinesInWhite};
            border-radius: ${theme.radius.default};

            cursor: pointer;

            :checked {
              border: none;
              background: url(${checkIcon}) no-repeat center center ${theme.colors.secondary};
            }
          }

          label {
            margin-left: 1rem;
          }
          
        }
        
        a {
          color: ${theme.colors.textComplement};
          font-weight: 400;
        }
      }

      > button {
        margin-top: 4rem;
      }
    }

    > div {
      display: flex;
      align-items: flex-start;
      justify-content: space-between;
      
      width: 100%;
      margin-top: 4rem;

      span {
        color: ${theme.colors.textBase};

        font: 400 1.6rem Poppins;

        a {
          display: block;

          color: ${theme.colors.primary};

          font-weight: 600;

          text-decoration: underline;
        }
      }


      p {
        display: flex;
        align-items: center;
        justify-content: flex-end;

        color: ${theme.colors.textComplement};
      
        font: 400 1.4rem Poppins;
        line-height: 2rem;
        
        svg {
          width: auto;
          height: 1.5rem;


          margin-left: 0.8rem;

          opacity: 0.5;

          path {
            fill: ${theme.colors.primary};
          }
        }
      }
    }

  `}
`;