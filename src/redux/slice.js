import { createSlice } from "@reduxjs/toolkit";
// import { nanoid } from 'nanoid';
// import { toast } from 'react-toastify';


export const contactSlice = createSlice({
    name: 'contacts',
    initialState: [
        { id: 'id-1', name: 'Rosie Simpson', number: '459-12-56' },
        { id: 'id-2', name: 'Hermione Kline', number: '443-89-12' },
    ],
  
    reducers: {
        addContact: {
            addContact(state, { payload }) {
                state.items = [...state.items, payload];
            },
            delContact(state, { payload }) {
              
                state.items = state.items.filter(item => item.id !== payload);
            },
        },
    }
});


export const filterSlice = createSlice({
  name: 'filters',
  initialState: '',
  reducers: {
    filterContacts(state, action) {
      return action.payload;
    },
  },
});



export const { addContact, delContact } = contactSlice.actions;
export const contactsReducer = contactSlice.reducer;

export const { filterContacts } = filterSlice.actions;
export const filterReducer = filterSlice.reducer;