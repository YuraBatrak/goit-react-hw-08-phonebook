import { emptySplitApi } from '../baseFetchAPI';

export const contactsApi = emptySplitApi.injectEndpoints({
  endpoints: build => ({
    getContacts: build.query({
      query: () => '/contacts',
      providesTags: result =>
        result
          ? [
              ...result.map(({ contactId }) => ({
                type: 'CONTACT',
                contactId,
              })),
              { type: 'CONTACT', id: 'LIST' },
            ]
          : [{ type: 'CONTACT', id: 'LIST' }],
    }),

    addContact: build.mutation({
      query: contact => ({
        url: '/contacts',
        method: 'POST',
        body: contact,
      }),
      invalidatesTags: ['CONTACT'],
    }),

    deleteContact: build.mutation({
      query: contactId => ({
        url: `/contacts/${contactId}`,
        method: 'DELETE',
      }),
      invalidatesTags: contactId => [{ type: 'CONTACT', contactId }],
    }),
    overrideExisting: false,
  }),
});

export const {
  useGetContactsQuery,
  useAddContactMutation,
  useDeleteContactMutation,
} = contactsApi;
