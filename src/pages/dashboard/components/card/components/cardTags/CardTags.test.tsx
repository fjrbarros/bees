import { renderUi, screen } from '../../../../../../utils';
import CardTags from './CardTags';

const tags = [
  {
    text: 'tag_1',
    value: 'tag 1',
  },
  {
    text: 'tag_2',
    value: 'tag 2',
  },
];

describe('<CardTags />', () => {
  it('should render tags', () => {
    renderUi(<CardTags tags={tags} cardId="1" />);

    expect(screen.getByText(/tag 1/i)).toBeInTheDocument();
    expect(screen.getByText(/tag 2/i)).toBeInTheDocument();
  });
});
