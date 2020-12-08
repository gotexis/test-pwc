import { createStore, applyMiddleware, Store, compose } from 'redux';
import thunk from 'redux-thunk';
import { persistStore, persistReducer, PersistConfig } from 'redux-persist';
import storage from 'redux-persist/lib/storage';

import { rootReducer } from 'store/todo/reducers';

const reduxPersistConfig: PersistConfig<any> = {
  key: 'application',
  storage,
};

const pReducer = persistReducer(reduxPersistConfig, rootReducer);

const composeEnhancers = (window as any).__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

export const store: Store = createStore(pReducer, composeEnhancers(applyMiddleware(thunk)));

export const persistor = persistStore(store);
