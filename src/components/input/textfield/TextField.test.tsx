import { render } from '@testing-library/react';
import TextField from './TextField';

describe('<TextField />', () => {
  it('shound render/unrender textfield', () => {
    const { getByRole, unmount } = render(
      <TextField placeholder="Test textfield" />,
    );

    const input = getByRole('textbox');

    expect(input).toBeInTheDocument();
    unmount();
    expect(input).not.toBeInTheDocument();
  });

  it('shound render error', () => {
    const { getByText } = render(<TextField error="Test error" />);

    const error = getByText(/test error/i);

    expect(error).toBeInTheDocument();
  });
});
