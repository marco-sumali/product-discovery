import React, {useState} from 'react';
import {  
  Box,
  Container,
  Grid,
  Accordion,
  AccordionSummary,
  AccordionDetails,
  IconButton,
} from '@material-ui/core'; 
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';

import {FAQDetails} from '../../constant';
import styles from '../../style';

const FAQs = ({
  search,
}) => {
  const [FAQs, setFAQs] = useState(FAQDetails)
  return (
    <Container>
      <Box my={0}>
        <Grid item xs={12}>
          {search.length <= 0 && FAQs.map((faq, index) => (
            <div key={`FAQ-${index}`}>
              <div style={styles.BodyTitle}>{faq.title}</div>
                {faq.data.map((subFaq, index) => (
                  <div key={`SubFAQ-${index}`}>
                    <div style={styles.BodySubTitle}>{subFaq.subtitle}</div>
                    <div>
                      {subFaq.data.map((detail, index) => (
                        <Accordion style={styles.Accordion} key={`Detail-${index}`}>
                          <AccordionSummary
                            expandIcon={<ExpandMoreIcon />}
                            aria-controls="panel1-content"
                            id="panel2-header"
                          >
                            <div style={styles.AccordionTitle}>{detail.question}</div>
                          </AccordionSummary>
                          <AccordionDetails>
                            <div style={styles.AccordionSubTitle}>{detail.answer}</div>
                          </AccordionDetails>
                        </Accordion>
                      ))}
                    </div>
                  </div>
                ))}
            </div>
          ))}
        </Grid>
      </Box>
    </Container>
  )
}


export default FAQs;