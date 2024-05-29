import './App.css';
import Heads from './components/header/header';
import Basis from './components/main/main';
import Navigation from './components/nav/nav';

function App() {
  return (
    <div className="App">
      <Heads />
      <div className='all'>
      <Navigation />
      <Basis />
      </div>
    </div>
  );
}
export default App;
