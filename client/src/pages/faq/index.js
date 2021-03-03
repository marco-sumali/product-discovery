import React from 'react';
import {  
  Box,
  Container,
  Grid,
  Accordion,
  AccordionSummary,
  AccordionDetails,
} from '@material-ui/core'; 
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';

import NavigationBar from '../../components/header';
import styles from './style.js';
import {FAQDetails} from './constant';

export default function FAQPage() {
  return (
    <NavigationBar>
      <Grid container style={{backgroundColor: '#ffffff', minHeight: '100vh'}}>
        <Grid item xs={12}>
          <div style={styles.Container}>
            <Container>
              <Box my={3}>
                <Grid item xs={12}>
                  <div style={styles.Header}>How can we help?</div>
                </Grid>
                <Grid item xs={12} style={{marginTop: '16px'}}>
                  <input type="text" id="search" name="search" style={styles.SearchInput}  placeholder="Search..."/>
                </Grid>
              </Box>
            </Container>
          </div>
          <div style={styles.BodyContainer}>
            <Container>
              <Box my={3}>
                <Grid item xs={12}>
                  {
                    FAQDetails.map((faq, index) => (
                      <div key={`FAQ-${index}`}>
                        <div style={styles.BodyTitle}>{faq.title}</div>
                        {
                          faq.data.map((subFaq, index) => (
                            <div key={`SubFAQ-${index}`}>
                              <div style={styles.BodySubTitle}>{subFaq.subtitle}</div>
                              <div>
                                {
                                  subFaq.data.map((detail, index) => (
                                    <Accordion style={styles.Accordion} key={`Detail-${index}`}>
                                      <AccordionSummary
                                        expandIcon={<ExpandMoreIcon />}
                                        aria-controls="panel1a-content"
                                        id="panel1a-header"
                                      >
                                        <div style={styles.AccordionTitle}>{detail.question}</div>
                                      </AccordionSummary>
                                      <AccordionDetails>
                                        <div style={styles.AccordionSubTitle}>{detail.answer}</div>
                                      </AccordionDetails>
                                    </Accordion>
                                  ))
                                }
                              </div>
                            </div>
                          ))
                        }
                      </div>
                    ))
                  }
                </Grid>
              </Box>
            </Container>
          </div>
        </Grid>
      </Grid>
    </NavigationBar>
  );
}