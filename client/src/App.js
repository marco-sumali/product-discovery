// import logo from './logo.svg';
import './App.css';

import {useEffect} from 'react';

function App() {

  useEffect(() => {
    const url = 'https://us-central1-product-discovery-e0705.cloudfunctions.net/nodeFetch'
    fetch(url, {method: 'GET'})
      .then(res => res.json())
      .then(res => {
        const str = res.strHtml
        // const parser = new DOMParser()
        // const dom = parser.parseFromString(str, 'text/html')

        // const theirHTML = dom.querySelector('html')

        // Create a new doc with str html from server
        var newDoc = document.open("text/html", "replace")
        newDoc.write(str);
        newDoc.close();

        // Create a new bot button
        var btn = document.createElement('BUTTON')   // Create a <button> element
        // Add attributes to button
        btn.setAttribute("id", "2359-bot")
        // Add styling to button
        btn.style.position = 'fixed'
        btn.style.bottom = '25px'
        btn.style.right = '25px'
        btn.style.fontSize = '1.25em'
        btn.style.padding = '4px 16px'
        btn.style.backgroundColor = '#4285F4'
        btn.style.borderRadius = '25px'
        btn.style.color = '#ffffff'
        btn.innerHTML = "2359 Bot"
        // Add function
        btn.onclick = () => window.location.href = 'https://articulo-voice-bot.web.app/'
        // Append <button> to <body>                 
        document.body.appendChild(btn)                      
      })
      .catch()
  }, [])

  return (
    <div className="App">
      <header className="App-header">
        <div style={{position: 'relative'}}>
          <div style={{position: 'fixed', bottom: 25, right: 25}}>
            <button 
              onClick={() => alert('Open Chat Bot')}
              style={{
                fontSize: '1em', 
                color: '#ffffff',
                padding: '4px 16px',
                borderRadius: '25px', 
                outline: 'none', 
                backgroundColor: '#4285F4',
                border: '2px solid #000000',
              }}>2359 Chat Bot</button>
          </div>
        </div>
        <iframe src="https://www.revolut.com/help" style={{border:'solid 1px #777', height: '100vh'}} width="100%" frameBorder="0" title="01"></iframe>
      </header>
    </div>
  );
}

export default App;
