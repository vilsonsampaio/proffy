import React from 'react';

import { TextareaProps } from './Textarea';

import { Container } from './styles';


const Textarea: React.FC<TextareaProps> = ({ name, label, ...rest }) => {
  return (
    <Container>
      <label htmlFor={name}>{label}</label>
      <textarea id={name} {...rest} />
    </Container>
  );
}

export default Textarea;