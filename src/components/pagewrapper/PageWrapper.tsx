import styled from 'styled-components';
import { Header } from '../';

const Main = styled.main`
  background-color: ${props => props.theme.colors.secondary};
  min-height: calc(100vh - 72px);
  @media (max-width: 600px) {
    min-height: calc(100vh - 50px);
  }
`;

interface Props {
  children?: React.ReactNode;
}

const PageWrapper: React.FC<Props> = ({ children }) => {
  return (
    <>
      <Header />
      <Main>{children}</Main>
    </>
  );
};

export default PageWrapper;
