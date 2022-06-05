import { useState } from 'react';
import {
  EnterButton,
  TextField,
  CheckBox,
  Typography,
  Form,
} from '../../components';
import { Container, Logo } from './components';
import { validateUserName } from '../../utils';
import { useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { addUserName } from '../../store/user';
import styled from 'styled-components';
import { AppDispatch } from '../../store';

const ContainerButton = styled.div`
  display: flex;
  justify-content: center;
`;

const Home: React.FC = () => {
  const navigate = useNavigate();
  const dispatch: AppDispatch = useDispatch();
  const [checked, setChecked] = useState<boolean>(false);
  const [userName, setUserName] = useState<string>('');
  const [error, setError] = useState<string>('');

  const handleChangeCheck = (event: React.ChangeEvent<HTMLInputElement>) => {
    setChecked(event.target.checked);
  };

  const handleChangeName = (event: React.ChangeEvent<HTMLInputElement>) => {
    setUserName(event.target.value);
  };

  const handleSubmit = () => {
    const error = validateUserName(userName);
    setError(error);
    if (error) return;
    dispatch(addUserName(userName));
    navigate('/dashboard');
  };

  return (
    <Container>
      <Form onSubmit={handleSubmit}>
        <Typography
          margin="0px 0px 14px"
          fontSize="14px"
          label="Please, enter your full name below"
        />
        <Typography
          margin="0px 0px 14px"
          fontSize="14px"
          label="Only alphabetical characters are accepted"
        />
        <TextField
          placeholder="Full name"
          error={error}
          value={userName}
          onChange={handleChangeName}
        />
        <CheckBox
          checked={checked}
          onChange={handleChangeCheck}
          label="Are you older than 18 years old?"
        />
        <ContainerButton>
          <EnterButton disabled={!checked}>Enter</EnterButton>
        </ContainerButton>
      </Form>
      <Logo />
    </Container>
  );
};

export default Home;
