import '../css/Botoes.css';
import Quiz from '../App/Quiz';

function Botoes() {
    return (
        <div className="container">
            <div>
                <button className="botoes" onClick={Quiz} id="botao1">Botao 1</button>  
            </div>
            <div>
                <button className="botoes" id="botao2">Botao 2</button>
            </div>
            <div>
                <button className="botoes" id="botao3">Botao 3</button>
            </div>
            <div>
                <button className="botoes" id="botao4">Botao 4</button>
            </div>
            <div>
                <button className="botoes" id="botao5">Botao 5</button>
            </div>
        </div>
    )
}

export default Botoes