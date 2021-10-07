import { memo } from 'react';
import { renderRoutes } from 'react-router-config';
import { BrowserRouter } from 'react-router-dom';

import routes from './router';

import SaberHeader from 'components/app-header';
import SaberFooter from 'components/app-footer';

export default memo(function App() {
  return (
    <div>
      <BrowserRouter>
        <SaberHeader></SaberHeader>
        {renderRoutes(routes)}
        <SaberFooter></SaberFooter>
      </BrowserRouter>
    </div>
  );
});
