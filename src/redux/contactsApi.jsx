import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'

export const contactsApi = createApi({
  reducerPath: 'contactsApi',
  baseQuery: fetchBaseQuery({ baseUrl: 'https://64f8b3b9824680fd217ff512.mockapi.io/' }),
  tagTypes: ['Contact'],
  endpoints: (builder) => ({
    fetchContact: builder.query({
      query: () => `/contacts`,
      providesTags: ['Contact']
    }),
    deleteContact: builder.mutation({
      query: contactID => ({
        url: `/contacts/${contactID}`,
        method: 'DELETE',
      
      }),
      invalidatesTags: ['Contact'],
    }),
    addContact: builder.mutation({
      query: newContact => ({
        url: `/contacts`,
        method: 'POST',
        body: {
          name: newContact.name,
          number: newContact.number,
          
        },
   
      }),
      invalidatesTags: ['Contact'],
    })
  })
})
  export const { useFetchContactQuery, useDeleteContactMutation, useAddContactMutation } = contactsApi;





// import { createSlice } from '@reduxjs/toolkit';
// import { persistReducer } from 'redux-persist';
// import storage from 'redux-persist/lib/storage';

// const initialState = {
//   contacts:""
// };

// const contactsSlice = createSlice({
//   name: 'contacts',
//   initialState,
//   reducers: {
//     addContact(state, { payload }) {
//       state.contacts = [...state.contacts, payload];
//     },
//     deleteContact(state, { payload }) {
//       state.contacts = state.contacts.filter(({ id }) => id !== payload);
//     },
//   },
// });

// const persistConfig = {
//   key: 'contacts',
//   storage,
// };

// export const contactsReducer = persistReducer(
//   persistConfig,
//   contactsSlice.reducer
// );
// export const { addContact, deleteContact } = contactsSlice.actions;