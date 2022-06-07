export interface IBrewery {
  id: string;
  name: string;
  brewery_type: string;
  street: string;
  address_2: string;
  address_3: string;
  city: string;
  state: string;
  county_province: string;
  postal_code: string;
  country: string;
  longitude: number;
  latitude: number;
  phone: string;
  website_url: string;
  updated_at: string;
  created_at: string;
  tags: ITag[];
}

export interface IInitialState {
  loading: boolean;
  error: string | undefined;
  data: IBrewery[];
}

export interface ITag {
  text: string;
  value: string;
}
