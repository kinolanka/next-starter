import { Action, ThunkAction, configureStore } from '@reduxjs/toolkit';
import {
  FLUSH,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER,
  REHYDRATE,
  createMigrate,
  persistReducer,
  persistStore
} from 'redux-persist';
import { TypedUseSelectorHook, useDispatch, useSelector } from 'react-redux';
import {
  getPersistedReducersList,
  getReducers,
  getTransforms
} from './helpers';

import autoMergeLevel2 from 'redux-persist/lib/stateReconciler/autoMergeLevel2';
// @ts-nocheck
import { combineReducers } from 'redux';
import migrations from './migrations';
import reducersConfig from './reducers';
import storage from 'redux-persist/lib/storage';

const STORE_VERSION = 0;

const persistConfig = {
  version: STORE_VERSION,
  key: 'primary',
  storage,
  whitelist: getPersistedReducersList(reducersConfig),
  transforms: getTransforms(reducersConfig),
  stateReconciler: autoMergeLevel2,
  migrate: createMigrate(migrations, {
    debug: process.env.VERCEL_ENV !== 'production'
  })
};

const reducers = getReducers(reducersConfig);

const combinedReducer = combineReducers(reducers);

const persistedReducer = persistReducer(persistConfig, combinedReducer);

export const store = configureStore({
  reducer: persistedReducer,
  middleware: getDefaultMiddleware =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER]
      }
    })
});

export const persistor = persistStore(store);

export type AppStateType = ReturnType<typeof store.getState>;

export type AppDispatchType = typeof store.dispatch;

export type AppThunkType<ReturnType = void> = ThunkAction<
  ReturnType,
  AppStateType,
  unknown,
  Action<string>
>;

export const useAppDispatch = () => useDispatch<AppDispatchType>();

export const useAppSelector: TypedUseSelectorHook<AppStateType> = useSelector;
