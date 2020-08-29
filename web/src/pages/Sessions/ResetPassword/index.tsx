import React, { useState, FormEvent, useEffect } from 'react';

import SessionsHero from '../../../components/SessionsHero';
import Input from '../../../components/Input';
import Button from '../../../components/Button';
import ArrowBack from '../../../components/ArrowBack';

import { Container, ProffyHero, FormContainer, FormWrapper } from './styles';


const ResetPassword: React.FC = () => {
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [token, setToken] = useState('');
  const [id, setId] = useState('');

  useEffect(() => {
    const { search } = window.location;

    const params = new URLSearchParams(search);
    
    const tokenParam = params.get('token');
    const idParam = params.get('id');

    if (tokenParam) setToken(tokenParam);
    if (idParam) setId(idParam);

    console.log(tokenParam, idParam);
  }, []);

  function handleSubmit(e: FormEvent) {
    e.preventDefault();
    
    console.log(password);
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
            <h1>Redefina sua senha</h1>

            <Input 
              variant='sessions' 
              type='password'
              name="password" 
              label="Nova senha" 
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              minLength={8}
              required 
            />

            <Input 
              variant='sessions' 
              type='password'
              name="confirm-password" 
              label="Confirmar senha" 
              value={confirmPassword}
              onChange={(e) => setConfirmPassword(e.target.value)}
              minLength={8}
              required 
            />

            <Button 
              type='submit' 
              disabled={!(password && confirmPassword && password === confirmPassword)? true : false}
            >
              Alterar senha
            </Button>
          </form>
        </FormWrapper>

      </FormContainer>
    </Container>
  );
}

export default ResetPassword;