import React from 'react';
import {  
  Grid,
} from '@material-ui/core'; 

import NavigationBar from '../../components/header';
import styles from './style.js';

const HomePage = () => {
  return (
    <NavigationBar>
      <Grid container style={{backgroundColor: '#ffffff', minHeight: '100vh', paddingTop: '24px'}}>
        <Grid item xl={6} lg={6} md={12} sm={12} xs={12}>
          <div style={{height: '80vh'}}>
            <div style={styles.ContainerWrapCenter}>
              <div style={styles.Header}>
                <div style={styles.HeaderTitle}>Get more from your money</div>
                <div style={styles.HeaderSubTitle}>Exchange money with no hidden fees. Buy crypto, gold and manage your money with spending analytics. Join over 12 million Revolut customers.</div>
              </div>
            </div>
          </div>
        </Grid>
        <Grid item xl={6} lg={6} md={12} sm={12} xs={12}>
          <img style={styles.HomePhoneImage} src="https://assets.revolut.com/media/index/home.png" alt="home-phone"/>
        </Grid>
      </Grid>
    </NavigationBar>
  )
}


export default HomePage;