const Button = {
  borderRadius: '50%',
  border: '2px solid rgb(139, 149, 158)',
  padding: '8px',
  position: 'fixed',
  bottom: '24px',
  right: '24px',
  zIndex: '30',
  backgroundColor: '#ffffff'
}

const MessageContainer = {
  position: 'fixed',
  bottom: '104px',
  right: '24px',
  zIndex: '30',
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'center',
  alignItems: 'flex-end',
}

const Message = {
  borderRadius: '20px',
  border: '2px solid rgb(139, 149, 158)',
  marginTop: '8px',
  padding: '4px 12px',
  backgroundColor: '#ffffff',
  width: 'max-content',
  maxWidth: '50vw',
  fontSize: '1.2em',
}

const styles = {
  Button,
  MessageContainer,
  Message,
}


export default styles;