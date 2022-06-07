import styled from 'styled-components';

const StyledGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
  grid-gap: 15px;
  padding: 20px;
`;

interface Props {
  children: React.ReactNode;
}

const Grid: React.FC<Props> = ({ children }) => {
  return <StyledGrid>{children}</StyledGrid>;
};

export default Grid;
