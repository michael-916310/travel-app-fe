import {dispatch} from './../store/hooks';
import {setCountryListAC} from './../store/countryListSlice';
import {setCountryInfoAC} from './../store/countrySlice'

const baseURL: string = 'https://michael-916310-travel-app-be.herokuapp.com';

function loadURL(url:string, callbackAr:{(data:any):void}[]){
  let result: any;

  function callback(){
    if (result) {
      callbackAr.forEach((item) => {
        item(result);
      });
    }
  }

  if (sessionStorage.getItem(url)) {
    result = JSON.parse(sessionStorage.getItem(url) || '');
    callback();
  } else {
    fetch(url)
    .then((res)=>{
      return res.json();
    }).then(json=>{
      result = json;
      sessionStorage.setItem(url, JSON.stringify(result));
      callback();
    })
  }

}

function loadCountryList(data: any) {
  let arr=data.map((item:any) => {
    return {
      id: item.id,
      capital: item.capital,
      countryName: item.name,
      imageUrl: item.imageUrl,
      description: item.description,
    }
  });
  dispatch(setCountryListAC(arr));
}

export function init() {
  // закэшируем в local storage данные по странам для разных языков
  loadURL(`${baseURL}/countries?lang=ru`,[loadCountryList]);
  loadURL(`${baseURL}/countries?lang=en`,[loadCountryList]);
}

export function getCountryList(lang: string) {
  // обновим redux storage
  loadURL(`${baseURL}/countries?lang=${lang}`,[loadCountryList]);
}

export function getCountryInfo(id:string, lang: string){
  loadURL(`${baseURL}/countries/${id}?lang=${lang}`,[(data:any)=>{
    dispatch(setCountryInfoAC(data));
  }]);
}

// кастомный хук\селектор для получения из storage текущего языка
export function useLang(useAppSelector: any) {
  return useAppSelector((store: any)=>{return store.lang.list[store.lang.selectedItem].key});
}
