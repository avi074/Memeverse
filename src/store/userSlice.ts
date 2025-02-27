import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface UserState {
  name: string;
  bio: string;
  profilePicture: string;
  likedMemes: string[];
}

const initialState: UserState = {
  name: "Guest",
  bio: "Meme Enthusiast",
  profilePicture: "/default-avatar.png",
  likedMemes: [],
};

const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    updateProfile: (state, action) => {
      state.name = action.payload.name;
      state.bio = action.payload.bio;
      state.profilePicture = action.payload.profilePicture;
    },
    toggleLikeMeme: (state, action: PayloadAction<string>) => {
      const memeId = action.payload;
      if (state.likedMemes.includes(memeId)) {
        state.likedMemes = state.likedMemes.filter((id) => id !== memeId); // Unlike
      } else {
        state.likedMemes.push(memeId); // Like
      }
    },
  },
});

export const { updateProfile, toggleLikeMeme } = userSlice.actions;
export default userSlice.reducer;
