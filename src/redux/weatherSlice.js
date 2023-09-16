import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

export const fetchWeather = createAsyncThunk(
  "weatherSlice/fetchWeather",
  async () => {
    const res = await fetch(
      `https://api.openweathermap.org/data/2.5/weather?lat=37&lon=127&appid=${process.env.REACT_APP_OPEN_WEATHER_API_KEY}`
    );
    const data = await res.json();
    console.log(data);
    return data;
  }
);

export const weatherSlice = createSlice({
  name: "weatherSlice",
  initialState: {
    status: "날씨 페이지입니다.",
    weather: "",
  },
  reducers: {
    setStatus: (state, action) => {
      state.status = action.payload;
    },
    setWeather: (state, action) => {
      state.weather = action.payload;
    },
  },
  extraReducers: (builder) => {
    builder.addCase(fetchWeather.pending, (state, action) => {
      state.status = "날씨 정보 로딩 중...";
    });
    builder.addCase(fetchWeather.fulfilled, (state, action) => {
      state.status = "날씨 정보 로딩을 완료했어요.";
      state.weather = action.payload;
    });
    builder.addCase(fetchWeather.rejected, (state, action) => {
      state.status = "날씨 정보 로딩에 실패했어요.";
    });
  },
});

export const { setStatus, setWeather } = weatherSlice.actions;
