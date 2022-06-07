import React, { useState } from 'react';
import { ITag } from '../../../../../../store/brewery/types';
import { getIconTag } from '../../../../../../utils/getIconTag/getIconTag';
import { TextField, Form, IconButton } from '../../../../../../components';
import styled from 'styled-components';
import { AppDispatch } from '../../../../../../store';
import { useDispatch } from 'react-redux';
import { addTagCard } from '../../../../../../store/brewery';

const StyledTag = styled('div')<Cursor>`
  background: #f2ec54;
  border-radius: 99px;
  padding: 7px 12px;
  display: flex;
  align-items: center;
  cursor: ${props => (props.cursor === 'true' ? 'pointer' : 'default')};
`;

const IconTag = styled.img`
  width: 20px;
  height: 20px;
`;

const TagValue = styled.span`
  margin-left: 5px;
`;

interface Props {
  tag: ITag;
  cardId: string;
}

interface Cursor {
  cursor: string;
}

const Tag: React.FC<Props> = ({ tag, cardId }) => {
  const dispatch: AppDispatch = useDispatch();
  const isAddMore = tag.text?.includes('add_more');
  const [showForm, setShowForm] = useState(false);
  const [value, setValue] = useState('');

  const handleClickTag = () => {
    setShowForm(isAddMore);
  };

  const handleKeyDown = (event: React.KeyboardEvent<HTMLDivElement>) => {
    if (event.key === 'Escape') {
      setShowForm(false);
      setValue('');
    }
  };

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setValue(event.target.value);
  };

  const handleSubmit = () => {
    dispatch(addTagCard({ cardId, value }));
    setValue('');
    setShowForm(false);
  };

  return (
    <StyledTag
      cursor={String(!showForm && isAddMore)}
      onClick={handleClickTag}
      onKeyDown={handleKeyDown}
    >
      {!showForm ? (
        <>
          {tag.text && <IconTag src={getIconTag(tag.text)} alt={tag.value} />}
          <TagValue>{tag.value}</TagValue>
        </>
      ) : (
        <Form alignItems="center" flexDirection="row" onSubmit={handleSubmit}>
          <IconButton>
            <IconTag src={getIconTag('check')} alt={'check'} />
          </IconButton>
          <TextField
            width="85px"
            height="20px"
            padding="3px"
            autoFocus={true}
            value={value}
            onChange={handleChange}
          />
        </Form>
      )}
    </StyledTag>
  );
};

export default Tag;
