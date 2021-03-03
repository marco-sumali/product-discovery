import React from 'react';
import {  
  Box,
  Container,
  Grid,
  Accordion,
  AccordionSummary,
  AccordionDetails,
  Typography
} from '@material-ui/core'; 
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';

import NavigationBar from '../../components/header';
import styles from './style.js';

export default function FAQPage() {
  return (
    <NavigationBar>
      <Grid container>
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
                  <div style={styles.BodyTitle}>Adding Money</div>
                  <Accordion style={styles.Accordion}>
                    <AccordionSummary
                      expandIcon={<ExpandMoreIcon />}
                      aria-controls="panel1a-content"
                      id="panel1a-header"
                    >
                      <Typography>Accordion 1</Typography>
                    </AccordionSummary>
                    <AccordionDetails>
                      <Typography>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse malesuada lacus ex,
                        sit amet blandit leo lobortis eget.
                      </Typography>
                    </AccordionDetails>
                  </Accordion>
                  <Accordion style={styles.Accordion}>
                    <AccordionSummary
                      expandIcon={<ExpandMoreIcon />}
                      aria-controls="panel1a-content"
                      id="panel1a-header"
                    >
                      <Typography>Accordion 2</Typography>
                    </AccordionSummary>
                    <AccordionDetails>
                      <Typography>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse malesuada lacus ex,
                        sit amet blandit leo lobortis eget.
                      </Typography>
                    </AccordionDetails>
                  </Accordion>
                </Grid>
              </Box>
            </Container>
          </div>
        </Grid>
      </Grid>
    </NavigationBar>
  );
}