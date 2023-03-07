import '../src/Css/App.css';
import Titulo from './Components/Titulo';
import Quiz from './App/Quiz';
import Footer from './Components/Footer';

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
