'use client';

import Botao from "@/componentes/botao";

import { useState } from "react";

export default function Sobre(){
    const [numero, setNumero] = useState(0);
    return(
        <div className="container">
            <h1>Sobre</h1>
            <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Officiis facilis adipisci ipsam dignissimos esse libero. Pariatur quisquam fuga quos iure, iusto architecto nihil dolorum eligendi dolorem, in autem consequuntur earum.</p>
            <br/>
            <label>{numero}</label>
            <button 
                type="button"
                onClick={() => setNumero(numero + 1)}
            >Contar</button>

            <Botao label={'Mais um'} acao={() => setNumero(numero + 1)}/>
            <Botao label={'Alerta'} acao={() => alert('Erro')}/>
        </div>
    );
}