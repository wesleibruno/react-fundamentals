// import React, { Component } from 'react'

// export default class Contador extends React.Component {

////////////// OU /////////////////////

// import React, { Component } from 'react'

// export default class Contador extends Component {

////////////// OU /////////////////////


    //pode fazer desta forma
    // state = {
    //     numero: this.props.numeroInicial
    // }
    // ou da forma abaixo

    // constructor(props) {
    //     super(props)

    //     this.state = {
    //         numero: this.props.numeroInicial
    //     }
    // }
import "./Contador.css"
import React, { Component } from 'react'

import Display from "./Display"
import Botoes from "./Botoes"
import PassoForm from "./PassoForm"


class Contador extends Component {

    state = {
            numero: this.props.numeroInicial || 0,
            passo: this.props.passoInicial || 5,
    };

    // constructor(props) {
    //     super(props)

    //     this.inc = this.inc.bind(this)
    //     this.dInc = this.dInc.bind(this)
    // }

    // inc() {
    //     this.setState({
    //         numero: this.state.numero + 1,
    //     });
    // }
    // dInc() {
    //     this.setState({
    //         numero: this.state.numero - 1,
    //     });
    // }
//////////////////////////////////////////////////////////////
    // inc = () => {
    //     this.setState({
    //         numero: this.state.numero + 1,
    //     });
    // }
    // dInc = () => {
    //     this.setState({
    //         numero: this.state.numero - 1,
    //     });
    // }
//////////////////////////////////////////////////////////////
    //  inc() {
    //     this.setState({
    //         numero: this.state.numero + 1,
    //     });
    // }
//////////////////////////////////////////////////////////////

    inc = () => {
        this.setState({
            numero: this.state.numero + this.state.passo,
        });
    }
    dInc = () => {
        this.setState({
            numero: this.state.numero - this.state.passo,
        });
    }

    setPasso = (novoPasso) => {
        this.setState({
            // passo: +evento.target.value,
            passo: novoPasso,
        })
    }

    render() {
        return (
            <div className="Contador">
                <h2>Contador</h2>
                <Display numero={this.state.numero}></Display>
                <PassoForm passo={this.state.passo} setPasso={this.setPasso} />
                {/* <h3>{this.state.numero}</h3> */}
                {/* <div>
                    <label htmlFor="passoInput">Passo: </label>
                    <input 
                        id="passoInput" 
                        type="number"
                        value={this.state.passo} 
                        onChange={this.setPasso} />
                </div> */}
                <Botoes setInc={this.inc} setDec={this.dInc} />
                {/* <button onClick={this.dInc}>-</button>
                <button onClick={this.inc}>+</button> */}
                {/* <button onClick={_ => this.inc()}>+</button> */}
            </div>
        )
    }

}

export default Contador