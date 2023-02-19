import logo from './logo.svg';
import './App.css';
import Payment from './Components/Payment'; 
import QRCodeValidator from './Components/QRCodeValidator';

function App() {
  return (
    <div className="App">
      <header className="App-header">
       <Payment/>
       <QRCodeValidator/>
      </header>
    </div>
  );
}

export default App;
