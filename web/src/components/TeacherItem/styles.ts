import styled, { css } from 'styled-components';

export const Container = styled.article`
  ${({ theme }) => css`
    background: ${theme.colors.shapesPrimary};

    margin-top: 2.4rem;

    border: 0.1rem solid ${theme.colors.backgroundLinesInWhite};
    border-radius: ${theme.radius.default};

    overflow: hidden;

    @media (min-width: 70rem) {
      & {
        ${Header},
        ${Footer} {
          padding: 3.2rem;
        }

        ${Bio} {
          padding: 0 3.2rem;
        }

        ${Footer} {
          p {
            strong {
              display: initial;

              margin-left: 1.6rem;
            }
          }

          a {
            width: 24.5rem;
    
            justify-content: center;
            
            font-size: 1.6rem;

            img {
              margin-right: 1.6rem;
            }
          }
        }
      }
    }
  `}
`;

export const Header = styled.header`
  ${({ theme }) => css`
    display: flex;
    align-items: center;
    
    padding: 3.2rem 2rem;

    img {
      width: 8rem;
      height: 8rem;

      border-radius: 50%;
    }

    div {
      margin-left: 2.4rem;

      strong {
        display: block;

        color: ${theme.colors.textTitle};

        font: 700 2.4rem Archivo;
      }

      span {
        display: block;

        margin-top: 0.4rem;

        font-size: 1.6rem;
      }
    }
  `}
`;

export const Bio = styled.p`
  ${({ theme }) => css`
    padding: 0 2rem;

    font-size: 1.6rem;
    line-height: 2.8rem;  
  `}
`;

export const Footer = styled.footer`
  ${({ theme }) => css`
    display: flex;
    align-items: center;
    justify-content: space-between;

    margin-top: 3.2rem;
    padding: 3.2rem 2rem;

    background: ${theme.colors.shapesSecondary};

    border-top: 0.1rem solid ${theme.colors.backgroundLinesInWhite};

    p {
      strong {
        color: ${theme.colors.primary};
        font-size: 1.6rem;
        display: block;
      }
    }

    a {
      width: 20rem;
      height: 5.6rem;

      display: flex;
      align-items: center;
      justify-content: space-evenly;

      background: ${theme.colors.secondary};
      color: ${theme.colors.shapesPrimary};

      font: 700 1.4rem Archivo;

      border: 0;
      border-radius: ${theme.radius.default};

      cursor: pointer;
      text-decoration: none;

      transition: 0.2s;

      :hover {
        background: ${theme.colors.secondaryDark};
      }
    }
  `}
`;