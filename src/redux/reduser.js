import { contactsSlice } from './contactSlice';
import { contactsFilter } from './filterSlice';

export const reducer = {
  contacts: contactsSlice.reducer,
  filters: contactsFilter.reducer,
};
