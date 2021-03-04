const Container = {
  backgroundColor: '#F3F4F5',
  paddingTop: '16px',
  paddingBottom: '16px',
}

const Header = {
  fontSize: '2.1rem',
  fontWeight: 'bold',
}

const SearchInput = {
  width: '100%',
  background: '#ffffff',
  outline: 'none',
  border: 'none',
  padding: '12px 16px',
  fontSize: '1.25em',
}

const BodyContainer = {
  padding: '8px 16px 16px 16px',
}

const Accordion = {
  marginBottom: '24px',
  borderRadius: '4px',
  backgroundColor: '#ffffff',
}

const BodyTitle = {
  fontWeight: 'bold',
  fontSize: '2.5rem',
  margin: '0.25em 0px'
}

const BodySubTitle = {
  fontWeight: 'bold',
  fontSize: '1.5rem',
  margin: '0.5em 0px',
  color: 'rgb(139, 149, 158)',
}

const AccordionTitle = {
  fontWeight: '500',
  fontSize: '1.25em',
}

const AccordionTitleMin = {
  fontWeight: '500',
  fontSize: '1em',
  marginBottom: '8px',
}

const AccordionSubTitle = {
  fontSize: '1em',
}

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
  Container,
  Header,
  SearchInput,
  BodyContainer,
  BodyTitle,
  Accordion,
  BodySubTitle,
  AccordionTitle,
  AccordionSubTitle,
  Button,
  MessageContainer,
  Message,
  AccordionTitleMin,
}

export default styles;