import styled, { css } from 'styled-components';

export const Container = styled.div`
  ${({ theme }) => css`
    width: 100vw;
    height: 100vh;

    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;

    background: ${theme.colors.primary};
    color: ${theme.colors.textBaseInPrimary};

    @media (min-width: 1100px) {
      ${TopSection} {
        justify-content: flex-start;
        
        height: 65vh;

        margin-top: 2.4rem;

        ${IntroContainer} {
          flex-direction: row;

          margin-top: 6rem;
          
          ${LogoContainer} {
            margin: 0;
            margin-right: 8rem;

            text-align: left;

            svg {
              width: auto;
              height: 10.5rem;

              max-width: 30rem;
            }

            h2 {
              max-width: 30rem;

              font-size: 2.5rem;
            }
          }
        }        
      }

      ${BottomSection} {
        height: 35vh;

        background: ${theme.colors.background};

        ${Wrapper} {
          flex-direction: row;

          height: 10rem;

          margin-top: 5rem;

          ${BottomInfoContainer} {
            flex: 1;

            display: flex;
            align-items: center;
            justify-content: space-between;

            margin-right: 4rem;

            h2 {
              color: ${theme.colors.textBase};

              font: 400 1.8rem Poppins;
              
              span {
                display: block;
                font-weight: 600;
              }
            }

            p {
              font: 400 1.2rem Poppins;
              line-height: 2rem;

              color: ${theme.colors.textComplement};

              span {
                display: block;

                svg {
                  width: auto;
                  height: 1.2rem; 

                  opacity: 0.5;

                  > * {
                    fill: ${theme.colors.primary};
                  }
                }
              }
            }
          }

          ${ButtonsContainer} {
            max-width: 50rem;
          }

          > ${TotalConnections} {
            display: none;
          }
        }
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

    width: 100vw;

    max-width: 70vw;

    margin: 0 auto;
  `}
`;

export const TopSection = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

export const BottomSection = styled.section`
  width: 100%;
`;

export const IntroContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  > svg {
    width: 100%;
    height: auto;

    max-width: 60rem;
    max-height: 30rem;
  } 
`;

export const LogoContainer = styled.div`
  ${({ theme }) => css`
    margin: 3.2rem 0;

    text-align: center;

    svg {
      width: auto;
      height: 8rem;
    }

    h2 {
      margin-top: 0.5rem;

      font: 500 2rem Poppins;
      line-height: 1.28;
    }
  `}
`;

export const BottomInfoContainer = styled.div`
  display: none;
`;

export const ButtonsContainer = styled.div`
  ${({ theme }) => css`
    display: grid;
    grid-template-columns: 1fr 1fr; 
    column-gap: 1.6rem;

    width: 100%;

    max-width: 60rem;

    margin: 3.2rem 0;

    a {
      width: 100%;
      height: 10rem;

      display: flex;
      align-items: center;
      justify-content: center;

      color: ${theme.colors.textTitleInPrimary};
      font: 600 2rem Archivo;

      border-radius: ${theme.radius.default};

      text-decoration: none;

      transition: background-color 0.2s;

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

      svg {
        width: 4rem;
        height: auto;

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

    svg {
      margin-left: 0.8rem;
    }
  `}
`