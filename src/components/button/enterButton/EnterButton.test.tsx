import { render } from '@testing-library/react';
import EnterButton from './EnterButton';

describe('<EnterButton />', () => {
  it('shound render/unrender button', () => {
    const { getByRole, unmount } = render(
      <EnterButton>Button test</EnterButton>,
    );
    const button = getByRole('button', { name: /button test/i });

    expect(button).toBeInTheDocument();
    unmount();
    expect(button).not.toBeInTheDocument();
  });
});
