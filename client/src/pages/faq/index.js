import React, {useEffect, useState, useRef} from 'react';
import {  
  Grid,
  IconButton,
} from '@material-ui/core'; 
import {v4 as uuidv4} from 'uuid';
import ChatIcon from '@material-ui/icons/Chat';

import NavigationBar from '../../components/header';
import SearchedFAQs from './components/SearchedFAQs';
import SearchInput from './components/SearchInput';
import FAQs from './components/FAQs';
import styles from './style.js';
import {convertedFAQDetails} from './constant';
import firebase from '../../config/firebase';

export default function FAQPage() {
  const db = firebase.firestore()
  const sessionCollection = "sessions"
  const sessionId = uuidv4()
  const [chatId, setChatId] = useState(sessionId)
  const [isConnected, setIsConnected] = useState(false)
  const [agentMessages, setAgentMessages] = useState([])
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
          responses.map(response => {if (response.is_bot === true) agentFilteredResponses.push(response)})
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