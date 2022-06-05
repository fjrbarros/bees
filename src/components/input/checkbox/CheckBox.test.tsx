import { render } from '@testing-library/react';
import CheckBox from './CheckBox';

describe('<CheckBox />', () => {
  it('shound render/unrender checkbox', () => {
    const { getByRole, unmount, getByText } = render(
      <CheckBox label="test checkbox" />,
    );

    const checkbox = getByRole('checkbox', { name: /test checkbox/i });
    const label = getByText(/test checkbox/i);

    expect(checkbox).toBeInTheDocument();
    expect(label).toBeInTheDocument();
    unmount();
    expect(checkbox).not.toBeInTheDocument();
    expect(label).not.toBeInTheDocument();
  });
});
