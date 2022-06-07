import { useSelector } from 'react-redux';
import { RootState } from '../../store';
import { BackButton } from '../';
import styled from 'styled-components';

const StyledHeader = styled.header`
  height: 72px;
  padding: 20px;
  background-color: #f2ec54;
  display: flex;
  align-items: center;
  justify-content: space-between;
  position: sticky;
  top: 0;
  z-index: 9999;
  @media (max-width: 600px) {
    display: block;
    padding: 10px;
    height: auto;
  }
`;

const UserName = styled.p`
  font-size: 30px;
  @media (max-width: 700px) {
    font-size: 22px;
  }
`;

const StyledTextField = styled.input`
  border: 1px solid #d4d4d8;
  border-radius: 4px;
  padding: 5px;
  font-size: 16px;
  @media (max-width: 600px) {
    display: none;
  }
`;

const ScondTextfield = styled(StyledTextField)`
  display: none;
  margin-top: 10px;
  width: 100%;
  @media (max-width: 600px) {
    display: block;
  }
`;

const Box = styled.div`
  display: flex;
  align-items: center;
  flex: 1;
  justify-content: space-between;
`;

interface Props {
  onChangeSearch?: (value: string) => void;
}

const Header: React.FC<Props> = ({ onChangeSearch }) => {
  const { name } = useSelector((data: RootState) => data.user);

  return (
    <StyledHeader>
      <Box>
        <BackButton />
        <UserName>{name}</UserName>
        <StyledTextField
          placeholder="Search..."
          name="teste"
          onChange={e => {
            if (onChangeSearch) {
              onChangeSearch(e.target.value);
            }
          }}
        />
      </Box>
      <ScondTextfield
        placeholder="Search..."
        onChange={e => {
          if (onChangeSearch) {
            onChangeSearch(e.target.value);
          }
        }}
      />
    </StyledHeader>
  );
};

export default Header;
