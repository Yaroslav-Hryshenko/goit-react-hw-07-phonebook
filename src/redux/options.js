import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

const BASIC_URL =
  'https://651946a6818c4e98ac6037f7.mockapi.io/Phonebook/contacts/';
export const fetchContacts = createAsyncThunk(
  'contacts/fetchAll',
  async (_, thunkAPI) => {
    try {
      const { data } = await axios.get(BASIC_URL);
      return data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

export const addContact = createAsyncThunk(
  'contacts/addContact',
  async (contacts, thunkAPI) => {
    try {
      const { data } = await axios.post(BASIC_URL, contacts);
      return data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

export const deleteContact = createAsyncThunk(
  'contacts/deleteContact',
  async (id, thunkAPI) => {
    try {
      const { data } = await axios.delete(`${BASIC_URL}/${id}`);
      return data; 
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

