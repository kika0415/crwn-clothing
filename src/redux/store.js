import { createStore, applyMiddleware } from 'redux';
import logger from 'redux-logger';
import { persistStore } from 'redux-persist';

import rootReducer from './rootReducer';

const middlerwares = [logger];

export const store = createStore(rootReducer, applyMiddleware(...middlerwares));

export const persistor = persistStore(store);

// export default {
//   store,
//   persistor,
// };
