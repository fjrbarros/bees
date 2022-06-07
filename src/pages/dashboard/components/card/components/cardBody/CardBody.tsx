import styled from 'styled-components';
import HighLight from '../../../../../../components/highLight/HighLight';

const CardBodyStyled = styled.div`
  padding: 10px;
`;

interface Props {
  city: string;
  state: string;
  country: string;
  toHighLight?: string;
}

const CardBody: React.FC<Props> = ({ city, state, country, toHighLight }) => {
  return (
    <CardBodyStyled>
      <HighLight toHighLight={toHighLight}>{city}</HighLight>
      {', '}
      <HighLight toHighLight={toHighLight}>{state}</HighLight>
      {' - '}
      <HighLight toHighLight={toHighLight}>{country}</HighLight>
    </CardBodyStyled>
  );
};

export default CardBody;
