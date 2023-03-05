import '../src/css/App.css';
import Titulo from './components/Titulo';
import Botoes from './components/Botoes';
import Footer from './components/Footer';


function App() {
  return (
    <div className="App">
      <Titulo />
      <Botoes/>
      <Footer/>
    </div>
  );
}

export default App;
