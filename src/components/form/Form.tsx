import { SyntheticEvent } from 'react';
import styled from 'styled-components';

const StyledForm = styled.form`
  display: flex;
  flex-direction: column;
`;

interface Props {
  children: React.ReactNode;
  onSubmit?: (event: SyntheticEvent) => void;
}

const Form: React.FC<Props> = ({ children, onSubmit }) => {
  const handleSubmit = (event: SyntheticEvent) => {
    event.preventDefault();
    if (onSubmit) {
      onSubmit(event);
    }
  };

  return <StyledForm onSubmit={handleSubmit}>{children}</StyledForm>;
};

export default Form;
