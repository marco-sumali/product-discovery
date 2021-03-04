import React from 'react';
import {  
  Grid,
} from '@material-ui/core'; 

import NavigationBar from '../../components/header';

const HomePage = () => {
  return (
    <NavigationBar>
      <Grid container style={{backgroundColor: '#ffffff', minHeight: '100vh'}}>
        <Grid item xs={12}>
          <div>home page loh</div>
        </Grid>
      </Grid>
    </NavigationBar>
  )
}


export default HomePage;