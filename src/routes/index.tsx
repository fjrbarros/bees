import { BrowserRouter, Routes as RouteWrapper, Route } from 'react-router-dom';
import { Home, Dashboard } from '../pages';

const Routes = () => {
  return (
    <BrowserRouter>
      <RouteWrapper>
        <Route path="/" element={<Home />} />
        <Route path="/dashboard" element={<Dashboard />} />
      </RouteWrapper>
    </BrowserRouter>
  );
};

export default Routes;
