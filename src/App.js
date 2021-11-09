import logo from './logo.svg';
import './App.css';
import React, {useState} from 'react'

const fnumero1=(n1,nr)=>{
       return(
         <div>
              <label>
                Número: 
                <input type='text' value={n1} onChange={(e)=>{nr(e.target.value)}}></input>
              </label>

         </div>
      )
}

const fnumero2=(n2,nn)=>{
  return(
    <div>
         <label >
           Número: 
           <input type='text' value={n2} onChange={(e)=>{nn(e.target.value)}}></input>
         </label>

    </div>
 )
}

const Calcular=(n1,n2,resultado)=>
{
      const calc=()=>{
        resultado(n1*n2)
      }

      return(
        <div>
          <button onClick={calc}>Calcular</button>
        </div>
      )
}

const fresultado=(r)=>{

  return(
           <div>
             <p>Resultado: {r}</p>
           </div>
  )

}

export default function App(){
        
     const [numero1,setNumero1]=useState(0)
     const [numero2,setNumero2]=useState(0)
     const [resultado,setResultado]=useState(0)
        return(
          <>
           {fnumero1(numero1,setNumero1)}
           {fnumero2(numero2,setNumero2)}
           {Calcular(numero1,numero2,setResultado)}
           {fresultado(resultado)}
           </>
        )

}
