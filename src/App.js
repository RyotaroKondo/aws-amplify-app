import logo from './logo.svg';
import './App.css';
import './variables.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <h2 className="text-color-gray-light">Hello React app with <span class="color-base-green">AWS</span></h2>
        <div className="color-base-red">Test Style-Dictionary</div>
        <div className="color-text-link">HogehogeFugafuga</div>
        <button className='button-danger'>削除</button>
      </header>
    </div>
  );
}

export default App;
