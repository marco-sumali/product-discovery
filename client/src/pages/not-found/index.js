import React from 'react';
import {  
  Grid,
  Button,
} from '@material-ui/core'; 
import {Link} from 'react-router-dom';

import NavigationBar from '../../components/header';
import styles from './style';

const NotFound = () => {
  return (
    <NavigationBar showNavigation={false}>
      <Grid container style={{backgroundColor: '#ffffff', minHeight: '100vh', paddingTop: '24px'}}>
        <Grid item xs={12}>
          <div style={styles.Box}>
            <div style={styles.ContainerWrapCenter}>
              <div>
                <div style={styles.Title}>Oops!</div>
                <div style={styles.SubTitle}>The page you’re looking for could not be found.</div>
                <Link to="/" style={{textDecoration: 'none', color: '#000000', flexGrow: '1'}}>              
                  <Button style={{backgroundColor: '#000000', color: '#ffffff'}} variant="contained">Return Home</Button>
                </Link>
              </div>
            </div>
          </div>
        </Grid>
      </Grid>
    </NavigationBar>
  )
}


export default NotFound;