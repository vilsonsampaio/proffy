import React from 'react';

import { Proffy } from '../../assets/images';

import { Container } from './styles';

const SessionsHero: React.FC = () => {
  return (
    <Container>
      <div>
        <Proffy />

        <h2>Sua plataforma de estudos online.</h2>
      </div>
    </Container>
  );
}

export default SessionsHero;