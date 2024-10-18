import React from 'react';
import { Link } from 'react-router-dom';
import { Drawer, List, ListItem, ListItemText, Divider } from '@mui/material';

const Sidebar = ({ open, onClose }) => {
  return (
    <Drawer
      variant="persistent"
      anchor="left"
      open={open}
      onClose={onClose}
    >
      <List>
        <ListItem button component={Link} to="/page1">
          <ListItemText primary="Page 1" />
        </ListItem>
        <ListItem button component={Link} to="/page2">
          <ListItemText primary="Page 2" />
        </ListItem>
        {/* Add more pages as needed */}
        <Divider />
      </List>
    </Drawer>
  );
};

export default Sidebar;
