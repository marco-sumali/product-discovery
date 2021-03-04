import React from 'react';
import {  
  Box,
  Container,
  Grid,
} from '@material-ui/core'; 

import styles from '../../style';

const SearchInput = ({
  searchFAQs,
  searchInputRef,
}) => {
  return (
    <Container>
      <Box my={3}>
        <form onSubmit={searchFAQs}>
          <Grid item xs={12}>
            <div style={styles.Header}>How can we help?</div>
          </Grid>
          <Grid item xs={12} style={{marginTop: '16px'}}>
            <input 
              type="text" 
              ref={searchInputRef} 
              style={styles.SearchInput}  
              placeholder="Search..."
            />
          </Grid>
        </form>
      </Box>
    </Container>
  )
}


export default SearchInput;