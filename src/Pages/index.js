import React, { useState } from 'react';
import { Quiz } from '../Data/Quiz';
import '../Css/Style.css'

export default function Jogo() {
    const questions = Quiz ?? []
    const [questaoAtual, setQuestaoAtual] = useState(0);
    const [showAcertou, setShowAcertou] = useState(false);
    const [pontos, setPontos] = useState(0);

    function proximaQuestao(afirmativa) {
        const nextQuestion =  questaoAtual + 1;
    
        if (afirmativa){
            setPontos(pontos + 1);
        }
    
        if (nextQuestion < questions.length) {
            setQuestaoAtual(nextQuestion);
        } else {
            setShowAcertou(true);
        }
      }

    return (
        <div className='container'>
        {showAcertou ? (
        <div className='pontuacao'>
          <span>Sua pontuação é {pontos} de {questions.length}</span>
        </div>) : (
                <>
                    <div className='infoQuestoes'>
                        <div className="contagemQuestoes">
                        <span>Questão {questaoAtual + 1}/{questions.length}</span>
                        </div >
                        <div className="questao">{questions[questaoAtual].questao}</div>
                    </div >
                    <div className="resposta">
                        {questions[questaoAtual].respostas.map((opcoesResposta) =>
                        <div className="grupoResposta">
                            <span>{opcoesResposta.alternativa}</span>
                            <button onClick={() => proximaQuestao(opcoesResposta.afirmativa)}>{opcoesResposta.resposta}</button>
                        </div>)}
                    </div>
                </>
            )}
        </div >
    )
}