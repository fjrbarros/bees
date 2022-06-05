import { useSelector } from 'react-redux';
import { RootState } from '../../store';
import { BackButton } from '../';
import { Typography } from '../';
import styled from 'styled-components';

const StyledHeader = styled.header`
  height: 72px;
  padding: 14px 40px 13px 20px;
  background-color: #f2ec54;
  display: flex;
  align-items: center;
`;

const Flex = styled.div`
  flex: 1;
`;

const Header: React.FC = () => {
  const { name } = useSelector((data: RootState) => data.user);

  return (
    <StyledHeader>
      <Flex>
        <BackButton />
      </Flex>
      <Flex></Flex>
      <Flex>
        <Typography
          component="p"
          fontSize="30px"
          textAlign="end"
          label={name}
        />
      </Flex>
    </StyledHeader>
  );
};

export default Header;
