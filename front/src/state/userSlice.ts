import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { Columns, User, UserState, initialState } from "./initialState";

const userSlice = createSlice({
  name: "candidates",
  initialState,
  reducers: {
    setCandidates: (state: UserState, action: PayloadAction<User[]>) => {
      state.candidates = action.payload;
    },
    updateCandidate: (state, action) => {
      const updatedUser = action.payload;
      const index = state.candidates.findIndex(
        (user) => user.id === updatedUser.id
      );
      state.candidates[index] = updatedUser;
    },
    setColumns: (state: UserState, action: PayloadAction<Columns>) => {
      state.columns = action.payload;
    },
  },
});

export const { setCandidates, updateCandidate, setColumns } = userSlice.actions;
export default userSlice.reducer;
