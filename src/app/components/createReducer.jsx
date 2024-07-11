import { createSlice } from "@reduxjs/toolkit";
import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

export const info = createAsyncThunk("/post/getinfo", async (text) => {
  const options = {
    method: "POST",
    url: "https://chatgpt-42.p.rapidapi.com/gpt4",
    headers: {
      "x-rapidapi-key": "721955d12emsh12900079c7be162p1e7203jsnb805721c4d3d",
      "x-rapidapi-host": "chatgpt-42.p.rapidapi.com",
      "Content-Type": "application/json",
    },
    data: {
      messages: [
        {
          role: "user",
          content: text,
        },
      ],
      web_access: false,
    },
  };

  try {
    const response = await axios.request(options);
    return response.data;
  } catch (error) {
    console.error(error);
  }
});

const initialState = {
  status: "",
  error: null,
  data: [],
};

const createReducer = createSlice({
  name: "post",
  initialState,
  reducers: {},
  extraReducers: (builder) =>
    builder
      .addCase(info.pending, (state) => {
        state.status = "loading";
      })

      .addCase(info.fulfilled, (state, action) => {
        state.status = "succeed";
        state.data = action.payload;
      })
      .addCase(info.rejected, (state, action) => {
        state.status = "failed";
        state.error = action.error.message;
      }),
});

export default createReducer;
