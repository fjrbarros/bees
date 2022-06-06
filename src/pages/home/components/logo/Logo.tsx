import styled from 'styled-components';
import logo from '../../../../assets/image/logo.svg';

const StyledLogo = styled.img`
  position: absolute;
  bottom: 15px;
  left: 29px;
  @media (max-width: 800px) {
    width: 150px;
    height: 150px;
  }
  @media (max-width: 600px) {
    width: 100px;
    height: 100px;
    bottom: 10px;
    left: 10px;
  }
`;

const Logo: React.FC = () => {
  return <StyledLogo src={logo} alt="Logo" />;
};

export default Logo;
