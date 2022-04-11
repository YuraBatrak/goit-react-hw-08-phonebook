import { emptySplitApi } from '../baseFetchAPI';

export const userApi = emptySplitApi.injectEndpoints({
  endpoints: build => ({
    registerUser: build.mutation({
      query: user => ({
        url: `/users/signup`,
        method: 'POST',
        body: user,
      }),
      invalidatesTags: ['USER'],
    }),

    logInUser: build.mutation({
      query: user => ({
        url: `/users/login`,
        method: 'POST',
        body: user,
      }),
      invalidatesTags: ['USER'],
    }),

    logOutUser: build.mutation({
      query: () => ({
        url: `/users/logout`,
        method: 'POST',
        headers: {
          authorization: '',
        },
      }),
      invalidatesTags: ['USER'],
    }),

    getCurrentUser: build.mutation({
      query: () => ({
        url: `/users/current`,
      }),
      invalidatesTags: ['USER'],
    }),

    overrideExisting: false,
  }),
});

export const {
  useRegisterUserMutation,
  useLogInUserMutation,
  useLogOutUserMutation,
  useGetCurrentUserMutation,
} = userApi;
