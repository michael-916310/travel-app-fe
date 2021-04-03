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
    result = sessionStorage.getItem(url);
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

export function init(){
  loadURL(`${baseURL}/countries`,[]);
}

