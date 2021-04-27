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
  filter: string,
}

const initialState: ICountryList = {
  list:[],
  filter: '',
}

const slice = createSlice({
  name: 'countryList',
  initialState,
  reducers: {
    setList: (state, action: PayloadAction<Array<ICountry>>) => {
      state.list = action.payload;
    },
    setFilter: (state, action: PayloadAction<string>) =>{
      state.filter = action.payload;
    }
  }
});

export const {setList: setCountryListAC, setFilter: setCountryListFilterAC} = slice.actions;

export default slice.reducer;
