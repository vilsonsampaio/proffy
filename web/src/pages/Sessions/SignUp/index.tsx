import React from 'react';

import Input from '../../../components/Input';
import Button from '../../../components/Button';

import SessionsHero from '../../../components/SessionsHero';


import { Container, ProffyHero, FormContainer, FormWrapper } from './styles';
import ArrowBack from '../../../components/ArrowBack';

const SignUp: React.FC = () => {
  return (
    <Container>
      <ProffyHero>
        <SessionsHero />
      </ProffyHero>
      
      <FormContainer>
        <FormWrapper>
          <ArrowBack to='/sessions/sign-in' />

          <form>
            <h1>Cadastro</h1>
            <h2>Preencha os dados abaixo para começar.</h2>

            <Input 
              variant='sessions' 
              type='text'
              name="name" 
              label="Nome" 
              required 
            />

            <Input 
              variant='sessions' 
              type='text'
              name="surname" 
              label="Sobrenome" 
              required 
            />

            <Input 
              variant='sessions' 
              type='email'
              name="email" 
              label="E-mail" 
              required 
            />

            <Input 
              variant='sessions' 
              type='password'
              name="password" 
              label="Senha" 
              required 
            />

            <Button type='submit'>Concluir cadastro</Button>
          </form>
        </FormWrapper>

      </FormContainer>
    </Container>
  );
}

export default SignUp;