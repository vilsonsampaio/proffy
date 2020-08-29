import React from 'react';

import { BackIcon } from '../../assets/images/icons';

import { Container } from './styles';

import { ArrowBackProps } from './ArrowBack';

const ArrowBack: React.FC<ArrowBackProps> = ({ to, ...rest }) => {
  return (
    <Container to={to} {...rest}>
      <BackIcon />
    </Container>
  );
}

export default ArrowBack;