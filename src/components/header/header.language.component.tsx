import React from 'react';

import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import MenuItem from '@material-ui/core/MenuItem';
import Menu from '@material-ui/core/Menu';

import LanguageIcon from '@material-ui/icons/Language';

import {useAppSelector, useAppDispatch} from './../../store/hooks';
import {setLangAC} from './../../store/langSlice';

function LanguageList() {

  const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);

  const list = useAppSelector((store) => {return store.lang.list});
  const selectedItem = useAppSelector((store) => {return store.lang.selectedItem});

  const dispatch = useAppDispatch();

  const handleClickListItem = (event: React.MouseEvent<HTMLElement>) => {
    //setAnchorEl(event.currentTarget);
    setAnchorEl(event.currentTarget.firstElementChild as HTMLElement);
  };

  const handleMenuItemClick = (event: React.MouseEvent<HTMLElement>, index: number) => {
    dispatch(setLangAC(index));
    setAnchorEl(null);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const nameByIndex = (index: number) => {
    if (index <= list.length && index >= 0) {
      return list[index].value;
    }
    return '';
  }

  return (
    <React.Fragment>
      <List>
        <ListItem
          button
          onClick={handleClickListItem}
          style = {{justifyContent:"center"}}
        >
          <ListItemText
            primary={nameByIndex(selectedItem)}
            //onClick={handleClickListItem}
            style={{flexGrow:0}}
          />
          <ListItemIcon
            style={{minWidth:"35px"}}
          >
            <LanguageIcon
              fontSize="large"/>
          </ListItemIcon>

        </ListItem>
      </List>
      <Menu
        anchorEl={anchorEl}
        open={Boolean(anchorEl)}
        onClose={handleClose}
      >
        {list.map((option, index) => (
          <MenuItem
            key={option.key}
            selected={index === selectedItem}
            onClick={(event) => handleMenuItemClick(event, index)}
          >
            {nameByIndex(index)}
          </MenuItem>
        ))}
      </Menu>
    </React.Fragment>
  );
}


export default LanguageList;