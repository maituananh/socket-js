import logo from './logo.svg';
import './App.css';
import Chat from './components/chat/Chat';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <Chat></Chat>
      </header>
    </div>
  );
}

export default App;
