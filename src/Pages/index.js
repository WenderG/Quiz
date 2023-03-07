import React, { useState } from 'react';
import { Quiz } from '../Data/Quiz';
import '../Css/Style.css';

export default function Jogo() {
    const questions = Quiz ?? []
    const [questaoAtual, setQuestaoAtual] = useState(0);

    function proximaQuestao(correta) {
        const nextQuestion = questaoAtual + 1

        if (nextQuestion < questions.length) {
            setQuestaoAtual(nextQuestion);
        }
    }

    return (
        <div className='container'>
        {(
            <>
            <div className='infoQuestoes'>
                <div className="contagemQuestoes">
                <span>Questão {questaoAtual + 1}/{questions.length}</span>
                </div >
                <div className="questao">{questions[questaoAtual].questao}</div>
            </div >
            <div className="resposta">
                {questions[questaoAtual].opcoesResposta.map((opcoesResposta) =>
                <div className="grupoResposta">
                    <span>{opcoesResposta.alternativa}</span>
                    <button onClick={() => proximaQuestao(opcoesResposta.correta)}>{opcoesResposta.resposta}</button>
                </div>)}
            </div>
            </>
        )}
        </div >
    )
}