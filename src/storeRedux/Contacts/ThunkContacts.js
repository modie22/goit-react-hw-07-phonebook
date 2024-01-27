import { createAsyncThunk } from "@reduxjs/toolkit"
import { removeContact, addContact, getAllContacts } from "api/contactsApi";
import { Loading } from 'notiflix/build/notiflix-loading-aio';

export const getContactsThunk = createAsyncThunk(
    'contacts/getContacts', async (_, { rejectWithValue }) => {
        try {
            Loading.circle('Loading...', {
                notiflixIconColor: 'red',
            });
            const { data } = await getAllContacts()
            return data
        } catch (error) {
            console.log('error', error)
            return rejectWithValue(error)
        } finally {
            Loading.remove();
        }
    }
)

export const createContactsThunk = createAsyncThunk(
    'contacts/addContacts', async (body, { rejectWithValue }) => {
        try {

            return await addContact(body)
        } catch (error) {
            console.log('error', error)
            return rejectWithValue(error)
        }
    }
)

export const removeContactThunk = createAsyncThunk(
    'contact/removeContacts', async (id, { rejectWithValue }) => {
        try {
            const data = await removeContact(id)
            console.log('data :>> ', data);
            return data
        } catch (error) {
            console.log('error', error)
            return rejectWithValue(error)
        }
    }
)
