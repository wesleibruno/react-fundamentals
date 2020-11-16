import "./Input.css"
import React, { useState } from "react"

export default props => {

    const [valor, setValor] = useState('Inicial1')

    function quandoMudar(e) {
        setValor(e.target.value)
        console.log()
    }

    return (
        <div className="Input">
            <h2>{valor}</h2>
            <div style={{
                display:'flex',
                flexDirection: 'column',
            }}>
                <input value={valor} onChange={quandoMudar}/>
                <input value={valor} readOnly/>
                <input value={undefined} />

            </div>
        </div>
    )
}