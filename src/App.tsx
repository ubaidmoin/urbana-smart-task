import React from 'react';
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { ApolloClient, InMemoryCache, ApolloProvider } from '@apollo/client';
import { SnackbarProvider } from 'notistack';
import Layout from './layouts/DashboardLayout';
import HomeScreen from './screens/home/Home';
import NotFoundScreen from './screens/not-found/NotFound';
import { StateProvider } from './services/state/State'
import { reducer } from './services/state/Reducer'
import { initialState } from './services/state/InitialState'

function App() {
  const client = new ApolloClient({
    uri: 'https://tmdb.apps.quintero.io/',
    cache: new InMemoryCache(),
  });
  
  return (
    <ApolloProvider client={client}>
    <SnackbarProvider maxSnack={2}>
      <StateProvider initialState={initialState} reducer={reducer}>
        <Router>
          <Layout>
            <Routes>
              <Route path="/" element={<HomeScreen />} />
              <Route path="*" element={<NotFoundScreen />} />
            </Routes>
          </Layout>
        </Router>
      </StateProvider>
    </SnackbarProvider>
    </ApolloProvider>
  );
}

export default App;
