import logo from './logo.svg';
import './App.css';

function App() {
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
        <iframe src="https://www.revolut.com/help" style={{border:'solid 1px #777', height: '100vh'}} width="100%" frameborder="0"></iframe>
      </header>
    </div>
  );
}

export default App;
