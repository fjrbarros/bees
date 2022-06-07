import { render } from '@testing-library/react';
import CardBody from './CardBody';

describe('<CardBody />', () => {
  it('should render city state country', () => {
    const { getByText } = render(
      <CardBody city="city" state="state" country="country" />,
    );

    expect(getByText(/city, state - country/i)).toBeInTheDocument();
  });
});
