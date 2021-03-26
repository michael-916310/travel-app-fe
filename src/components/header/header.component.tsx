import React from 'react-dom';
import LanguageList from './header.language.component';
import styles from './header.module.scss';

function Header(){
  return (
    <header className={styles.header}>
      <span>logo</span>
      <input type="text"/>
      <LanguageList/>
    </header>
  )
}

export default Header;