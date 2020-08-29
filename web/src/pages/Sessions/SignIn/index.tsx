import React, { useState, FormEvent } from 'react';
import { Link } from 'react-router-dom';

import SessionsHero from '../../../components/SessionsHero';
import Input from '../../../components/Input';
import Button from '../../../components/Button';

import { HeartIcon } from '../../../assets/images/icons';

import { Container, ProffyHero, FormContainer, FormWrapper } from './styles';


const SignIn: React.FC = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [rememberMe, setRememberMe] = useState(false);

  function handleSubmit(e: FormEvent) {
    e.preventDefault();

    console.log(email, password, rememberMe);
  }

  return (
    <Container>
      <ProffyHero>
        <SessionsHero />
      </ProffyHero>
      
      <FormContainer>
        <FormWrapper>
        
        <form onSubmit={handleSubmit}>
          <h1>Fazer login</h1>

          <Input 
            variant='sessions' 
            type='email'
            name="email" 
            label="E-mail" 
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required 
          />

          <Input 
            variant='sessions' 
            type='password'
            name="password" 
            label="Senha" 
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required 
          />
          
          <span>
            <div>
              <input 
                type="checkbox" 
                id="remember"
                checked={rememberMe}
                onChange={(e) => setRememberMe(e.target.checked)}
              />

              <label htmlFor="remember">Lembrar-me</label>
            </div>
            
            <Link to="/sessions/forgot-password">Esqueci minha senha</Link>
          </span>

          <Button 
            type='submit'
            disabled={
              !(email && password) 
                ? true 
                : false
            }
          >
              Entrar
          </Button>
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