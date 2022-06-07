import { renderUi, screen } from '../../utils';
import NotFound from './NotFound';

describe('<NotFound />', () => {
  it('should render page not found', () => {
    renderUi(<NotFound />);

    expect(screen.getByText(/whoops! Page not found!/i));
    expect(screen.getByRole('button', { name: /home/i }));
  });
});
