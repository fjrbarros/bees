import { BrowserRouter, Routes as RouteWrapper, Route } from 'react-router-dom';
import { Home, Dashboard, NotFound } from '../pages';

const Routes = () => {
  return (
    <BrowserRouter>
      <RouteWrapper>
        <Route path="/" element={<Home />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="*" element={<NotFound />} />
      </RouteWrapper>
    </BrowserRouter>
  );
};

export default Routes;
