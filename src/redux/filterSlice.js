import { createSlice } from '@reduxjs/toolkit';

const tasksInitialState = {
  filters: '',
};

export const contactsFilter = createSlice({
  name: 'filters',
  initialState: tasksInitialState.filters,
  reducers: {
    filterContacts: (state, action) => {
      return (state = action.payload);
    },
  },
});

export const { filterContacts } = contactsFilter.actions;
