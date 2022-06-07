import { renderUi, fireEvent } from '../../../../../../utils';
import { removeCard } from '../../../../../../store/brewery';
import CardHeader from './CardHeader';
import store from '../../../../../../store';

describe('<CardHeader />', () => {
  it('should render city state country', () => {
    const { getByText, getByRole } = renderUi(<CardHeader name="test" />);
    const name = getByText(/test/i);
    const button = getByRole('button');
    const icon = getByRole('img', { name: /remove card/i });

    expect(name).toBeInTheDocument();
    expect(button).toBeInTheDocument();
    expect(icon).toBeInTheDocument();
  });

  it('should dispatch on click button', () => {
    const { getByRole } = renderUi(<CardHeader name="test" />);
    const button = getByRole('button');

    expect(button).toBeInTheDocument();

    fireEvent.click(button);

    expect(store.dispatch(removeCard('1'))).toEqual({
      payload: '1',
      type: 'brewery/removeCard',
    });
  });
});
