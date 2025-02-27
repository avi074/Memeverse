import { Meme } from "@/types/meme";
import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

// Fetch memes asynchronously
export const fetchMemes = createAsyncThunk("meme/fetchMemes", async () => {
  const response = await fetch("https://api.imgflip.com/get_memes");
  const data = await response.json();
  console.log("fetching memes")
  return data.data.memes;
});

interface MemeState {
  memes: Meme[];
  loading: boolean;
  error: string | null;
}

const initialState: MemeState = {
  memes: [],
  loading: false,
  error: null,
};

const memeSlice = createSlice({
  name: "meme",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchMemes.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(fetchMemes.fulfilled, (state, action) => {
        state.loading = false;
        state.memes = action.payload;
      })
      .addCase(fetchMemes.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message || "Failed to fetch memes";
      });
  },
});

export default memeSlice.reducer;
