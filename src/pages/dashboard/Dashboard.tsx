import { useEffect } from 'react';
import { toast } from 'react-toastify';
import { PageWrapper, Loading } from '../../components';
import { Grid, NoData, Card } from './components';
import { useDispatch, useSelector } from 'react-redux';
import { AppDispatch, RootState } from '../../store';
import { fetchBreweries } from '../../api/brewerie';

const Dashboard: React.FC = () => {
  const dispatch: AppDispatch = useDispatch();
  const { loading, error, data } = useSelector(
    (data: RootState) => data.brewerie,
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

  return (
    <PageWrapper>
      {!data.length ? (
        <NoData />
      ) : (
        <Grid>
          {data.map(brewery => (
            <Card key={brewery.id} brewery={brewery} />
          ))}
        </Grid>
      )}
    </PageWrapper>
  );
};

export default Dashboard;
