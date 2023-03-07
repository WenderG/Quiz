import '../src/Css/App.css';
import Titulo from './Components/Titulo';
import Jogo from './Pages/index';
import Footer from './Components/Footer';

function App() {
  return (
    <div className="App">
      <Titulo />
      <Jogo />
      <Footer/>
    </div>
  )
}

export default App;
