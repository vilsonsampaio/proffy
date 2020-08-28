import React from 'react';

import { Container } from './styles';

import { ButtonProps } from './Button';

const Button: React.FC<ButtonProps> = ({ children, type = 'button' }) => {
  return (
    <Container type={type}>
      {children}
    </Container>
  );
}

export default Button;