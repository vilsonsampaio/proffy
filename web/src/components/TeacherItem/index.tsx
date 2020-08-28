import React from 'react';

import whatsappIcon from '../../assets/images/icons/whatsapp.svg';

import api from '../../services/api';

import { Container, Header, Bio, Footer } from './styles';
// import './styles.css';

export interface Teacher {
  id: number;
  name: string;
  avatar: string;
  whatsapp: string;
  bio: string;
  subject: string;
  cost: number;
}
interface TeacherItemProps {
  teacher: Teacher;
}

const TeacherItem: React.FC<TeacherItemProps> = ({ teacher }) => {
  function createNewConnection() {
    api.post('connections', {
      user_id: teacher.id,
    });
  }

  return (
    <Container>
      <Header>
        <img src={teacher.avatar} alt={teacher.name}/>
        <div>
          <strong>{teacher.name}</strong>
          <span>{teacher.subject}</span>
        </div>
      </Header>

      <Bio>{teacher.bio}</Bio>

      <Footer>
        <p>
          Preço/hora
          <strong>
            { teacher.cost
              .toLocaleString('pt-BR', 
                { 
                  style: 'currency', 
                  currency: 'BRL'
                }
              )
            }
          </strong>
        </p>
        
        <a 
          href={`https://wa.me/${teacher.whatsapp}`}
          onClick={createNewConnection} 
          target='_blank'
        >
          <img src={whatsappIcon} alt="Whatsapp"/>
          Entrar em contato
        </a>
      </Footer>
    </Container>
  );
}

export default TeacherItem;
