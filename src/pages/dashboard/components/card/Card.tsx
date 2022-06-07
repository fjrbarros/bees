import { IBrewery } from '../../../../store/brewery/types';
import { CardHeader, CardBody, CardTags } from './components';
import styled from 'styled-components';

const CardWrapper = styled.div`
  background-color: #ffffff;
  border: 1px solid #000000;
  border-radius: 4px;
`;

interface Props {
  brewery: IBrewery;
}

const Card: React.FC<Props> = ({ brewery }) => {
  return (
    <CardWrapper>
      <CardHeader name={brewery.name} cardId={brewery.id} />
      <CardBody
        city={brewery.city}
        state={brewery.state}
        country={brewery.country}
      />
      <CardTags tags={brewery.tags} cardId={brewery.id} />
    </CardWrapper>
  );
};

export default Card;
