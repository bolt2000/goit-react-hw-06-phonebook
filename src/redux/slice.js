import { createSlice } from '@reduxjs/toolkit';
import storage from 'redux-persist/lib/storage';
import { persistReducer } from 'redux-persist';

const persistConfig = {
  key: 'Book',
  storage,
  whitelist: ['items'],
};

export const contactSlice = createSlice({
  name: 'contacts',
  initialState: {
    items: [
      { id: 'id-1', name: 'Rosie Simpson', number: '459-12-56' },
      { id: 'id-2', name: 'Hermione Kline', number: '443-89-12' },
    ],
    filter: '',
  },

  reducers: {
    addContact(state, { payload }) {
      state.items.push(payload);
    },

    delContact(state, { payload }) {
      state.items = state.items.filter(item => item.id !== payload);
    },

    changeFilter(state, { payload }) {
      state.filter = payload;
    },
  },
});

export const persistedReducer = persistReducer(
  persistConfig,
  contactSlice.reducer
);

export const { addContact, delContact, changeFilter } = contactSlice.actions;
