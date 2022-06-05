import { useState } from 'react';
import {
  Button,
  TextField,
  CheckBox,
  Typography,
  Form,
} from '../../components';
import { Container, Logo } from './components';
import { validateUserName } from '../../utils';
import styled from 'styled-components';

const ContainerButton = styled.div`
  display: flex;
  justify-content: center;
`;

const Home: React.FC = () => {
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
  };

  return (
    <Container>
      <Form onSubmit={handleSubmit}>
        <Typography label="Please, enter your full name below" />
        <Typography label="Only alphabetical characters are accepted" />
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
          <Button disabled={!checked}>Enter</Button>
        </ContainerButton>
      </Form>
      <Logo />
    </Container>
  );
};

export default Home;
