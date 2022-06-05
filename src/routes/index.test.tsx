import { render } from '@testing-library/react';
import Routes from '.';

describe('<Routes />', () => {
  it('should render page home', () => {
    const { getByText } = render(<Routes />);

    expect(
      getByText(/please, enter your full name below/i),
    ).toBeInTheDocument();
  });
});
