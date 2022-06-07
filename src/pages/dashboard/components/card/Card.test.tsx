import { renderUi, screen } from '../../../../utils';
import Card from './Card';

const card = {
  id: 'boring-brewing-co-llc-boring',
  name: 'Boring Brewing Co., LLC',
  brewery_type: 'micro',
  street: '29300 SE Haley Road Ste B',
  address_2: '',
  address_3: '',
  city: 'Boring',
  state: 'Oregon',
  county_province: '',
  postal_code: '97009',
  country: 'United States',
  longitude: 1,
  latitude: 2,
  phone: '5034278619',
  website_url: 'http://www.boringbrewing.com',
  updated_at: '2021-10-23T02:24:55.243Z',
  created_at: '2021-10-23T02:24:55.243Z',
  tags: [
    { text: 'tag_1', value: 'tag 1' },
    { text: 'tag_2', value: 'tag 2' },
  ],
};

describe('<Card />', () => {
  it('should render card', () => {
    renderUi(<Card brewery={card} />);

    expect(screen.getByText(/boring brewing co\., llc/i)).toBeInTheDocument();
    expect(
      screen.getByRole('button', { name: /remove card/i }),
    ).toBeInTheDocument();
    expect(
      screen.getByText(/boring, oregon - united states/i),
    ).toBeInTheDocument();
    expect(screen.getByRole('img', { name: /tag 1/i })).toBeInTheDocument();
    expect(screen.getByText(/tag 2/i)).toBeInTheDocument();
  });
});
