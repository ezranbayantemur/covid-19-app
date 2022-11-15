import React from 'react';
import Router from './router/Router';
import ReduxProvider from './redux/ReduxProvider';

export default function App() {
  return (
    <ReduxProvider>
      <Router />
    </ReduxProvider>
  );
}
