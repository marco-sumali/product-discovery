import React from 'react';
import {Link} from 'react-router-dom';
import {
  AppBar,
  Toolbar,
  Typography,
  CssBaseline,
  useScrollTrigger,
  Button,
} from '@material-ui/core';
import {createMuiTheme, ThemeProvider, makeStyles} from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
  title: {
    flexGrow: 1,
  },
}));

function ElevationScroll(props) {
  const { children, window } = props;
  const trigger = useScrollTrigger({
    disableHysteresis: true,
    threshold: 0,
    target: window ? window() : undefined,
  });

  return React.cloneElement(children, {
    elevation: trigger ? 4 : 0,
  });
}

const Header = ({children}) => {
  const classes = useStyles();
  const theme = createMuiTheme({
    overrides: {
      MuiAppBar: {
        colorPrimary: {
          backgroundColor: window.location.pathname === '/faq' ? '#F3F4F5':'#ffffff',
          color: '#000000',
        },
      },
    },
  });
  return (
    <ThemeProvider theme={theme}>
      <React.Fragment>
        <CssBaseline />
        <ElevationScroll>
          <AppBar>
            <Toolbar>
              <Link to="/" style={{textDecoration: 'none', color: '#000000', flexGrow: '1'}}>
                <Typography variant="h6" className={classes.title}>R</Typography>
              </Link>
              <Link to="/faq" style={{textDecoration: 'none', color: '#000000'}}>
                <Button color="inherit">FAQ</Button>
              </Link>
              <Link to="/contact-us" style={{textDecoration: 'none', color: '#000000'}}>
                <Button color="inherit">Contact Us</Button>
              </Link>
            </Toolbar>
          </AppBar>
        </ElevationScroll>
        <Toolbar />
        {children}
      </React.Fragment>
    </ThemeProvider>
  )
}


export default Header;