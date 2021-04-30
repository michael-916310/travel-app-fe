import React, {useEffect} from 'react';
import {useParams} from 'react-router-dom';

import {getCountryInfo, useLang} from './../../app/utils';
import {useAppSelector} from './../../store/hooks';

export default function Content(){
  let {countryId} = useParams() as {countryId:string};

  const lang: string = useLang(useAppSelector);

  useEffect(()=>{
    getCountryInfo(countryId,lang);
  },[lang]);

  return (
    <div>
      content
    </div>
  )
}