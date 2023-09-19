import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'
import axios from 'axios'
import { API } from '@/app.config'

export const fetchUsers = createAsyncThunk('users/fetchUsers', async () => {
  const response = await axios.get(API.USERS)
  return response?.data?.users ?? []
})

const initialState = {
	users: [],
	status: 'idle',
	error: '' as any
}

const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    setUsers: (state, action) => {
      state.users = action.payload
    }
  },
  extraReducers(builder) {
    builder
      .addCase(fetchUsers.pending, (state, action) => {
        state.status = 'loading'
      })
      .addCase(fetchUsers.fulfilled, (state, action) => {
        state.status = 'succeeded'
        state.users = state.users.concat(action.payload)
      })
      .addCase(fetchUsers.rejected, (state, action) => {
        state.status = 'failed'
        state.error = action.error.message
      })
  }
})

export const { setUsers } = userSlice.actions
export default userSlice.reducer
