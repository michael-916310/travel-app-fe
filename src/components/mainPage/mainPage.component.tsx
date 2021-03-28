import React from 'react';

import Header from '../header/header.component';
import Footer from '../footer/footer.component';
import Content from './content.component';

function MainPage(){
  return (
    <React.Fragment>
      <Header/>
      <Content/>
      <Footer/>
    </React.Fragment>
  )
}

export default MainPage;