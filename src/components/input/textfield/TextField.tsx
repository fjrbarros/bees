import React from 'react';
import styled from 'styled-components';

const Container = styled.div`
  margin-bottom: 16px;
  width: 100%;
  display: flex;
  flex-direction: column;
`;

const StyledTextField = styled.input`
  border: 1px solid #d4d4d8;
  border-radius: 4px;
  height: 43px;
  padding: 10px 12px 9px;
  font-size: 16px;
`;

const Error = styled.span`
  color: #ff0000;
  padding: 5px 0;
  font-size: 14px;
`;

interface Props {
  placeholder?: string;
  value?: string;
  error?: string;
  onChange?: (event: React.ChangeEvent<HTMLInputElement>) => void;
}

const TextField: React.FC<Props> = ({
  placeholder,
  value,
  error,
  onChange,
}) => {
  return (
    <Container>
      <StyledTextField
        placeholder={placeholder}
        value={value}
        onChange={onChange}
      />
      {error && <Error>{error}</Error>}
    </Container>
  );
};

export default TextField;
