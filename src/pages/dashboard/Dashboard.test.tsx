import { renderUi, screen } from '../../utils';
import Dashboard from './Dashboard';

describe('<Dashboard />', () => {
  it('should render loading on page', () => {
    const { getByTestId } = renderComponent({ loading: true });
    expect(getByTestId('loading')).toBeInTheDocument();
  });

  it('should render error on page', async () => {
    const state = { loading: false, error: 'Error test.' };
    renderComponent(state);

    expect(await screen.findByText(/Error test./i)).toBeInTheDocument();
  });

  it('should render not data to display on page', () => {
    renderComponent();

    expect(screen.getByText(/no data to display/i)).toBeInTheDocument();
  });

  it('should render card', () => {
    renderComponent({
      data: [
        {
          id: 'bent-shovel-brewing-oregon-city',
          name: 'Bent Shovel Brewing',
          brewery_type: 'micro',
          street: '21678 S Latourette Rd',
          address_2: null,
          address_3: null,
          city: 'Oregon City',
          state: 'Oregon',
          county_province: null,
          postal_code: '97045-9453',
          country: 'United States',
          longitude: null,
          latitude: null,
          phone: '5038980220',
          website_url: 'http://www.bentshovelbrewing.com',
          updated_at: '2021-10-23T02:24:55.243Z',
          created_at: '2021-10-23T02:24:55.243Z',
          tags: [{ teste: 'test tag', value: 'test_tag' }],
        },
      ],
    });

    expect(screen.getByText(/bent shovel brewing/i)).toBeInTheDocument();
  });
});

const renderComponent = (state = {}) => {
  const defaultState = {
    brewery: { loading: false, data: [], error: '', ...state },
  };

  return renderUi(<Dashboard />, {
    preloadedState: defaultState,
  });
};
