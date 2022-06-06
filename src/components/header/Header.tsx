import { useSelector } from 'react-redux';
import { RootState } from '../../store';
import { BackButton } from '../';
import styled from 'styled-components';

const StyledHeader = styled.header`
  height: 72px;
  padding: 14px 40px 13px 20px;
  background-color: #f2ec54;
  display: flex;
  align-items: center;
  justify-content: space-between;
  position: sticky;
  top: 0;
  @media (max-width: 600px) {
    height: 50px;
  }
`;

const UserName = styled.p`
  font-size: 30px;
  @media (max-width: 625px) {
    font-size: 22px;
  }
`;

const Header: React.FC = () => {
  const { name } = useSelector((data: RootState) => data.user);

  return (
    <StyledHeader>
      <BackButton />
      <UserName>{name}</UserName>
    </StyledHeader>
  );
};

export default Header;
