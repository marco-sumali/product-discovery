import React, {useState, useRef} from 'react';
import {  
  Grid,
} from '@material-ui/core'; 

import NavigationBar from '../../components/header';
import SearchedFAQs from './components/SearchedFAQs';
import SearchInput from './components/SearchInput';
import FAQs from './components/FAQs';
import {convertedFAQDetails} from './constant';
import styles from './style.js';

export default function FAQPage() {
  const [searchedFAQs, setSearchedFAQs] = useState([])
  const searchInputRef = useRef('');
  const [search, setSearch] = useState('')

  const searchFAQs = (e) => {
    e.preventDefault()
    const search = searchInputRef.current.value
    setSearch(search)
    const searchRegex = new RegExp(search, 'i')
    const searchedDetail = convertedFAQDetails.filter(faq => searchRegex.test(faq.question))
    if (search.length > 0) setSearchedFAQs(searchedDetail)
    else setSearchedFAQs([])
  }
  return (
    <NavigationBar>
      <Grid container style={{backgroundColor: '#ffffff', minHeight: '100vh'}}>
        <Grid item xs={12}>
          <div style={styles.Container}>
            <SearchInput 
              searchFAQs={searchFAQs}
              searchInputRef={searchInputRef}
            />
          </div>
          <div>
            <SearchedFAQs 
              searchedFAQs={searchedFAQs}
              search={search}
              />
          </div>
          <div style={styles.BodyContainer}>
            <FAQs 
              search={search}
            />
          </div>
        </Grid>
      </Grid>
    </NavigationBar>
  );
}