import { render } from '@testing-library/react';
import Typography from './Typography';

describe('<Typography />', () => {
  it('shound render/unrender typography', () => {
    const { getByText, unmount } = render(
      <Typography label="Test typography" />,
    );

    const typography = getByText(/test typography/i);

    expect(typography).toBeInTheDocument();
    unmount();
    expect(typography).not.toBeInTheDocument();
  });
});
