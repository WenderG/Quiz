import '../src/css/App.css';
import Titulo from './components/Titulo';
import Quiz from './App/Quiz';
import Footer from './components/Footer';

function App() {
  return (
    <div className="App">
      <Titulo />
      <Quiz />
      <Footer/>
    </div>
  )
}

export default App;
