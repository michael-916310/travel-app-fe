import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface ICountry {
  id: string,
  countryName: string,
  capital: string,
  imageUrl: string,
  description: string,
}

interface ICountryList {
  list: ICountry[],
}

const initialState: ICountryList = {
  list:[]
}

const slice = createSlice({
  name: 'countryList',
  initialState,
  reducers: {
    setList: (state, action: PayloadAction<Array<ICountry>>) => {
      state.list = action.payload;
    }
  }
});

export const {setList: setCountryListAC} = slice.actions;

export default slice.reducer;
