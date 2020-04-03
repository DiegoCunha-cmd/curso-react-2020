import React, {useState} from 'react'
import useStore from './somaReducer'

function ReducerHook(){
  
  const [primeiro, setPrimeiro] = useState()
  const [segundo, setSegundo] = useState()
  const [store, dispatch] = useStore()
  const somar = () => {
    const num1 = parseInt(primeiro)
    const num2 = parseInt(segundo)
    dispatch({
        type: 'SOMA',
        payload: num1 + num2
    })
  }
  const subtrair = () => {
    const num1 = parseInt(primeiro)
    const num2 = parseInt(segundo)
    dispatch({
        type: 'SUBTRAIR',
        payload: num1 - num2
    })
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
      <button onClick={subtrair}>Subtrair</button><br />
      Resultado: <br />
      <input type="text" value={store.resultado} readOnly></input><br />
    </div>
  )
}
export default ReducerHook