import { render } from '@testing-library/react';
import NoData from './NoData';

describe('<NoData />', () => {
  it('should render/unrender no data', () => {
    const { getByText, unmount } = render(<NoData />);
    const noData = getByText(/no data to display/i);

    expect(noData).toBeInTheDocument();
    unmount();
    expect(noData).not.toBeInTheDocument();
  });
});
