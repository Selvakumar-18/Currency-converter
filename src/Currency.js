import React,{useState, useEffect} from 'react'
import './Currency.css'
export default function Currency() {
    const [inputValue, setInputValue] = useState(1)
    const [outputValue, setOutputValue] = useState(76.43)
    const [inputOpt, setInputOpt] = useState('USD')
    const [outputOpt, setOutputOpt] = useState('INR')


const data =[
    {
        name : "USD",
        INR : 76.43,
        AED : 3.67,
        EURO : 0.93,
        USD : 1
    },
    {
        name:"EURO",
        INR: 82.51,
        AED: 3.97,
        EURO : 1,
        USD : 1.08
    },
    {
        name:"AED",
        INR: 20.80,
        AED: 1,
        EURO : 0.25,
        USD : 0.27
    },
    {
        name:"INR",
        INR: 1,
        AED: 0.048,
        EURO : 0.012,
        USD : 0.013
    },
]

useEffect(() =>{
    console.log(inputValue,outputValue,inputOpt,outputOpt);
    if(inputValue && inputOpt && outputOpt){
        console.log(inputValue , inputOpt , outputOpt);
        let currentOpt = data.find(_item => _item.name === inputOpt)
       setOutputValue( currentOpt[`${outputOpt}`] * inputValue)
    }

},[inputValue,outputValue,inputOpt,outputOpt])


  return (
    <div className='body'>   
        <h1>Currency Converter</h1>
        <div className='input'> 
            
            <input type="text"  value={inputValue} onChange={(e) => setInputValue(e.target.value)} /> 
          
            <select name="inputOpt" id="inputOpt" value={inputOpt} onChange={(e) => setInputOpt(e.target.value)}>
                <option value="INR">INR</option>
                <option value="USD">USD</option>
                <option value="EURO">EURO</option>
                <option value="AED">AED</option>
            </select>

        </div>

        <div className='output'>
         
            <input type="text"  value={outputValue} onChange={(e) => setOutputValue(e.target.value)}/> 
            
            <select name="outputOpt" id="outputOpt" value={outputOpt} onChange={(e) => setOutputOpt(e.target.value)}>
                <option value="INR">INR</option>
                <option value="USD">USD</option>
                <option value="EURO">EURO</option>
                <option value="AED">AED</option>
            </select>

        </div>
    </div>
  )
}
