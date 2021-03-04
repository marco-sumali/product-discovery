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

import styles from '../../style';

const SearchedFAQs = ({
  searchedFAQs,
  search,
}) => {
  return (
    <Container>
      <Box my={3}>
        <Grid item xs={12}>
          {searchedFAQs.length <= 0 && search.length > 0 ?
            <div style={styles.BodySubTitle}>No result found.</div>
          :
            <div>
              {searchedFAQs.map(((faq,index) => (
                <div key={`SearchedDetail-${index}`}>
                  <div style={styles.AccordionTitleMin}>{faq.title} > {faq.subtitle}</div>
                  <Accordion style={styles.Accordion}>
                    <AccordionSummary
                      expandIcon={<ExpandMoreIcon />}
                      aria-controls="panel1-content"
                      id="panel1-header"
                    >
                      <div style={styles.AccordionTitle}>{faq.question}</div>
                    </AccordionSummary>
                    <AccordionDetails>
                      <div style={styles.AccordionSubTitle}>{faq.answer}</div>
                    </AccordionDetails>
                  </Accordion>
                </div>
              )))}
            </div>
          }
        </Grid>
      </Box>
    </Container>
  )
}


export default SearchedFAQs;