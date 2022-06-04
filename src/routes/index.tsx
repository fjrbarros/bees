import { BrowserRouter, Routes as RouteWrapper, Route } from 'react-router-dom';
import { Home } from '../pages';

const Routes = () => {
  return (
    <BrowserRouter>
      <RouteWrapper>
        <Route path="/" element={<Home />} />
      </RouteWrapper>
    </BrowserRouter>
  );
};

export default Routes;
