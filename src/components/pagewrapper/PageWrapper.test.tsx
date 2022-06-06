import { renderUi } from '../../utils';
import PageWrapper from './PageWrapper';

describe('<PageWrapper />', () => {
  it('should render/unrender pagewrapper', () => {
    const { getByRole, unmount } = renderUi(
      <PageWrapper>
        <h1>Test</h1>
      </PageWrapper>,
    );
    const header = getByRole('banner');
    const children = getByRole('heading', { name: /test/i });

    expect(header).toBeInTheDocument();
    expect(children).toBeInTheDocument();
    unmount();
    expect(header).not.toBeInTheDocument();
    expect(children).not.toBeInTheDocument();
  });
});
