import { render } from '@testing-library/react';
import Logo from './Logo';

describe('<Logo />', () => {
  it('should render/unrender logo', () => {
    const { getByRole, unmount } = render(<Logo />);
    const img = getByRole('img', { name: /logo/i });

    expect(img).toBeInTheDocument();
    unmount();
    expect(img).not.toBeInTheDocument();
  });
});
