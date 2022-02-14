import { useState } from 'react';
import './calculator.css';


export default function Calculator() {

    const [num, setNum]= useState(0);

        function inputNum(e) {
            var input = e.target.value;
            if (num === 0) {
                setNum(input);
            } else {
                setNum(num + input);
            }
            
        }

        function clear() {
            setNum(0)
        }

        function porcentagem() {
            setNum(num/100)
        }

        function operadorHandle() {
            if(num > 0) {
                setNum(-num)
            } else {
                setNum(Math.abs(num))
            }
        }

    return(

        <div className='container'>
            <div className='result'>
                <h1>{num}</h1>
            </div>
            <div className='numbers'>
                <button onClick={clear}>AC</button>
                <button onClick={operadorHandle}>+/-</button>
                <button onClick={porcentagem}>%</button>
                <button className='orange'>/</button>
                <button className='gray' onClick={inputNum} value={7}>7</button>
                <button className='gray' onClick={inputNum} value={8}>8</button>
                <button className='gray' onClick={inputNum} value={9}>9</button>
                <button className='orange'>X</button>
                <button className='gray' onClick={inputNum} value={4}>4</button>
                <button className='gray' onClick={inputNum} value={5}>5</button>
                <button className='gray' onClick={inputNum} value={6}>6</button>
                <button className='orange'>-</button>
                <button className='gray' onClick={inputNum} value={1}>1</button>
                <button className='gray' onClick={inputNum} value={2}>2</button>
                <button className='gray' onClick={inputNum} value={3}>3</button>
                <button className='orange'>+</button>
                <button className='gray zero' onClick={inputNum} value={0}>0</button>
                <button className='gray' onClick={inputNum} value={','}>,</button>
                
                <button className='orange'>=</button>
            </div>
            
        </div>
    )
}