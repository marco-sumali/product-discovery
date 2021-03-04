import React, {useEffect, useState, useRef} from 'react';
import {  
  Box,
  Container,
  Grid,
  Accordion,
  AccordionSummary,
  AccordionDetails,
  IconButton,
} from '@material-ui/core'; 
import {v4 as uuidv4} from 'uuid';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import ChatIcon from '@material-ui/icons/Chat';

import NavigationBar from '../../components/header';
import styles from './style.js';
import {FAQDetails, convertedFAQDetails} from './constant';
import firebase from '../../config/firebase';

export default function FAQPage() {
  const db = firebase.firestore()
  const sessionCollection = "sessions"
  const sessionId = uuidv4()
  const [chatId, setChatId] = useState(sessionId)
  const [isConnected, setIsConnected] = useState(false)
  const [agentMessages, setAgentMessages] = useState([])
  const [FAQs, setFAQs] = useState(FAQDetails)
  const [searchedFAQs, setSearchedFAQs] = useState([])
  const searchInputRef = useRef('');
  const [search, setSearch] = useState('')

  useEffect(() => {
    const readingSessions = (chatId) => {
      console.log('sessionId: reading', chatId)
      db.collection(sessionCollection).doc(chatId)
        .onSnapshot((doc) => {
          const {responses} = doc.data()
          console.log('doc:', doc.data())
          const agentFilteredResponses = []
          responses.map(response => {if (response.is_bot === true) agentFilteredResponses.unshift(response)})
          setAgentMessages(agentFilteredResponses)
        });
    }

    const createSession = () => {
      const liveAgentId = uuidv4()
      db.collection(sessionCollection).doc(chatId).set({
        id: chatId,
        live_agent_id: liveAgentId,
        live_agent_auto_generate: true,
        responses: [],
        created_at: new Date(),
        updated_at: new Date(),
      })
      .then(() => {
        console.log('Successful session'); 
        console.log('sessionId: creating', chatId)
        readingSessions(chatId)
      })
      .catch(err => console.log('ERROR: new session', err))
    }
    
    // setTimeout(() => {
    //   createSession()
    //   setIsConnected(prev => !prev)
    // }, 5000)
  }, [chatId])

  const openNewChatSession = () => {
    console.log('sessionId: chat', chatId)
    window.open(`https://articulo-voice-bot.web.app/chat/${chatId}`, '_blank')
  }

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
          {isConnected && agentMessages.length > 0? 
            <div style={styles.MessageContainer}>
              {agentMessages && agentMessages.map((message, index) => (
                <div style={styles.Message} key={`message-${index}`}>{message.text}</div>
              ))}
            </div>
          : null}
          {isConnected? 
            <div style={styles.Button} onClick={openNewChatSession}>
              <IconButton color="primary" style={{color: '#000000'}}>
                <ChatIcon />
              </IconButton>
            </div>
          : null}
          <div style={styles.Container}>
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
          </div>
          <div>
            <Container>
              <Box my={3}>
                <Grid item xs={12}>
                  {searchedFAQs.length <= 0 && search.length > 0 ?
                    <div style={styles.BodySubTitle}>No result found.</div>
                  :
                    <div>
                      {searchedFAQs.map(((faq,index) => (
                        <div>
                          <div style={styles.AccordionTitleMin}>{faq.title} > {faq.subtitle}</div>
                          <Accordion style={styles.Accordion} key={`SearchedDetail-${index}`}>
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
          </div>
          <div style={styles.BodyContainer}>
            <Container>
              <Box my={3}>
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
          </div>
        </Grid>
      </Grid>
    </NavigationBar>
  );
}