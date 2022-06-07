import { render } from '@testing-library/react';
import Loading from './Loading';

describe('<Loading />', () => {
  it('should render/unrender loading', () => {
    const { container, unmount } = render(<Loading />);

    expect(container.firstChild).toBeInTheDocument();
    unmount();
    expect(container.firstChild).not.toBeInTheDocument();
  });
});
