import React, {useEffect} from 'react';
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
import {useDispatch} from 'react-redux';

import {storeShowChatConnection} from '../../store/user/actions';

const useStyles = makeStyles(() => ({
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

const Header = ({
    children, 
    showNavigation=true,
  }) => {
  const dispatch = useDispatch()
  const classes = useStyles()
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
  const pathname = window.location.pathname

  useEffect(() => {
    if (pathname === '/faq' || pathname === '/') dispatch(storeShowChatConnection(true))
    else dispatch(storeShowChatConnection(false))
  }, [pathname])

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
              {showNavigation ? 
                <div>
                  <Link to="/faq" style={{textDecoration: 'none', color: '#000000'}}>
                    <Button color="inherit">FAQ</Button>
                  </Link>
                  <Link to="/contact-us" style={{textDecoration: 'none', color: '#000000'}}>
                    <Button color="inherit">Contact Us</Button>
                  </Link>
                </div>
              :null}
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