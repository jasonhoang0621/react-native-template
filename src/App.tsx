import {NavigationContainer} from '@react-navigation/native';
import React from 'react';
import Toast from 'react-native-toast-message';
import {QueryCache, QueryClient, QueryClientProvider} from 'react-query';
import {Provider} from 'react-redux';
import Navigation from 'src/navigation';
import store from 'src/store';

const queryCache = new QueryCache();
const queryClient = new QueryClient({
  queryCache,
  defaultOptions: {
    queries: {
      retry: false,
      refetchOnWindowFocus: false,
      keepPreviousData: true,
      notifyOnChangeProps: 'tracked',
    },
  },
});

const App = () => {
  return (
    <NavigationContainer>
      <QueryClientProvider client={queryClient}>
        <Provider store={store}>
          <Navigation />
          <Toast />
        </Provider>
      </QueryClientProvider>
    </NavigationContainer>
  );
};

export default App;
