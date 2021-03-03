import React from 'react';
import {
  Container,
  Box,
  Grid,
  IconButton
} from '@material-ui/core';
import ChatIcon from '@material-ui/icons/Chat';

import NavigationBar from '../../components/header';
import styles from './style.js';

const ContactUsPage = () => {
  return (
    <NavigationBar>
      <Grid container style={{backgroundColor: '#ffffff', minHeight: '100vh'}}>
        <Container>
          <Box my={3}>
            <Grid item xs={12}>
              <div style={styles.Title}>Contact Us</div>
              <div style={styles.SubTitle}>We’re happy to answer any questions you may have, just send us a message via our in-app chat support.</div>
            </Grid>
            <Grid item xs={12} style={{marginTop: '7.5em'}}>
              <div style={styles.DisplayCenter}>
                <div style={styles.Button} onClick={() => window.location.href = 'https://articulo-voice-bot.web.app'}>
                  <IconButton color="primary" style={{color: '#000000'}}>
                    <ChatIcon />
                  </IconButton>
                </div>
              </div>
              <div style={styles.ContactTitle}>In-App Chat</div>
              <div style={styles.ContactSubTitle}>Mon—Fri: 24 hours</div>
              <div style={styles.ContactSubTitle}>Sat—Sun: 24 Hours</div>
              <div style={styles.ContactSubTitleBold}>Premium and Metal plan users: Priority service</div>
            </Grid>
          </Box>
        </Container>
      </Grid>
    </NavigationBar>
  )
};


export default ContactUsPage;