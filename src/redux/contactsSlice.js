import { createSlice, nanoid } from "@reduxjs/toolkit";
import storage from 'redux-persist/lib/storage';
import {persistReducer} from 'redux-persist';

const contactsInitialState = [
    {id: 'id-1', name: 'Rosie Simpson', number: '459-12-56'},
    {id: 'id-2', name: 'Hermione Kline', number: '443-89-12'},
    {id: 'id-3', name: 'Eden Clements', number: '645-17-79'},
    {id: 'id-4', name: 'Annie Copeland', number: '227-91-26'},
];

  export const contactsSlice = createSlice({
    name: 'contacts',
    initialState: {
        contacts: contactsInitialState,
        filter: ''
    },
    reducers: {
        addContact: {
            reducer(state,{payload}){
                state.contacts.push(payload)
            },
            prepare(text){
                return {
                payload: {
                    id: nanoid(),
                    ...text,
                },
                };
            }
        },
        deleteContact: {
            reducer(state,{payload}){
                state.contacts = state.contacts.filter(contact =>contact.id!==payload)
            }
        },
        setFilter: {
            reducer(state, {payload}){
                state.filter = payload;
            },
        }
    }
});

const persistConfig = {
    key: 'contacts',
    version: 1,
    storage,
};

export const {addContact, deleteContact, setFilter} = contactsSlice.actions;
export const contactsReducer = persistReducer(persistConfig, contactsSlice.reducer);

export const getContacts = state => state.contacts.contacts;
export const getFilter = state => state.contacts.filter;