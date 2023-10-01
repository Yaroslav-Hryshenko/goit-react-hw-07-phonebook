import { createSlice, isAnyOf } from '@reduxjs/toolkit';
import { addContact, fetchContacts, deleteContact } from 'redux/options';
import {
  addFulfilledContacts,
  contactsFulfilled,
  deleteFulfilledContacts,
  fetchFulfilledContacts,
  pendingContacts,
  rejectedContacts,
} from 'redux/contactFunction';

const tasksInitialState = {
  contacts: [],
  isLoading: false,
  error: null,
};

export const contactsSlice = createSlice({
  name: 'contacts',
  initialState: tasksInitialState,
  extraReducers: builder => {
    builder
      .addCase(fetchContacts.fulfilled, fetchFulfilledContacts)
      .addCase(addContact.fulfilled, addFulfilledContacts)
      .addCase(deleteContact.fulfilled, deleteFulfilledContacts)
      .addMatcher(
        isAnyOf(
          fetchContacts.fulfilled,
          addContact.fulfilled,
          deleteContact.fulfilled
        ),
        contactsFulfilled
      )
      .addMatcher(
        isAnyOf(
          fetchContacts.pending,
          addContact.pending,
          deleteContact.pending
        ),
        pendingContacts
      )
      .addMatcher(
        isAnyOf(
          fetchContacts.rejected,
          addContact.rejected,
          deleteContact.rejected
        ),
        rejectedContacts
      );
  },
});
