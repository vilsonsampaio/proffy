import React, { useState, FormEvent } from 'react';

import SessionsHero from '../../../components/SessionsHero';
import Input from '../../../components/Input';
import Button from '../../../components/Button';
import ArrowBack from '../../../components/ArrowBack';

import { Container, ProffyHero, FormContainer, FormWrapper } from './styles';


const SignUp: React.FC = () => {
  const [name, setName] = useState('');
  const [surname, setSurname] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  function handleSubmit(e: FormEvent) {
    e.preventDefault();
    
    console.log(name, surname, email, password);
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
            <h1>Cadastro</h1>
            <h2>Preencha os dados abaixo para começar.</h2>

            <Input 
              variant='sessions' 
              type='text'
              name="name" 
              label="Nome"  
              value={name}
              onChange={(e) => setName(e.target.value)}
              required 
            />

            <Input 
              variant='sessions' 
              type='text'
              name="surname" 
              label="Sobrenome" 
              value={surname}
              onChange={(e) => setSurname(e.target.value)}
              required 
            />

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

            <Button 
              type='submit' 
              disabled={
                !(name && surname && email && password)
                  ? true
                  : false
              }
            >
              Concluir cadastro
            </Button>
          </form>
        </FormWrapper>

      </FormContainer>
    </Container>
  );
}

export default SignUp;