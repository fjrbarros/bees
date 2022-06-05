import styled from 'styled-components';

const StyledContainer = styled.div`
  position: relative;
  background-color: #f2ec54;
  height: 100vh;
  width: 100vw;
  display: flex;
  align-items: center;
  justify-content: center;
`;

interface Props {
  children?: React.ReactNode;
}

const Container: React.FC<Props> = ({ children }) => {
  return <StyledContainer>{children}</StyledContainer>;
};

export default Container;
