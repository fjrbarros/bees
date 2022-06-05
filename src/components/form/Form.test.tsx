import { fireEvent, render } from '@testing-library/react';
import Form from './Form';

describe('<Form/ >', () => {
  it('should submit form', () => {
    const spy = jest.fn();
    const { container, getByRole } = render(
      <Form onSubmit={spy}>
        <button>test</button>
      </Form>,
    );

    const form = container.querySelector('div > form');

    expect(form).toBeInTheDocument();

    const button = getByRole('button', { name: /test/i });

    fireEvent.submit(button);

    expect(spy).toBeCalled();
  });

  it('should not submit form', () => {
    const spy = jest.fn();
    const { container, getByRole } = render(
      <Form>
        <button>test</button>
      </Form>,
    );

    const form = container.querySelector('div > form');

    expect(form).toBeInTheDocument();

    const button = getByRole('button', { name: /test/i });

    fireEvent.submit(button);

    expect(spy).not.toBeCalled();
  });
});
