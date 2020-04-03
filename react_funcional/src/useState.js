import React, {useState} from 'react'

function App(){
  
  const [primeiro, setPrimeiro] = useState()
  const [segundo, setSegundo] = useState()
  const [resultado, setResultado] = useState()

  const somar = () => {
    const num1 = parseInt(primeiro)
    const num2 = parseInt(segundo)
    setResultado(num1+num2)
  }
  
  return(
    <div>
      Número 1: <br />
      <input type="text" value={primeiro}
             onChange={e => setPrimeiro(e.target.value)}></input><br />
      Número 2: <br />
      <input type="text" value={segundo}
             onChange={e => setSegundo(e.target.value)}></input><br />
      <button onClick={somar}>Somar</button><br />
      Resultado: <br />
      <input type="text" value={resultado}></input><br />
    </div>
  )
}
export default App