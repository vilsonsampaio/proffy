import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

import ProfileHeader from '../../components/ProfileHeader';

import { Proffy, LandingIllustration } from '../../assets/images';

import { StudyIcon, GiveClassesIcon, HeartIcon } from '../../assets/images/icons';

import { Container, Wrapper, TopSection, BottomSection, IntroContainer, LogoContainer, ButtonsContainer, TotalConnections, BottomInfoContainer } from './styles';

import api from '../../services/api';
import { useAuth } from '../../hooks/auth';

const Landing: React.FC = () => {
  const { data, handleSignOut } = useAuth();
  
  const [totalConnections, setTotalConnections] = useState(0);

  useEffect(() => {
    api.get('connections').then(response => {
      const { total_connections } = response.data;
      console.log(total_connections)
      setTotalConnections(total_connections);
    })
  }, []);

  return (
    <Container>
      <TopSection>
        <Wrapper>
          <ProfileHeader data={data as null} handleSignOut={handleSignOut} />

          <IntroContainer>
            <LogoContainer>
              <Proffy />

              <h2>Sua plataforma de estudos online.</h2>         
            </LogoContainer>
            
            <LandingIllustration />
          </IntroContainer>
        </Wrapper>
      </TopSection>
        
      <BottomSection>
        <Wrapper>
          <BottomInfoContainer>
            <h2>
              Seja bem vindo,
              <span>O que deseja fazer?</span>
            </h2>

            <p>
              Total de {totalConnections} conex{totalConnections === 1 ? 'ão' : 'ões'}
              <span>já realizada{totalConnections === 1 ? '' : 's'} <HeartIcon /></span>
            </p>
          </BottomInfoContainer>
          
          <ButtonsContainer>
            <Link to="/study" className="study">
              <StudyIcon />
              Estudar
            </Link>
            
            <Link to="/give-classes" className="give-classes">
              <GiveClassesIcon />
              Dar aulas
            </Link>
          </ButtonsContainer>

          <TotalConnections>
            Total de {totalConnections} conex{totalConnections === 1 ? 'ão' : 'ões'} já realizada{totalConnections === 1 ? '' : 's'} <HeartIcon />
          </TotalConnections>
        </Wrapper>
      </BottomSection>
    </Container>
  )
}

export default Landing;
