import { render } from '@testing-library/react';
import IconButton from './IconButton';

describe('<IconButton />', () => {
  it('should render icon button', () => {
    const { getByText } = render(<IconButton>teste</IconButton>);

    expect(getByText(/test/i)).toBeInTheDocument();
  });
});
