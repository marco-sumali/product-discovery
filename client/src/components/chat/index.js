import React, {useState, useEffect} from 'react';
import {useSelector} from 'react-redux';
import {
  IconButton,
} from '@material-ui/core';
import {v4 as uuidv4} from 'uuid';
import ChatIcon from '@material-ui/icons/Chat';
import UnfoldMoreIcon from '@material-ui/icons/UnfoldMore';
import UnfoldLessIcon from '@material-ui/icons/UnfoldLess';

// import Ringtone from '../../assets/audio/iphone_sms_ringtones.mp3';
import firebase from '../../config/firebase';
import styles from './style.js';

// const ringtoneAudio = new Audio(Ringtone);

const ChatIconAlert = () => {
  const db = firebase.firestore()
  const sessionCollection = "sessions"
  const [isConnected, setIsConnected] = useState(false)
  const [agentMessages, setAgentMessages] = useState([])
  const [unfold, setUnfold] = useState(true)
  const sessionId = useSelector(state => state.user.sessionId)
  const showChatConnection = useSelector(state => state.user.showChatConnection)
  console.log('chatConnection:', showChatConnection)

  useEffect(() => {
    const readingSessions = (sessionId) => {
      console.log('sessionId: reading', sessionId)
      db.collection(sessionCollection).doc(sessionId)
      .onSnapshot((doc) => {
        if (doc) {
          const {responses} = doc.data()
          console.log('doc:', doc.data())
          const agentFilteredResponses = []
          responses.map(response => {if (response.is_bot === true) agentFilteredResponses.push(response)})
          setAgentMessages(agentFilteredResponses)
          // ringtoneAudio.play()
        }
      });
    }

    const createSession = () => {
      const liveAgentId = uuidv4()
      db.collection(sessionCollection).doc(sessionId).set({
        id: sessionId,
        live_agent_id: liveAgentId,
        live_agent_auto_generate: true,
        responses: [],
        created_at: new Date(),
        updated_at: new Date(),
      })
      .then(() => {
        console.log('Successful session'); 
        console.log('sessionId: creating', sessionId)
        readingSessions(sessionId)
      })
      .catch(err => console.log('ERROR: new session', err))
    }
    
    setTimeout(() => {
      createSession()
      setIsConnected(prev => !prev)
    }, 3000)
  }, [sessionId])

  const openNewChatSession = () => {
    console.log('sessionId: chat', sessionId)
    window.open(`https://articulo-voice-bot.web.app/chat/${sessionId}`, '_blank')
  }
  return (
    <React.Fragment>
      {showChatConnection ?
      <div>
        {isConnected && agentMessages.length > 0 && unfold? 
          <div style={styles.MessageContainer}>
            {agentMessages && agentMessages.map((message, index) => (
              <div style={styles.Message} key={`message-${index}`}>{message.text}</div>
            ))}
          </div>
        : null}
        {isConnected && agentMessages.length > 0?
          <div style={styles.FoldButton} onClick={() => setUnfold(prev => !prev)}>
            <IconButton color="primary" style={{color: '#000000', padding: '2px'}}>
              {unfold ?
                <UnfoldLessIcon />
              :
                <UnfoldMoreIcon />
              }
            </IconButton>
          </div>
        :null}
        {isConnected? 
          <div style={styles.Button} onClick={openNewChatSession}>
            <IconButton color="primary" style={{color: '#000000'}}>
              <ChatIcon />
            </IconButton>
          </div>
        :null}
      </div>
      :null}
    </React.Fragment>
  )
}


export default ChatIconAlert;