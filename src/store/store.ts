import { configureStore, ThunkAction, Action, AnyAction } from '@reduxjs/toolkit';
import { combineReducers, applyMiddleware } from 'redux';
import { createLogger } from 'redux-logger';
import { persistReducer, persistStore } from 'redux-persist';
import storage from 'redux-persist/lib/storage';
import thunk, { ThunkDispatch } from 'redux-thunk';

import dropdownSlice from './dropdownSlice';

const logger = createLogger();

const persistConfig = {
  key: 'root',
  storage,
};

const reducers = combineReducers({
  dropdown: dropdownSlice,
});

const persistedReducer = persistReducer(persistConfig, reducers);

export const store = configureStore({
  reducer: persistedReducer,
  middleware: [thunk, logger],
});

export const persistor = persistStore(store);

export type AppDispatch = typeof store.dispatch;
export type AppThunkDispatch = ThunkDispatch<RootState, any, AnyAction>;
export type RootState = ReturnType<typeof store.getState>;
export type AppThunk<ReturnType = void> = ThunkAction<ReturnType, RootState, unknown, Action<string>>;
