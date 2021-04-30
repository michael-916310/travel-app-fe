import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface ICountry {
  id: string,
  name: string,
  ISOCode:string,
  capital: string,
  capitalLocation: string,
  currency: string,
  imageUrl: string,
  videoUrl: string,
  description: string,
  places: [],
}

const initialState: ICountry = {
  id: "",
  name: "",
  ISOCode: "",
  capital: "",
  capitalLocation: "",
  currency: "",
  imageUrl: "",
  videoUrl: "",
  description: "",
  places: [],
}


const slice = createSlice({
  name: "currentCountry",
  initialState,
  reducers: {
    setCountry: (state, action: PayloadAction<ICountry>) =>{
      state.id = action.payload.id;
      state.name = action.payload.name;
      state.ISOCode = action.payload.ISOCode;
      state.capital = action.payload.capital;
      state.capitalLocation = action.payload.capitalLocation;
      state.currency = action.payload.currency;
      state.imageUrl = action.payload.imageUrl;
      state.videoUrl = action.payload.videoUrl;
      state.description = action.payload.description;
      state.places = action.payload.places;
    }
  }
})

export const {setCountry: setCountryInfoAC} = slice.actions;
export default slice.reducer;