import React from 'react';

import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import MenuItem from '@material-ui/core/MenuItem';
import Menu from '@material-ui/core/Menu';

import LanguageIcon from '@material-ui/icons/Language';

const options = [
  {key: 'en', value:'English'},
  {key: 'ru', value:'Русский'},
];

function LanguageList() {

  const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);
  const [selectedIndex, setSelectedIndex] = React.useState(0);

  const handleClickListItem = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorEl(event.currentTarget);
  };

  const handleMenuItemClick = (event: React.MouseEvent<HTMLElement>, index: number) => {
    setSelectedIndex(index);
    setAnchorEl(null);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const nameByIndex = (index: number) => {
    if (index <= options.length && index >= 0) {
      return options[index].value;
    }
    return '';
  }

  return (
    <div>
      <List>
        <ListItem
          button
          onClick={handleClickListItem}
        >
          <ListItemText primary={nameByIndex(selectedIndex)} />
          <ListItemIcon>
            <LanguageIcon fontSize="large"/>
          </ListItemIcon>

        </ListItem>
      </List>
      <Menu
        anchorEl={anchorEl}
        open={Boolean(anchorEl)}
        onClose={handleClose}
      >
        {options.map((option, index) => (
          <MenuItem
            key={option.key}
            selected={index === selectedIndex}
            onClick={(event) => handleMenuItemClick(event, index)}
          >
            {nameByIndex(index)}
          </MenuItem>
        ))}
      </Menu>
    </div>
  );
}


export default LanguageList;