import { useState } from 'react'

import './App.css'
import Big from "big.js"

function App() {
  const [valorAnterior,setValorAnterior] = useState("")
  const [valorActual,setValorActual] = useState("")
  const [operador,setOperador] = useState(null)

  const sumar = (num1,num2)=>{
    return num1 + num2
  }

  const restar = (num1,num2)=>{
    return num1 - num2
  }
  const multiplicar = (num1,num2)=>{
    return num1 * num2
  }
  const dividir = (num1,num2)=>{
    return num1 / num2
  }

  const agregarNum = (numero) => {
    if(numero==="."&&valorActual.includes(".")) return
    setValorActual((valorActual).toString()+numero)
  }

  const borrarTodo = () => {
    setOperador(null)
    setValorAnterior("")
    setValorActual("")

  }

  const borrarUltimo = () =>  {
    if(valorActual){
      setValorActual((valorActual).toString().slice(0,-1))
    }else{
      if(operador){setOperador(null)}else{
        setValorAnterior((valorAnterior).toString().slice(0,-1))
      }
    }
    
  }

  const calcular = () => {
    let num1 = parseFloat(valorAnterior)
    let num2 = parseFloat(valorActual)
    if(isNaN(num1) || isNaN(num2)) return
    if(operador==="+"){
      setValorAnterior(sumar(num1,num2))
    }
    if(operador==="-"){
      setValorAnterior(restar(num1,num2))
    }
    if(operador==="/"){
      setValorAnterior(dividir(num1,num2))
    }
    if(operador==="X"){
      setValorAnterior(multiplicar(num1,num2))
    }
    setOperador(null)
    setValorActual("")
  }

  const computar = (operador2) => {
    if(!valorActual&&!valorAnterior) return
    console.log(operador);
    
    if(operador===null){
      console.log("aaa");
      
      setValorAnterior(valorActual||valorAnterior)
      setValorActual("")
    }
    setOperador(operador2)
  }


  return (
    <div className='calculadora'>
      <div className='display'>
        <div id="valor-anterior">{valorAnterior}{operador}</div>
        <div id="valor-actual">{valorActual}</div>
      </div>
      <button className='col-2' onClick={()=>{borrarTodo()}}>C</button>
      <button onClick={()=>{borrarUltimo()}}>&larr;</button>
      <button className='operador' onClick={()=>{computar("/")}}>/</button>
      <button className='numero' onClick={()=>{agregarNum(7)}}>7</button>
      <button className='numero' onClick={()=>{agregarNum(8)}}>8</button>
      <button className='numero' onClick={()=>{agregarNum(9)}}>9</button>
      <button className='operador' onClick={()=>{computar("X")}}>X</button>
      <button className='numero' onClick={()=>{agregarNum(4)}}>4</button>
      <button className='numero' onClick={()=>{agregarNum(5)}}>5</button>
      <button className='numero' onClick={()=>{agregarNum(6)}}>6</button>
      <button className='operador' onClick={()=>{computar("-")}}>-</button>
      <button className='numero' onClick={()=>{agregarNum(1)}}>1</button>
      <button className='numero' onClick={()=>{agregarNum(2)}}>2</button>
      <button className='numero' onClick={()=>{agregarNum(3)}}>3</button>
      <button className='operador' onClick={()=>{computar("+")}}>+</button>
      <button className='col-2 numero' onClick={()=>{agregarNum(0)}}>0</button>
      <button className='numero' onClick={()=>{agregarNum(".")}}>.</button>
      <button className='operador' onClick={()=>{calcular()}}>=</button>
    </div>
  )
}

export default App
