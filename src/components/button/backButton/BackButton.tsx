import { useNavigate } from 'react-router-dom';
import back from '../../../assets/image/back.svg';
import styled from 'styled-components';

const StyledLogo = styled.img`
  width: 48px;
  height: 48px;
  @media (max-width: 625px) {
    width: 30px;
    height: 30px;
  }
`;

const StyledButton = styled.button`
  background: transparent;
  border: none;
  cursor: pointer;
  display: flex;
  align-items: center;
`;

const StyledSpan = styled.span`
  font-size: 30px;
  margin-left: 20px;
  @media (max-width: 625px) {
    font-size: 22px;
    margin-left: 10px;
  }
`;

const BackButton: React.FC = () => {
  const navigate = useNavigate();

  return (
    <StyledButton onClick={() => navigate(-1)}>
      <StyledLogo src={back} alt="Go back" />
      <StyledSpan>Go back</StyledSpan>
    </StyledButton>
  );
};

export default BackButton;
