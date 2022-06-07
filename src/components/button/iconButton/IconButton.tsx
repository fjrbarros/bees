import styled from 'styled-components';

const StyledIconButton = styled.button`
  background: transparent;
  border: none;
  display: flex;
  cursor: pointer;
  border-radius: 50%;
  align-items: center;
  justify-content: center;
  margin-right: 5px;
`;

interface Props {
  children: React.ReactNode;
  onClick?: () => void;
}

const IconButton: React.FC<Props> = ({ children, onClick }) => {
  return <StyledIconButton onClick={onClick}>{children}</StyledIconButton>;
};

export default IconButton;
