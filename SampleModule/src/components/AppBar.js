import React, { useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import { AppBar, Toolbar, Typography, Button, Dialog, DialogTitle, DialogContent, DialogActions, TextField } from "@material-ui/core";
import logoIcon from "assets/PEOLlogo.jpg";

const useStyles = makeStyles(theme => ({
  root: {
    flexGrow: 1
  },
  menuButton: {
    marginRight: theme.spacing(2)
  },
  title: {
    flexGrow: 1, // Make title take up available space
    marginLeft: theme.spacing(2)
  },
  button1: {
    marginRight: theme.spacing(2)
  }
}));

export default function AppMainBar() {
  const classes = useStyles();
  
  // State to manage dialogs visibility
  const [openAboutDialog, setOpenAboutDialog] = useState(false);
  const [openLoginDialog, setOpenLoginDialog] = useState(false);

  // Handle opening the About dialog
  const handleOpenAboutDialog = () => {
    setOpenAboutDialog(true);
  };

  // Handle closing the About dialog
  const handleCloseAboutDialog = () => {
    setOpenAboutDialog(false);
  };

  // Handle opening the Login dialog
  const handleOpenLoginDialog = () => {
    setOpenLoginDialog(true);
  };

  // Handle closing the Login dialog
  const handleCloseLoginDialog = () => {
    setOpenLoginDialog(false);
  };

  return (
    <div>
      <AppBar position="static">
        <Toolbar>
          <img width={70} src={logoIcon} alt="logo" />
          <Typography variant="h4" className={classes.title}>
            {"Harshini"}
          </Typography>
          <Button color="inherit" className={classes.button1} onClick={handleOpenAboutDialog}>
            {"Home"}
          </Button>
          <Button color="inherit" className={classes.button1} onClick={handleOpenAboutDialog}>
            {"About"}
          </Button>
          <Button color="inherit" className={classes.button1} onClick={handleOpenLoginDialog}>
            {"Login"}
          </Button>
        </Toolbar>
      </AppBar>
      {/* <Button variant="contained" color="primary" className={classes.button}> {"Submit"} </Button> */}

      {/* About Dialog Component */}
      <Dialog open={openAboutDialog} onClose={handleCloseAboutDialog}>
        <DialogTitle>{"About Us"}</DialogTitle>
        <DialogContent>
          <Typography variant="body1">
            This is a brief description about us. You can provide any information you want here.
          </Typography>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleCloseAboutDialog} color="primary">
            Close
          </Button>
        </DialogActions>
      </Dialog>

      {/* Login Dialog Component */}
      <Dialog open={openLoginDialog} onClose={handleCloseLoginDialog}>
        <DialogTitle>{"Login"}</DialogTitle>
        <DialogContent>
          <TextField
            autoFocus
            margin="dense"
            id="email"
            label="Email Address"
            type="email"
            fullWidth
            variant="outlined"
          />
          <TextField
            margin="dense"
            id="password"
            label="Password"
            type="password"
            fullWidth
            variant="outlined"
          />
        </DialogContent>
        <DialogActions>
          <Button onClick={handleCloseLoginDialog} color="primary">
            Cancel
          </Button>
          <Button onClick={() => { /* Add login logic here */ }} color="primary">
            Login
          </Button>
        </DialogActions>
      </Dialog>
    </div>
  );
}
