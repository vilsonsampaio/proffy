import styled, { css } from 'styled-components';

interface AvatarProps {
  avatarURL: string | null;
}

export const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;

  width: 100%;
  height: 4rem;
`;

export const ProfileWrapper = styled.div<AvatarProps>`
${({ theme, avatarURL }) => css`
  display: flex;
  align-items: center;

  cursor: pointer;
  
  > div {
    width: 4rem;
    height: 4rem;

    background: ${avatarURL ? `url('${avatarURL}')` : theme.colors.primaryDarker};
    background-size: cover;
    background-position: center center;

    border-radius: 50%;
  }

  > h4 {
    margin-left: 1.6rem;

    color: ${theme.colors.textBaseInPrimary};
    font: 500 1.4rem Poppins;
  }
`}
`;

export const Button = styled.button`
  ${({ theme }) => css`
    display: flex;
    align-items: center;
    justify-content: center;

    width: 4rem;
    height: 4rem;

    background: ${theme.colors.primaryDark};
    color: ${theme.colors.textBaseInPrimary};

    border: none;
    border-radius: ${theme.radius.default};

    outline: none;

    transition: background-color 0.2s;

    > svg {
      width: 2rem;
      height: auto;

      stroke-width: 2.5;
    }

    &:hover {
      background-color: ${theme.colors.primaryDark}b3;
    }
  `}
`;
