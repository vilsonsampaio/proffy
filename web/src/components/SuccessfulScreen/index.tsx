import React from 'react';
import { useHistory } from 'react-router-dom';

import { SuccessfulScreenProps } from './SuccessfulScreen';

import { SuccessIcon } from '../../assets/images/icons';

import { Container, Wrapper, Title, Description, Button } from './styles';


const SuccessfulScreen: React.FC<SuccessfulScreenProps> = ({ title, description, buttonText, href }) => {
  const history = useHistory();

  function handleClick() {
    history.push(href);
  }

  return (
    <Container>
      <Wrapper>
        <SuccessIcon />

        <Title>{title}</Title>
        <Description>{description}</Description>

        <Button onClick={handleClick}>{buttonText}</Button>
      </Wrapper>
    </Container>
  );
    
}

export default SuccessfulScreen;