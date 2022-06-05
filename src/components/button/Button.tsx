import styled from 'styled-components';

const StyledButton = styled.button`
  padding: 8px 16px;
  width: 75px;
  height: 40px;
  background: ${props => (props.disabled ? '#52525b' : '#5D5FEF')};
  cursor: ${props => (props.disabled ? 'default' : 'pointer')};
  border-radius: 4px;
  color: #ffffff;
  border: none;
`;

interface Props {
  children: React.ReactNode;
  disabled?: boolean;
}

const Button: React.FC<Props> = ({ children, disabled }) => {
  return <StyledButton disabled={disabled}>{children}</StyledButton>;
};

export default Button;
