import React, {useEffect, useState} from 'react';
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
import {FAQDetails} from './constant';
import firebase from '../../config/firebase';

export default function FAQPage() {
  const db = firebase.firestore()
  const sessionCollection = "sessions"
  const sessionId = uuidv4()
  const [chatId, setChatId] = useState(sessionId)
  const [isConnected, setIsConnected] = useState(false)
  const [agentMessages, setAgentMessages] = useState([])

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
    
    setTimeout(() => {
      createSession()
      setIsConnected(prev => !prev)
    }, 5000)
  }, [])

  const openNewChatSession = () => {
    console.log('sessionId: chat', chatId)
    window.open(`https://articulo-voice-bot.web.app/chat/${chatId}`, '_blank')
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