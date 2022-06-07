import { SyntheticEvent } from 'react';
import styled from 'styled-components';

const StyledForm = styled('form')<Props>`
  display: flex;
  flex-direction: ${({ flexDirection }) => flexDirection || 'column'};
  align-items: ${({ alignItems }) => alignItems || 'normal'};
`;

interface Props {
  children: React.ReactNode;
  flexDirection?: string;
  alignItems?: string;
  onSubmit?: (event: SyntheticEvent) => void;
}

const Form: React.FC<Props> = ({
  children,
  flexDirection,
  alignItems,
  onSubmit,
}) => {
  const handleSubmit = (event: SyntheticEvent) => {
    event.preventDefault();
    if (onSubmit) {
      onSubmit(event);
    }
  };

  return (
    <StyledForm
      onSubmit={handleSubmit}
      flexDirection={flexDirection}
      alignItems={alignItems}
    >
      {children}
    </StyledForm>
  );
};

export default Form;
