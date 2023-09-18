import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

const asyncUpFetch = createAsyncThunk("counterSlice/asyncUpFetch", async () => {
  try {
    const res = await axios.get(
      `https://api.openweathermap.org/data/2.5/weather?q=Seoul&appid=${process.env.REACT_APP_WEATHER_KEY}`
    );

    return res.data;
  } catch (err) {
    console.log(err);
  }
});

const weatherSlice = createSlice({
  name: "weatherSlice",
  initialState: { weather: "", time: "", temp: 0, status: "Welcome", icon: "" },
  reducers: {
    //동기작업 리듀서
  },
  extraReducers: (builder) => {
    builder.addCase(asyncUpFetch.pending, (state) => {
      state.status = "Loading";
    });
    builder.addCase(asyncUpFetch.fulfilled, (state, action) => {
      state.time = new Date().toString();
      state.weather = action.payload.weather[0].main;
      state.temp = action.payload.main.temp;
      state.icon =
        "http://openweathermap.org/img/wn/" +
        action.payload.weather[0].icon +
        "@4x.png";
    });
    builder.addCase(asyncUpFetch.rejected, (state) => {
      state.status = "날씨 정보를 가져오는데에 실패했습니다.";
    });
  },
});

export default weatherSlice;
export { asyncUpFetch };
