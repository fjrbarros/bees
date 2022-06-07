import { getIconTag } from './getIconTag';
import phone from '../../assets/image/phone.svg';
import location from '../../assets/image/location.svg';
import typeBrewery from '../../assets/image/typeBrewery.svg';
import addMore from '../../assets/image/more.svg';
import check from '../../assets/image/check.svg';

describe.each`
  value             | expected
  ${''}             | ${''}
  ${'phone'}        | ${phone}
  ${'brewery_type'} | ${typeBrewery}
  ${'postal_code'}  | ${location}
  ${'add_more'}     | ${addMore}
  ${'check'}        | ${check}
`('getIconTag', ({ value, expected }) => {
  it(`should return "${expected}" if argument is "${value}"`, () => {
    expect(getIconTag(value)).toEqual(expected);
  });
});
