/* eslint-disable no-unused-vars */
/* eslint-disable import/no-anonymous-default-export */
import "./App.css"
import React from "react"

import Card from "./components/layout/Card"


import Mega from "./components/mega/Mega"
import Contador from "./components/contador/Contador"
import Input from "./components/formulario/Input"
import DiretaPai from "./components/comunicacao/DiretaPai"
import UsuarioInfo from "./components/condicional/UsuarioInfo"
import ParOuImpar from "./components/condicional/ParOuImpar"
import Familia from "./components/basicos/Familia"
import FamiliaMembro from "./components/basicos/FamiliaMembro"
import Primeiro from "./components/basicos/Primeiro"
import ComParametro from "./components/basicos/ComParametro"
import Fragmento from "./components/basicos/Fragmento"
import Aleatorio from "./components/basicos/Aleatorio"
import ListaAluno from "./components/repeticao/ListaAluno"
import TabelaProdutos from "./components/repeticao/TabelaProdutos"
import IndiretaPai from "./components/comunicacao/IndiretaPai"



export default () =>
    <div className="App">
        <h1>Fundamentos React </h1>

        <div className="Cards">

            <Card titulo="#13 - Mega-sena" color="#B9006E">
                <Mega qtde={8}></Mega>
            </Card>
            <Card titulo="#12 - Contador" color="#424242">
                <Contador numeroInicial={0} passoInicial={1}></Contador>
            </Card>
            <Card titulo="#11 - Componente Controlado (Input)" color="#E45F56">
                <Input></Input>

            </Card>
            <Card titulo="#10 - Comunicação Indireta" color="#8BAD39">
                <IndiretaPai></IndiretaPai>
            </Card>
            <Card titulo="#09 - Comunicação Direta" color="#59323C">
                <DiretaPai></DiretaPai>
            </Card>
            <Card titulo="#08 - Rendenização condicional" color="#982395">
                <ParOuImpar numero={21}></ParOuImpar>
                <UsuarioInfo usuario={{nome: "Fernando" }} />
                {/* <UsuarioInfo usuario={{ email: "fer@nando.com" }} />
                <UsuarioInfo usuario={{}} /> */}
                {/* usuario={{ nome: "Fernando" }} */}
            </Card>

            <Card titulo="#07 - Desafio de Repetição" color="#3A9Ad9">
                <TabelaProdutos></TabelaProdutos>
            </Card>
        
            <Card titulo="#06 - Repetição" color="#F7A6DB">
                <ListaAluno></ListaAluno>
            </Card>

            <Card titulo="#05 - Componente com Filhos" color="#5DADE2">
                <Familia sobrenome="Silva">
                    <FamiliaMembro nome="Pedro" />
                    <FamiliaMembro nome="Ana" />
                    <FamiliaMembro nome="Gustavo" />
                </Familia>
            </Card>

            <Card titulo="#04 - Desafio Aleatório" color="#080">
                <Aleatorio min={1}max={10}/>
            </Card>

            <Card titulo="#03 - Fragmento" color="#FF5733">
                <Fragmento />
            </Card>

            <Card titulo="#02 - Com Parâmetro" color="#336EFF">
                <ComParametro
                    titulo="Situação do Aluno"
                    aluno="Pedro"
                    nota={9.3} />
            </Card>
            <Card titulo="#01 - Primeiro Componente" color="#FFD733">
                <Primeiro></Primeiro>
            </Card>

        </div>
    </div>
