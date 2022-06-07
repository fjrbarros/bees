import styled from 'styled-components';
import { ITag } from '../../../../../../store/brewery/types';
import { Tag } from '..';

const CardTagStyled = styled.div`
  padding: 10px;
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
  tags: ITag[];
  cardId: string;
}

const CardTags: React.FC<Props> = ({ tags, cardId }) => {
  return (
    <CardTagStyled>
      <Ul>
        {tags.map((tag, index) => (
          <Li key={index}>
            <Tag tag={tag} cardId={cardId} />
          </Li>
        ))}
      </Ul>
    </CardTagStyled>
  );
};

export default CardTags;
