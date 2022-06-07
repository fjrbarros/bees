import phone from '../../assets/image/phone.svg';
import location from '../../assets/image/location.svg';
import typeBrewery from '../../assets/image/typeBrewery.svg';
import addMore from '../../assets/image/more.svg';
import check from '../../assets/image/check.svg';

export const getIconTag = (tag: string): string => {
  if (tag.includes('phone')) {
    return phone;
  }

  if (tag.includes('brewery_type')) {
    return typeBrewery;
  }

  if (tag.includes('postal_code')) {
    return location;
  }

  if (tag.includes('add_more')) {
    return addMore;
  }

  if (tag.includes('check')) {
    return check;
  }

  return '';
};
