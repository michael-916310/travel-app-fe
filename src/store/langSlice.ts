import { createSlice, PayloadAction } from '@reduxjs/toolkit';

export interface IItem {
  key: string,
  value: string,
}

interface ILang {
  list: IItem[],
  selectedItem: number,
}

const initialState: ILang = {
  list:[
    {key: 'en', value:'English'},
    {key: 'ru', value:'Русский'},
  ],
  selectedItem:1,
}

const langSlice = createSlice({
  name: 'lang',
  initialState,
  reducers: {
    setLang: (state, action: PayloadAction<number>) =>{
      state.selectedItem = action.payload;
    }
  }
});

export const {
  setLang: setLangAC,
 } = langSlice.actions;

 export default langSlice.reducer;