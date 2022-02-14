import './calculator.css';

export default function Calculator() {
    return(
        <div className='container'>
            <div className='result'>
                <h1>0</h1>
            </div>
            <div className='numbers'>
                <button>AC</button>
                <button>+/-</button>
                <button>%</button>
                <button className='orange'>/</button>
                <button className='gray'>7</button>
                <button className='gray'>8</button>
                <button className='gray'>9</button>
                <button className='orange'>X</button>
                <button className='gray'>4</button>
                <button className='gray'>5</button>
                <button className='gray'>6</button>
                <button className='orange'>-</button>
                <button className='gray'>1</button>
                <button className='gray'>2</button>
                <button className='gray'>3</button>
                <button className='orange'>+</button>
                <button className='gray zero'>0</button>
                <button className='gray'>,</button>
                
                <button className='orange'>=</button>
            </div>
            
        </div>
    )
}