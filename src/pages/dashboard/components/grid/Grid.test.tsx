import { render } from '@testing-library/react';
import Grid from './Grid';

describe('<Grid />', () => {
  it('should render grid', () => {
    const { getByText } = render(
      <Grid>
        <p>test</p>
      </Grid>,
    );

    expect(getByText(/test/i)).toBeInTheDocument();
  });
});
