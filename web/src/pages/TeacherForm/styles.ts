import styled, { css } from 'styled-components';

import {
  Container as PageHeaderContainer,
  HeaderContent,
} from '../../components/PageHeader/styles';
import { Container as InputContainer } from '../../components/Input/styles';
import { Container as SelectContainer } from '../../components/Select/styles';
import { Container as TextareaContainer } from '../../components/Textarea/styles';

interface AvatarProps {
  avatarURL: string | null;
}

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

      @media (min-width: 700px) {
        > ${PageHeaderContainer} {
          ${HeaderContent} {
            margin-bottom: 0;
          }
        }

        > ${Main} {
          padding-top: 6.4rem;

          ${Fieldset} {
            padding: 0 6.4rem;

            &:nth-child(2) {
              > div {
                :first-of-type {
                  display: flex;
                  align-items: center;

                  div {
                    :first-of-type {
                      flex: 1;
                    }
                  }

                  ${InputContainer} {
                    max-width: 22rem;

                    margin-top: 0;
                    margin-left: 4rem;
                  }
                }
              }
            }
          }

          ${ScheduleItemContainer} {
            grid-template-columns: 2fr 1fr 1fr;

            ${SelectContainer} {
              grid-column: 1 / 2;
            }

            ${InputContainer} {
              margin-top: 0 !important;
            }
          }

          ${Footer} {
            display: flex;
            align-items: center;
            justify-content: space-between;

            padding: 4rem 6.4rem;

            div {
              justify-content: space-between;
              margin: 0;
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
    padding-top: 4rem;

    background: ${theme.colors.shapesPrimary};

    border: 0.1rem solid ${theme.colors.backgroundLinesInWhite};
    border-radius: 0.8rem;

    overflow: hidden;

    &
      ${InputContainer}
      + ${TextareaContainer},
      &
      ${SelectContainer}
      + ${InputContainer} {
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
    padding: 0 4rem;

    border: 0;

    & + & {
      margin-top: 6.4rem;
    }

    &:first-child {
      > div {
        :first-of-type {
          display: flex;
          align-items: center;

          margin-bottom: 3rem;

          div {
            :first-of-type {
              display: flex;
              align-items: center;

              margin-right: auto;

              h2 {
                color: ${theme.colors.textTitle};

                margin-left: 2.4rem;

                font: 700 2rem Archivo;
                line-height: 2.5rem;
              }
            }
          }

          ${InputContainer} {
            max-width: 22rem;
          }
        }
      }
    }

    & > legend {
      display: flex;
      align-items: center;
      justify-content: space-between;

      width: 100%;

      margin-bottom: 2.4rem;
      padding-bottom: 1.6rem;

      color: ${theme.colors.textTitle};

      font: 600 2.4rem Archivo;
      line-height: 3.4rem;

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

export const Avatar = styled.div<AvatarProps>`
  ${({ theme, avatarURL }) => css`
    width: 8rem;
    height: 8rem;

    background: ${avatarURL
      ? `url('${avatarURL}')`
      : theme.colors.primaryDarker};
    background-size: cover;
    background-position: center center;

    border-radius: 50%;
  `}
`;

export const ScheduleItemContainer = styled.div`
  ${({ theme }) => css`
    display: grid;
    grid-template-columns: 1fr 1fr;
    column-gap: 1.6rem;

    :only-of-type {
      fieldset {
        display: none;
        overflow: hidden;
        pointer-events: none;
      }
    }

    & + & {
      margin-top: 2.4rem;
    }

    ${SelectContainer} {
      grid-column: 1 / -1;
    }

    ${InputContainer} {
      margin-top: 2.4rem !important;
    }

    fieldset {
      grid-column: 1 / -1;

      display: block;

      margin-top: 1.6rem;

      border: none;
      border-top: 0.1rem solid ${theme.colors.backgroundLinesInWhite};

      text-align: center;

      cursor: pointer;
    }

    fieldset legend {
      padding: 5px 10px;

      color: ${theme.colors.textDelete};

      font: 600 1.4rem Archivo;
      line-height: 2.4rem;
    }
  `}
`;

export const Footer = styled.footer`
  ${({ theme }) => css`
    margin-top: 6.4rem;
    padding: 4rem 2.4rem;

    background: ${theme.colors.shapesSecondary};

    border-top: 0.1rem solid ${theme.colors.backgroundLinesInWhite};

    div {
      display: flex;
      align-items: center;
      justify-content: center;

      margin-bottom: 2.4rem;

      svg {
        width: 3.2rem;
        height: auto;

        margin-right: 1.6rem;

        path {
          stroke: ${theme.colors.primary};
        }
      }

      p {
        color: ${theme.colors.textComplement};

        font: 400 1.4rem Poppins;
        line-height: 2.4rem;

        span {
          display: block;

          color: ${theme.colors.primary};
        }
      }
    }
  `}
`;
