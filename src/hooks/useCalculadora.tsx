import { useState } from "react";
import { sumar,restar,multiplicar,dividir } from "../utils/operaciones";

export default function useCalculadora() {
    const [valorAnterior,setValorAnterior] = useState<any>("")
    const [valorActual,setValorActual] = useState<any>("")
    const [operador,setOperador] = useState<any>(null)

    const agregarNum = (numero:string) => {
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

    const computar = (operador2:string) => {
        if(!valorActual&&!valorAnterior) return
        
        if(operador===null){
          setValorAnterior(valorActual||valorAnterior)
          setValorActual("")
        }
        setOperador(operador2)
    }

    const calcular = () => {
        let num1 = parseFloat(valorAnterior)
        let num2 = parseFloat(valorActual)
        if(isNaN(num1) || isNaN(num2)) return
        switch(operador){
            case "+":
                setValorAnterior(sumar(num1,num2))
                break;
            case "-":
                setValorAnterior(restar(num1,num2))
                break;
            case "/":
                setValorAnterior(dividir(num1,num2))
                break;
            case "X":
                setValorAnterior(multiplicar(num1,num2))
                break;
            default:
                return;
        }
        setOperador(null)
        setValorActual("")
      }

    return {valorAnterior,valorActual,operador,agregarNum,borrarTodo,borrarUltimo,computar,calcular}
}