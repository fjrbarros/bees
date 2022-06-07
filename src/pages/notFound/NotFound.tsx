import styled from 'styled-components';
import { useNavigate } from 'react-router-dom';

const StyledContainer = styled.div`
  position: relative;
  background-color: #f2ec54;
  height: 100vh;
  width: 100vw;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
`;

const StyledButton = styled.button`
  padding: 8px 16px;
  width: 75px;
  height: 40px;
  background: #5d5fef;
  cursor: pointer;
  border-radius: 4px;
  color: #ffffff;
  border: none;
  margin-top: 20px;
`;

const StyledP = styled.p`
  font-size: 2rem;
  @media (max-width: 400px) {
    font-size: 1.5rem;
  }
`;

const NotFound: React.FC = () => {
  const navigate = useNavigate();

  return (
    <StyledContainer>
      <StyledP>Whoops! Page not found!</StyledP>
      <StyledButton onClick={() => navigate('/dashboard')}>Home</StyledButton>
    </StyledContainer>
  );
};

export default NotFound;
