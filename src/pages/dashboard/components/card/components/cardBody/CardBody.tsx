import styled from 'styled-components';

const CardBodyStyled = styled.div`
  padding: 10px;
`;

interface Props {
  city: string;
  state: string;
  country: string;
}

const CardBody: React.FC<Props> = ({ city, state, country }) => {
  return (
    <CardBodyStyled>
      <span>
        {city}, {state} - {country}
      </span>
    </CardBodyStyled>
  );
};

export default CardBody;
