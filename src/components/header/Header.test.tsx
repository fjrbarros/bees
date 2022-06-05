import { renderUi } from '../../utils';
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
});
