import { useDispatch } from 'react-redux';
import styled from 'styled-components';
import remove from '../../../../../../assets/image/remove.svg';
import { IconButton } from '../../../../../../components';
import { AppDispatch } from '../../../../../../store';
import { removeCard } from '../../../../../../store/brewery';

const CardHeaderStyled = styled.div`
  position: relative;
  padding: 10px;
`;

const Icon = styled.img`
  width: 17px;
  height: 17px;
  position: absolute;
  top: 7px;
  right: 7px;
`;

interface Props {
  name: string;
  cardId?: string;
}

const CardHeader: React.FC<Props> = ({ name, cardId }) => {
  const dispatch: AppDispatch = useDispatch();

  const handleRemoveCard = () => {
    dispatch(removeCard(cardId));
  };

  return (
    <CardHeaderStyled>
      <span>{name}</span>
      <IconButton onClick={handleRemoveCard}>
        <Icon src={remove} alt="remove card" />
      </IconButton>
    </CardHeaderStyled>
  );
};

export default CardHeader;
