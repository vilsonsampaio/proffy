import React, { useState, FormEvent, useEffect, useCallback } from 'react';
import { useHistory } from 'react-router-dom';
import { toast } from 'react-toastify';

import { useAuth } from '../../hooks/auth';

import PageHeader from '../../components/PageHeader';
import Input from '../../components/Input';
import Button from '../../components/Button';
import Textarea from '../../components/Textarea';
import Select from '../../components/Select';
import SuccessfulScreen from '../../components/SuccessfulScreen';

import api from '../../services/api';
import { CHECK_TEACHER } from '../../services/endpoints';
import { CheckTeacherProps } from '../../services/endpoints.d';

import { subjectsNames, daysOfWeek } from '../../resources';
import { WarningIcon } from '../../assets/images/icons';

import {
  Container,
  Main,
  Fieldset,
  Footer,
  Avatar,
  ScheduleItemContainer,
} from './styles';

const TeacherForm = () => {
  const { data } = useAuth();

  const history = useHistory();

  const [subject, setSubject] = useState('');
  const [cost, setCost] = useState('');
  const [scheduleItems, setScheduleItems] = useState([
    { week_day: '', from: '', to: '' },
  ]);

  const [scheduleItemsValidation, setScheduleItemsValidation] = useState(false);

  const [alreadyTeacher, setAlreadyTeacher] = useState(false);

  const [displaySuccess, setDisplaySuccess] = useState(false);

  const goToProfile = useCallback(() => {
    history.push('/profile');
  }, [history]);

  useEffect(() => {
    async function checkTeacher() {
      try {
        const { path } = CHECK_TEACHER();

        const { data } = await api.get<CheckTeacherProps>(path);

        if (data.have_classes) {
          throw new Error('You already have a class registered');
        }

        setDisplaySuccess(true);

        setTimeout(() => setDisplaySuccess(false), 10 * 1000);
      } catch (error) {
        setAlreadyTeacher(true);
        console.error(error);

        toast.error(error.message);

        if (error.response) {
          toast.error(error.response.data.error);
        }

        goToProfile();
      }
    }

    checkTeacher();
  }, [goToProfile, history]);

  useEffect(() => {
    scheduleItems.forEach((item) => {
      if (!item.week_day || !item.from || !item.to)
        return setScheduleItemsValidation(false);

      return setScheduleItemsValidation(true);
    });
  }, [scheduleItems]);

  function addNewScheduleItem() {
    setScheduleItems([...scheduleItems, { week_day: '', from: '', to: '' }]);
  }

  function removeScheduleItem(position: number) {
    const serializedScheduleItem = [...scheduleItems];
    serializedScheduleItem.splice(position, 1);

    setScheduleItems(serializedScheduleItem);
  }

  function setScheduleItemValue(
    position: number,
    field: string,
    value: string
  ) {
    const updatedScheduleItems = scheduleItems.map((scheduleItem, index) => {
      if (index === position) {
        return { ...scheduleItem, [field]: value };
      }

      return scheduleItem;
    });

    setScheduleItems(updatedScheduleItems);
  }

  function handleCreateClass(e: FormEvent) {
    e.preventDefault();

    api
      .post('classes', {
        subject,
        cost: Number(cost),
        schedule: scheduleItems,
      })
      .then(() => {
        alert('Cadastro realizado com sucesso');

        history.push('/');
      })
      .catch(() => {
        alert('Erro no cadastro');
      });
  }

  if (!data) return null;

  if (displaySuccess)
    return (
      <SuccessfulScreen
        title="Cadastro salvo!"
        description="Tudo certo, seu cadastro está na nossa lista de professores. Agora é só ficar de olho no seu WhatsApp."
        buttonText="Voltar para landing"
        href="/"
        handleClose={() => setDisplaySuccess(false)}
      />
    );

  return (
    <Container className="container">
      <PageHeader
        pageTitle="Dar aulas"
        title="Que incrível que você quer dar aulas."
        description="O primeiro passo é preencher esse formulário de inscrição"
      />

      <Main>
        <form onSubmit={handleCreateClass}>
          <Fieldset>
            <legend>
              Seus dados
              <button type="button" onClick={goToProfile}>
                Alterar dados
              </button>
            </legend>

            <div>
              <div>
                <Avatar avatarURL={data.avatar} />

                <h2>
                  {data.name} {data.surname}
                </h2>
              </div>

              <Input
                mask="+55 (99) 99999-9999"
                name="whatsapp"
                label="WhatsApp"
                value={data.whatsapp ? data.whatsapp : ''}
                disabled
              />
            </div>

            <Textarea
              name="bio"
              label="Biografia"
              value={data.bio ? data.bio : ''}
              disabled
            />
          </Fieldset>

          <Fieldset>
            <legend>Sobre a aula</legend>

            <div>
              <Select
                name="subject"
                label="Matéria"
                defaultText="Selecione qual você quer ensinar"
                value={subject}
                onChange={(e) => setSubject(e.target.value)}
                options={subjectsNames}
              />

              <Input
                name="cost"
                label="Custo da sua hora por aula"
                placeholder="R$"
                type="number"
                value={cost}
                onChange={(e) => setCost(e.target.value)}
              />
            </div>
          </Fieldset>

          <Fieldset>
            <legend>
              Horários disponíveis
              <button type="button" onClick={addNewScheduleItem}>
                + Novo horário
              </button>
            </legend>

            {scheduleItems.map((scheduleItem, index) => {
              return (
                <ScheduleItemContainer key={index}>
                  <Select
                    name="week_day"
                    label="Dia da semana"
                    defaultText="Selecione o dia"
                    value={scheduleItem.week_day}
                    onChange={(e) =>
                      setScheduleItemValue(index, 'week_day', e.target.value)
                    }
                    options={daysOfWeek}
                  />

                  <Input
                    name="from"
                    label="Das"
                    type="time"
                    value={scheduleItem.from}
                    onChange={(e) =>
                      setScheduleItemValue(index, 'from', e.target.value)
                    }
                  />

                  <Input
                    name="to"
                    label="Até"
                    type="time"
                    value={scheduleItem.to}
                    onChange={(e) =>
                      setScheduleItemValue(index, 'to', e.target.value)
                    }
                  />

                  <fieldset onClick={() => removeScheduleItem(index)}>
                    <legend>Excluir horário</legend>
                  </fieldset>
                </ScheduleItemContainer>
              );
            })}
          </Fieldset>

          <Footer>
            <div>
              <WarningIcon />

              <p>
                <span>Importante!</span>
                Preencha todos os dados corretamente
              </p>
            </div>

            <Button
              type="submit"
              disabled={
                alreadyTeacher || !(subject && cost && scheduleItemsValidation)
              }
            >
              Salvar cadastro
            </Button>
          </Footer>
        </form>
      </Main>
    </Container>
  );
};

export default TeacherForm;
