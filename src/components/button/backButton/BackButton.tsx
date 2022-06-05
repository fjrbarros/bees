import { useNavigate } from 'react-router-dom';
import { Typography } from '../../';
import back from '../../../assets/image/back.svg';
import styled from 'styled-components';

const StyledLogo = styled.img`
  width: 48px;
  height: 48px;
`;

const StyledButton = styled.button`
  background: transparent;
  border: none;
  cursor: pointer;
  display: flex;
  align-items: center;
`;

const BackButton: React.FC = () => {
  const navigate = useNavigate();

  return (
    <StyledButton onClick={() => navigate(-1)}>
      <StyledLogo src={back} />
      <Typography
        component="span"
        label="Go back"
        fontSize="30px"
        margin="0 0 0 20px"
      />
    </StyledButton>
  );
};

export default BackButton;
