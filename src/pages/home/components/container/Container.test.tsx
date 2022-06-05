import { render } from '@testing-library/react';
import Container from './Container';

describe('<Container />', () => {
  it('should render/unrender container', () => {
    const { getByText, unmount } = render(
      <Container>test container</Container>,
    );
    const container = getByText(/test container/i);

    expect(container).toBeInTheDocument();
    unmount();
    expect(container).not.toBeInTheDocument();
  });
});
