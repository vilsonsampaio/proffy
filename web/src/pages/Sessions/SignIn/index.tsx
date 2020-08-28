import React from 'react';
import { Link } from 'react-router-dom';

import Input from '../../../components/Input';
import Button from '../../../components/Button';

import SessionsHero from '../../../components/SessionsHero';

import { HeartIcon } from '../../../assets/images/icons';

import { Container, ProffyHero, FormContainer, FormWrapper } from './styles';

const SignIn: React.FC = () => {
  return (
    <Container>
      <ProffyHero>
        <SessionsHero />
      </ProffyHero>
      
      <FormContainer>
        <FormWrapper>
        
        <form>
          <h1>Fazer login</h1>

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
          
          <span>
            <div>
              <input type="checkbox" id="remember"/>

              <label htmlFor="remember">Lembrar-me</label>
            </div>
            
            <Link to="/sessions/forgot-password">Esqueci minha senha</Link>
          </span>


          <Button type='submit'>Entrar</Button>
        </form>

        <div>
          <span>
            Não tem conta?
            <Link to="/sessions/sign-up">Cadastre-se</Link>
          </span>
         
          <p>
            É de graça <HeartIcon />
          </p>
        </div>
        </FormWrapper>

      </FormContainer>
    </Container>
  );
}

export default SignIn;