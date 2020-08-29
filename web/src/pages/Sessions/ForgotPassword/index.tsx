import React, { useState, FormEvent } from 'react';

import SessionsHero from '../../../components/SessionsHero';
import Input from '../../../components/Input';
import Button from '../../../components/Button';
import ArrowBack from '../../../components/ArrowBack';

import { Container, ProffyHero, FormContainer, FormWrapper } from './styles';


const ForgotPassword: React.FC = () => {
  const [email, setEmail] = useState('');

  function handleSubmit(e: FormEvent) {
    e.preventDefault();
    
    console.log(email);
  }

  return (
    <Container>
      <ProffyHero>
        <SessionsHero />
      </ProffyHero>
      
      <FormContainer>
        <FormWrapper>
          <ArrowBack to='/sessions/sign-in' />

          <form onSubmit={handleSubmit}>
            <h1>Eita, esqueceu sua senha?</h1>
            <h2>Não esquenta, vamos dar um jeito nisso.</h2>

            <Input 
              variant='sessions' 
              type='email'
              name="email" 
              label="E-mail" 
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required 
            />

            <Button 
              type='submit' 
              disabled={!email ? true : false}
            >
              Enviar
            </Button>
          </form>
        </FormWrapper>

      </FormContainer>
    </Container>
  );
}

export default ForgotPassword;