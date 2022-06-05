import { fireEvent } from '@testing-library/react';
import { validateUserName } from '../../utils';
import { renderUi } from '../../utils';
import Home from './Home';

describe('<Home />', () => {
  it('should render message full name', () => {
    const { getByText } = renderUi(<Home />);
    expect(
      getByText(/please, enter your full name below/i),
    ).toBeInTheDocument();
  });

  it('should render message only alphabetical', () => {
    const { getByText } = renderUi(<Home />);
    expect(
      getByText(/only alphabetical characters are accepted/i),
    ).toBeInTheDocument();
  });

  it('should render input user name', () => {
    const { getByRole } = renderUi(<Home />);
    const input = getByRole('textbox') as HTMLInputElement;

    expect(input).toBeInTheDocument();

    fireEvent.change(input, { target: { value: '123' } });

    expect(input.value).toBe('123');
  });

  it('should render checkbox', () => {
    const { getByRole } = renderUi(<Home />);
    expect(
      getByRole('checkbox', { name: /are you older than 18 years old\?/i }),
    ).toBeInTheDocument();
  });

  it('should render button', () => {
    const { getByRole } = renderUi(<Home />);

    const button = getByRole('button', { name: /enter/i });
    const checkbox = getByRole('checkbox', {
      name: /are you older than 18 years old\?/i,
    });

    expect(button).toBeDisabled();
    expect(checkbox).not.toBeChecked();

    fireEvent.click(checkbox);

    expect(checkbox).toBeChecked();
    expect(button).not.toBeDisabled();
  });

  it('should render logo', () => {
    const { getByRole } = renderUi(<Home />);
    expect(getByRole('img', { name: /logo/i })).toBeInTheDocument();
  });

  it('should not error on submit form', () => {
    const { getByRole } = renderUi(<Home />);

    const button = getByRole('button', { name: /enter/i });
    const checkbox = getByRole('checkbox', {
      name: /are you older than 18 years old\?/i,
    });
    const input = getByRole('textbox') as HTMLInputElement;
    const userName = 'test form';
    fireEvent.change(input, { target: { value: userName } });

    fireEvent.click(checkbox);
    expect(button).not.toBeDisabled();

    fireEvent.submit(button);
    const error = validateUserName(userName);

    expect(error).toBe('');
  });

  it('should error on submit form', () => {
    const { getByRole } = renderUi(<Home />);

    const button = getByRole('button', { name: /enter/i });
    const checkbox = getByRole('checkbox', {
      name: /are you older than 18 years old\?/i,
    });
    const input = getByRole('textbox') as HTMLInputElement;
    const userName = 'test';
    fireEvent.change(input, { target: { value: userName } });

    fireEvent.click(checkbox);
    expect(button).not.toBeDisabled();

    fireEvent.submit(button);
    const error = validateUserName(userName);

    expect(error).toBe('Full name is required');
  });
});
