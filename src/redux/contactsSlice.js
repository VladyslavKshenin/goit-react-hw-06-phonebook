import dataContacts from '../Data/dataContacts.json';
import { createSlice } from '@reduxjs/toolkit';
import { persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';
import { nanoid } from 'nanoid/non-secure';

const contactsSlice = createSlice({
  name: 'contacts',
  initialState: {list:dataContacts},
  reducers: {
    addNewContact(state, action) {
      const { name, number } = action.payload;
      const newContact = {
        id: nanoid(),
        name,
        number,
          };
          state.list.push(newContact);
    },
    deleteContact(state, action) {
      const { id } = action.payload;
      state.list = state.list.filter(contact => contact.id !== id);
    },
  },
});
const persistConfig = {
  key: 'contacts',
  storage,
};

export const { addNewContact, deleteContact } = contactsSlice.actions;
export const contactsReducer = persistReducer(
  persistConfig,
  contactsSlice.reducer
);