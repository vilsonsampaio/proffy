import styled, { css } from 'styled-components';

import { ArrowBackProps } from './ArrowBack';

import { Link } from 'react-router-dom';

export const Container = styled(Link)<ArrowBackProps>`
  ${({ theme, color }) => css`
    width: 100%;

    svg g > * {
      stroke: ${color || theme.colors.primary};
    }
  `}
`;
