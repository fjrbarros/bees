import { render } from '@testing-library/react';
import Button from './Button';

describe('<Button />', () => {
  it('shound render/unrender button', () => {
    const { getByRole, unmount } = render(<Button>Button test</Button>);
    const button = getByRole('button', { name: /button test/i });

    expect(button).toBeInTheDocument();
    unmount();
    expect(button).not.toBeInTheDocument();
  });
});
