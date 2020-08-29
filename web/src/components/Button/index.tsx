import React from 'react';

import { Container } from './styles';

import { ButtonProps } from './Button';

const Button: React.FC<ButtonProps> = ({ children, type = 'button', ...rest }) => {
  return (
    <Container type={type} {...rest}>
      {children}
    </Container>
  );
}

export default Button;