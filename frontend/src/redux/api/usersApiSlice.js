import { apiSlice } from "./apiSlice";
import { USERS_URL } from "../features/constants";


export const userApiSlice = apiSlice.injectEndpoints({
    endpoints: (builder) => ({
        Login: builder.mutation({
            query: (data) => ({
                url: `${USERS_URL}/auth`,
                method: 'POST',
                body: data
            })
        }),

        Logout: builder.mutation({
            query: () => ({
                url: `${USERS_URL}/logout`,
                method: 'POST'
            }),
        })
    })
});

export const { useLoginMutation, useLogoutMutation } = userApiSlice;
