import React from 'react';
import Router from './router/Router';
import ReduxProvider from './redux/ReduxProvider';
import Initial from './container/Initial';

export default function App() {
  return (
    <ReduxProvider>
      <Initial>
        <Router />
      </Initial>
    </ReduxProvider>
  );
}
