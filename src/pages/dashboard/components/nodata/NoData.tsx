import styled from 'styled-components';

const Container = styled.p`
  font-size: 1.2rem;
  width: 100%;
  text-align: center;
  top: 50%;
  left: 50%;
  position: absolute;
  transform: translate(-50%, -50%);
`;

const NoData: React.FC = () => {
  return <Container>No data to display</Container>;
};

export default NoData;
