import dataContacts from '../Data/dataContacts.json';
import { createSlice } from '@reduxjs/toolkit';
import { nanoid } from 'nanoid/non-secure';
import { toast } from 'react-toastify';

const contactsSlice = createSlice({
  name: 'contacts',
  initialState: dataContacts,
  reducers: {
    addNewContact(state, action) {
      const { name, number } = action.payload;
      const newContact = {
        id: nanoid(),
        name,
        number,
      };
        if (
        state.some(
          contact =>
            contact.name.toLowerCase() === newContact.name.toLowerCase().trim()
        )
      ) {
        toast.warn(`${newContact.name} is already in your contacts`, {
          position: 'top-right',
          theme: 'colored',
        });
      } else {
        state.push(newContact);
      }
    },
    deleteContact(state, action) {
      const { id } = action.payload;
      return state.filter(contact => contact.id !== id);
    },
  },
});

export const { addNewContact, deleteContact } = contactsSlice.actions;
export const contactsReducer = contactsSlice.reducer;