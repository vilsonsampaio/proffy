import React, { useState } from 'react';
import { useTheme } from 'styled-components';
import { FiEye, FiEyeOff } from 'react-icons/fi';
import InputMask from 'react-input-mask';

import { InputProps } from './Input';

import { Container } from './styles';


const Input: React.FC<InputProps> = ({ variant = 'default', type = 'text', mask, name, label, ...rest }) => {
  const [visibility, setVisibility] = useState(false);

  const { colors } = useTheme();

  return (
    <Container variant={variant}>
      {variant !== 'sessions' 
        ? <label htmlFor={name}>{label}</label>
        : '' 
      }

      {mask
        ? <InputMask 
            mask={mask}
            id={name} 
            placeholder={
              variant === 'sessions'
                ? label
                : ''
            } 
            {...rest} 
          />
        : <input 
            type={
              type === 'password'
                ? visibility ? 'text' : 'password'
                : `${type}`
            } 
            id={name} 
            placeholder={
              variant === 'sessions'
                ? label
                : ''
            } 
            {...rest} 
          />
      }
      

      {variant === 'sessions' 
        ? <label htmlFor={name}>{label}</label>
        : '' 
      }

      {type === 'password' 
        ? 
          (
            <button type="button" onClick={() => setVisibility(!visibility)}>
              {visibility 
                ? <FiEyeOff color={colors.primary} /> 
                : <FiEye />
              }
            </button>
          )
        : ''
      }
    </Container>
  );
}

export default Input;