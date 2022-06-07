import Tag from './Tag';
import { renderUi, screen, fireEvent } from '../../../../../../utils';
import store from '../../../../../../store';
import { addTagCard } from '../../../../../../store/brewery';

describe('<Tag />', () => {
  it('should render default tag', () => {
    const tagProp = { text: 'test_tag', value: 'test tag' };
    renderUi(<Tag tag={tagProp} cardId="1" />);

    expect(screen.getByRole('img', { name: /test tag/i })).toBeInTheDocument();
    expect(screen.getByText(/test tag/i)).toBeInTheDocument();
  });

  it('should render form tag', () => {
    const tagProp = { text: 'add_more', value: 'add more' };
    const { container } = renderUi(<Tag tag={tagProp} cardId="1" />);
    const tag = container.querySelector(
      'div > div:nth-child(1)',
    ) as HTMLElement;

    fireEvent.click(tag);

    const input = screen.getByRole('textbox');

    expect(screen.getByRole('button', { name: /check/i })).toBeInTheDocument();
    expect(input).toBeInTheDocument();

    fireEvent.keyDown(tag, { key: 'Escape' });

    expect(input).not.toBeInTheDocument();
  });

  it('should dispatch on submit new tag', () => {
    const tagProp = { text: 'add_more', value: 'add more' };
    const { container } = renderUi(<Tag tag={tagProp} cardId="1" />);
    const tag = container.querySelector(
      'div > div:nth-child(1)',
    ) as HTMLElement;

    fireEvent.click(tag);

    const form = container.querySelector(
      'div > div:nth-child(1) > form',
    ) as HTMLElement;
    const input = screen.getByRole('textbox');

    fireEvent.change(input, { target: { value: 'new tag' } });

    fireEvent.submit(form);

    expect(
      store.dispatch(addTagCard({ cardId: '1', value: 'new tag' })),
    ).toEqual({
      payload: { cardId: '1', value: 'new tag' },
      type: 'brewery/addTagCard',
    });

    expect(input).not.toBeInTheDocument();

    expect(screen.getByText(/add more/i)).toBeInTheDocument();
  });
});
