import React from 'react';
import styled from 'styled-components';

interface IContainer {
  margin?: string;
}

const Container = styled('div')<IContainer>`
  width: 100%;
  display: flex;
  flex-direction: column;
  margin: ${props => props.margin || 0};
`;

const StyledTextField = styled('input')<Props>`
  border: 1px solid #d4d4d8;
  border-radius: 4px;
  height: ${({ height }) => height || '43px'};
  width: ${({ width }) => width || '100%'};
  padding: ${({ padding }) => padding || '10px 12px 9px'};
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
  margin?: string;
  width?: string;
  height?: string;
  padding?: string;
  autoFocus?: boolean;
  onChange?: (event: React.ChangeEvent<HTMLInputElement>) => void;
}

const TextField: React.FC<Props> = ({
  placeholder,
  value,
  error,
  onChange,
  margin,
  width,
  height,
  padding,
  autoFocus,
}) => {
  return (
    <Container margin={margin}>
      <StyledTextField
        placeholder={placeholder}
        value={value}
        onChange={onChange}
        width={width}
        height={height}
        padding={padding}
        autoFocus={autoFocus}
      />
      {error && <Error>{error}</Error>}
    </Container>
  );
};

export default TextField;
