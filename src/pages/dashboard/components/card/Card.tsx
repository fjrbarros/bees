import styled from 'styled-components';
import { IBrewery, ITag } from '../../../../store/brewerie/types';
import exclude from '../../../../assets/image/delete.svg';
import location from '../../../../assets/image/location.svg';
import more from '../../../../assets/image/more.svg';
import micro from '../../../../assets/image/type.svg';
import phone from '../../../../assets/image/phone.svg';

const CardStyled = styled.div`
  background-color: #ffffff;
  border: 1px solid #000000;
  border-radius: 4px;
`;

const CardHeader = styled.div`
  position: relative;
  padding: 10px;
`;

const CardBody = styled.div`
  padding: 10px;
`;

const CardTags = styled.div`
  padding: 10px;
`;

const Tag = styled.div`
  background: #f2ec54;
  border-radius: 99px;
  padding: 5px 10px;
  display: flex;
  align-items: center;
  & > img {
    margin-right: 5px;
    width: 20px;
    height: 20px;
  }
`;

const Ul = styled.ul`
  list-style: none;
  overflow: hidden;
`;

const Li = styled.li`
  float: left;
  margin-left: 5px;
  margin-top: 10px;
`;

interface Props {
  brewery: IBrewery;
}

const Card: React.FC<Props> = ({ brewery }) => {
  const getLogo = (tag: ITag): string => {
    if (tag.text.includes('phone')) {
      return phone;
    }

    if (tag.text.includes('brewery_type')) {
      return micro;
    }

    if (tag.text.includes('postal_code')) {
      return location;
    }

    return '';
  };

  return (
    <CardStyled>
      <CardHeader>{brewery.name}</CardHeader>
      <CardBody>
        {brewery.city}, {brewery.state} - {brewery.country}
      </CardBody>
      <CardTags>
        <Ul>
          {brewery.tags.map((tag, index) => (
            <Li key={index}>
              <Tag>
                <img src={getLogo(tag)} />
                {tag.value}
              </Tag>
            </Li>
          ))}
          <Li>
            <Tag>
              <img src={more} />
              add more
            </Tag>
          </Li>
        </Ul>
      </CardTags>
    </CardStyled>
  );
};

export default Card;
