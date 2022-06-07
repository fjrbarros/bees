import { renderUi, screen, fireEvent } from '../../utils';
import Header from './Header';

describe('<Header />', () => {
  it('should render/unrender header', () => {
    const { container, unmount } = renderUi(<Header />);
    const header = container.querySelector('div > header');

    expect(header).toBeInTheDocument();
    unmount();
    expect(header).not.toBeInTheDocument();
  });

  it('should render go back button', () => {
    const { getByRole } = renderUi(<Header />);

    expect(
      getByRole('button', { name: /go back go back/i }),
    ).toBeInTheDocument();
  });

  it('should render user name', () => {
    const { getByText } = renderUi(<Header />, {
      preloadedState: { user: { name: 'user name' } },
    });

    expect(getByText(/user name/i)).toBeInTheDocument();
  });

  it('should execute onChangeSearch', () => {
    const spy = jest.fn();

    renderUi(<Header onChangeSearch={spy} />);

    const input = screen.getByRole('textbox');

    fireEvent.change(input, { target: { value: 'test' } });

    expect(spy).toBeCalled();
  });
});
