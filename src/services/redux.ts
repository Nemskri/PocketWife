import AsyncStorage from '@react-native-async-storage/async-storage';
import { configureStore, createSlice } from '@reduxjs/toolkit';
import { persistStore, persistReducer, FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER } from 'redux-persist';

const slice = createSlice({
  name: 'state',
  initialState: {
    pin: null as string | null,
  },
  reducers: {
    storePin: (state, action) => {
      state.pin = action.payload;
    },
    clearPin: (state)=>{
      state.pin == null
    },
    killStore: (state)=>{
      state.pin = null
    }
  },
});

const asyncConfig = {
  key: 'root',
  storage: AsyncStorage,
};

const persistedReducer = persistReducer(asyncConfig, slice.reducer);

export const { storePin,  killStore, clearPin} = slice.actions;

const store = configureStore({
  reducer: persistedReducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    }),
});

const persistor = persistStore(store);

export { store, persistor };
