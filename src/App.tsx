import RoutesViews from './routes/Main';
import { store, persistor } from './store/store';
import { Provider } from 'react-redux';
import { PersistGate } from 'redux-persist/integration/react';

function App(): JSX.Element {
  return (
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <RoutesViews />
      </PersistGate>
    </Provider>
  );
}

export default App;
