import React from 'react';

import { SelectProps } from './Select';

import { Container } from './styles';

const Select: React.FC<SelectProps> = ({
  name,
  label,
  options,
  defaultText = 'Selecione uma opção',
  ...rest
}) => {
  return (
    <Container>
      <label htmlFor={name}>{label}</label>
      <select value="" id={name} {...rest}>
        <option value="" disabled hidden>
          {defaultText}
        </option>

        {options.map((option) => (
          <option key={option.value} value={option.value}>
            {option.label}
          </option>
        ))}
      </select>
    </Container>
  );
};

export default Select;
