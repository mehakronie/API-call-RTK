import { createSlice, createAsyncThunk } from "@reduxjs/toolkit"

export const Fetchdata = createAsyncThunk('Fetchdata', async () => {
    const response = await fetch('https://jsonplaceholder.typicode.com/todos')
    return response.json()
})

const TodoSlice = createSlice({
    name: 'todo',
    initialState: {
        isloading: false,
        data: null,
        iserror: false
    },
    extraReducers: (builder) => {
        builder.addCase(Fetchdata.pending, (state, actions) => {
            state.isloading = true
        })
        builder.addCase(Fetchdata.fulfilled, (state, actions) => {
            state.isloading = false
            state.data = actions.payload
        })
        builder.addCase(Fetchdata.rejected, (state, actions) => {
            state.iserror = true
        })
    }
})
export { TodoSlice }