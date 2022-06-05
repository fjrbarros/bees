import { renderUi, fireEvent } from '../../../utils';
import { render } from '@testing-library/react';
import { BrowserRouter } from 'react-router-dom';
import { createMemoryHistory } from 'history';
import BackButton from './BackButton';

describe('<BackButton />', () => {
  it('should render/unrender button', () => {
    const { getByRole, unmount } = renderUi(<BackButton />);

    const button = getByRole('button', { name: /go back/i });
    const img = getByRole('img', { name: /go back/i });

    expect(button).toBeInTheDocument();
    expect(img).toBeInTheDocument();
    unmount();
    expect(button).not.toBeInTheDocument();
    expect(img).not.toBeInTheDocument();
  });

  it('should navigate to the previous page by clicking the button', () => {
    const history = createMemoryHistory();
    const { getByRole } = render(
      <BrowserRouter>
        <BackButton />
      </BrowserRouter>,
    );
    const button = getByRole('button', { name: /go back/i });

    expect(button).toBeInTheDocument();

    fireEvent.click(button);

    expect(history.location.pathname).toEqual('/');
  });
});
