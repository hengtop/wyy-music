import { memo } from 'react';
import { renderRoutes } from 'react-router-config';

import routes from './router';

import SaberHeader from 'components/app-header';
import SaberFooter from 'components/app-footer';

export default memo(function App() {
  return (
    <div>
      <SaberHeader></SaberHeader>
      {renderRoutes(routes)}
      <SaberFooter></SaberFooter>
    </div>
  );
});
