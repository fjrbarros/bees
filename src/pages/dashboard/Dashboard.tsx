import { useEffect, useState } from 'react';
import { toast } from 'react-toastify';
import { PageWrapper, Loading } from '../../components';
import { Grid, NoData, Card } from './components';
import { useDispatch, useSelector } from 'react-redux';
import { AppDispatch, RootState } from '../../store';
import { fetchBreweries } from '../../api/brewery';
import { IBrewery } from '../../store/brewery/types';
import { lower } from '../../utils';

const Dashboard: React.FC = () => {
  const dispatch: AppDispatch = useDispatch();
  const [toHighLight, setToHighLight] = useState<string>('');
  const { loading, error, data } = useSelector(
    (data: RootState) => data.brewery,
  );

  useEffect(() => {
    if (!data.length) dispatch(fetchBreweries());
  }, [dispatch, data.length]);

  if (error) {
    toast.error(error, {
      autoClose: false,
      hideProgressBar: true,
      position: toast.POSITION.BOTTOM_LEFT,
    });
  }

  if (loading) {
    return <Loading />;
  }

  const afterChangeSearchInput = (value: string) => {
    setToHighLight(value);
  };

  const filterBreweryByText = (brewery: IBrewery) => {
    return (
      lower(brewery.name).includes(lower(toHighLight)) ||
      lower(brewery.city).includes(lower(toHighLight)) ||
      lower(brewery.state).includes(lower(toHighLight)) ||
      lower(brewery.country).includes(lower(toHighLight))
    );
  };

  return (
    <PageWrapper onChangeSearch={afterChangeSearchInput}>
      {!data.length ? (
        <NoData />
      ) : (
        <Grid>
          {data.filter(filterBreweryByText).map(brewery => (
            <Card
              key={brewery.id}
              brewery={brewery}
              toHighLight={toHighLight}
            />
          ))}
        </Grid>
      )}
    </PageWrapper>
  );
};

export default Dashboard;
