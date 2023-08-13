import { api } from "@/redux/api/apiSlice"
const productApi = api.injectEndpoints({
    endpoints: (builder) => ({
        getProducts: builder.query({
            query: () => "/products"
        }),
        singleProducts: builder.query({
            query: (id) => ({ url: `/product/${id}` }),
        }),
        addReview: builder.mutation({
            query: ({ id, data }) => ({
                url: `/comment/${id}`,
                method: 'POST',
                body: data,
            }),
            invalidatesTags: ['comment']
        }),
        getComment: builder.query({
            query: (id) => ({ url: `/comment/${id}` }),
            providesTags: ['comment']
        })
    })
})

export const {useGetProductsQuery, useSingleProductsQuery, useAddReviewMutation, useGetCommentQuery} = productApi 