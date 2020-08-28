import styled, { css } from 'styled-components';

export const Container = styled.header`
  ${({ theme }) => css`
    display: flex;
    flex-direction: column;

    background: ${theme.colors.primary};

    @media (min-width: 70rem) {
      & {
        height: 34rem;
  
        ${TopBarContainer} {
          max-width: 110rem;
        }
  
        ${HeaderContent} {
          flex: 1;
  
          max-width: 74rem;
          
          display: flex;
          flex-direction: column;
          justify-content: center;
          align-items: flex-start;
          
          margin: 0 auto;
          padding-bottom: 4.8rem;
  
          strong {
            max-width: 35rem;
          }
        }
      }
    }
  `}
`;

export const TopBarContainer = styled.div`
  ${({ theme }) => css`
    width: 90%;
    
    display: flex;
    justify-content: space-between;
    align-items: center;

    margin: 0 auto;
    padding: 1.6rem 0;

    color: ${theme.colors.textBaseInPrimary};

    a {
      height: 3.2rem;
  
      transition: opacity 0.2s;

      :hover {
        opacity: 0.6;
      }
    }

    > img {
      height: 1.6rem;
    }
  `}  
`;

export const HeaderContent = styled.div`
  ${({ theme }) => css`
    width: 90%;

    position: relative;

    margin: 3.2rem auto;

    strong {
      color: ${theme.colors.textTitleInPrimary};

      font: 700 3.6rem Archivo;
      line-height: 4.2rem;
    }

    p {
      max-width: 30rem;
  
      margin-top: 2.4rem;
      
      color: ${theme.colors.textBaseInPrimary};
      
      font-size: 1.6rem;
      line-height: 2.6rem;
    }
  `}  
`;

export const Reponsive = css`

`;
