import { createReducer, combineReducers } from '@reduxjs/toolkit';
import actions from './contacts-actions';
import { fetchContacts } from './contacts-operations';

// const INITIAL_STATE = [
//   { id: 'id-1', name: 'Rosie Simpson', number: '459-12-56' },
//   { id: 'id-2', name: 'Hermione Kline', number: '443-89-12' },
//   { id: 'id-3', name: 'Eden Clements', number: '645-17-79' },
//   { id: 'id-4', name: 'Annie Copeland', number: '227-91-26' },
// ];

const items = createReducer([], {
  [fetchContacts.fulfilled]: (_, action) => action.payload,
  // [actions.addContact]: (state, { payload }) => [...state, payload],
  // [actions.deleteContact]: (state, { payload }) =>
  //   state.filter(contact => contact.name !== payload),
});

const isLoading = createReducer(false, {
  [fetchContacts.pending]: () => true,
  [fetchContacts.fulfilled]: () => false,
  [fetchContacts.rejected]: () => false,
});

const error = createReducer(null, {
  [fetchContacts.rejected]: (_, action) => action.payload,
  [fetchContacts.pending]: () => null,
});

const filter = createReducer('', {
  [actions.filter]: (_, { payload }) => payload,
});

export default combineReducers({ items, isLoading, error, filter });
