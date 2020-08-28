import styled, { css } from 'styled-components';

export const Container = styled.div`
  ${({ theme }) => css`
    width: 100vw;
    height: 100vh;

    display: flex;
    justify-content: center;
    align-items: center;

    background: ${theme.colors.primary};
    color: ${theme.colors.textBaseInPrimary};

    @media (min-width: 110rem) {
      ${Wrapper} {
        max-width: 110rem;

        display: grid;
        grid-template-rows: 35rem 1fr;
        grid-template-columns: 2fr 1fr 1fr;
        grid-template-areas: 
          "logo hero hero"
          "buttons buttons total"
        ;

        > img {
          grid-area: hero;
          justify-self: end;
        }
      }

      ${LogoContainer} {
        grid-area: logo;
        align-self: center;

        margin: 0;

        text-align: left;
        
        img {
          height: 100%;  
        }
        
        h2 {
          text-align: initial;
          font-size: 3.6rem;
        }
      }


      ${ButtonsContainer} {
        grid-area: buttons;
        justify-content: flex-start;
        
        a {
          font-size: 2.4rem;
        }
      }

      ${TotalConnections} {
        grid-area: total;
        justify-self: end;
      }
    }
  `}
`;

export const Wrapper = styled.div`
  ${({ theme }) => css`
    > img {
      width: 100%;
    }    
  `}
`;

export const LogoContainer = styled.div`
  ${({ theme }) => css`
    margin-bottom: 3.2rem;

    text-align: center;

    img {
      height: 10rem;
    }

    h2 {
      margin-top: 0.8rem;

      font-size: 2.4rem;
      line-height: 4.6rem;
      font-weight: 500;
    }
  `}
`;

export const ButtonsContainer = styled.div`
  ${({ theme }) => css`
    display: flex;
    justify-content: center;

    margin: 3.2rem 0;

    a {
      width: 30rem;
      height: 10.4rem;

      display: flex;
      align-items: center;
      justify-content: center;

      color: ${theme.colors.textTitleInPrimary};
      font: 700 2.0rem Archivo;

      border-radius: 0.8rem;

      text-decoration: none;

      transition: background-color 0.2s;

      :first-child {
        margin-right: 1.6rem;
      }

      &.study {
        background: ${theme.colors.primaryLighter};
        
        :hover {
          background: ${theme.colors.primaryLight};
        }
      }

      &.give-classes {
        background: ${theme.colors.secondary};

        :hover {
          background: ${theme.colors.secondaryDark};
        }
      }

      img {
        width: 4rem;
        margin-right: 2.4rem;
      }
    }
  `}
`;

export const TotalConnections = styled.span`
  ${({ theme }) => css`
    display: flex;
    align-items: center;
    justify-content: center;

    font-size: 1.4rem;

    img {
      margin-left: 0.8rem;
    }
  `}
`