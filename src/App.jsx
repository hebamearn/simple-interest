import { TextField, Stack, Button } from '@mui/material'
import './App.css'
import { useState } from 'react'

function App() {

  const [principle, setPrinciple] = useState(0)
  const [interest, setInterest] = useState(0)
  const [rate, setRate] = useState(0)
  const [year, setYear] = useState(0)

  const [invalidprinciple, setInvalidprinciple] = useState(false)
  const [invalidRate, setInvalidRate] = useState(false)
  const [invalidYear, setInvalidYear] = useState(false)

  const validateInput = (inputTag) => {
    console.log(typeof inputTag);
    const { name, value } = inputTag
    console.log(name, value);
    console.log(!!value.match(/^[0-9]*.?[0-9]+$/));
    console.log(!!value.match(/^\d*\.?\d+$/));

    if (name == "principle") {
      setPrinciple(value)
      if (!!value.match(/^\d*\.?\d+$/)) {
        setInvalidprinciple(false)
      } else {
        setInvalidprinciple(true)
      } 
    }else if (name == "Rate") {
        setRate(value)
        if (!!value.match(/^\d*\.?\d+$/)) {
          setInvalidRate(false)
        } else {
          setInvalidRate(true)
        }
 
    }else if(name=="year"){
      setYear(value)
        if (!!value.match(/^\d*\.?\d+$/)) {
          setInvalidYear(false)
        } else {
          setInvalidYear(true)
        }
 
    }




  }

  const handleCalculate=(e)=>{
    e.preventDefault()
    console.log("inside handlecalculate");
    if(principle&&rate&&year){
      setInterest(principle*rate*year/100)
    }else{
      alert("please enter form completely")
    }
  }
  const handleReset=()=>{
    setInterest(0)
    setRate(0)
    setYear(0)
    setPrinciple(0)
    setInvalidRate(false)
    setInvalidprinciple(false)
    setInvalidYear(false)

  }
  
  return (
    <div style={{ width: '100%', minHeight: '100vh' }} className='d-flex justify-content-center align-items-center bg-dark'>

      <div style={{ width: '600px' }} className='bg-light rounded p-5'>
        <h3>Simple Interest App</h3>
        <p>Calculate your simple interest Easily!</p>

        <div className='bg-warning p-3 text-light text-center rounded'>
          <h1>₹ {interest} </h1>
          <p className='fw-bolder'>Total Simple Interest</p>
        </div>
        <form className='mt-5' >
          <div className='mb-3'>
            <TextField className='w-100' name='principle' onChange={(e) => validateInput(e.target)}
              id="outlined-principle" label=" ₹ principle amount" variant="outlined" />
          </div>
          {invalidprinciple && <div className="mb-3 text-danger fw-bolder">
            Invalid Principle Amount!!!
          </div>}
          <div className='mb-3'>
            <TextField className='w-100' name='Rate' onChange={(e) => validateInput(e.target)}
              id="outlined-rate" label="Rate of interest (%)" variant="outlined" />
          </div>
          {invalidRate && <div className="mb-3 text-danger fw-bolder">
            Invalid  Rate!!!
          </div>}
          <div className='mb-3'>
            <TextField className='w-100' name='year' onChange={(e) => validateInput(e.target)}
              id="outlined-year" label="Time period(Year)" variant="outlined" />
          </div>
          {invalidYear && <div className="mb-3 text-danger fw-bolder">
            Invalid Year!!!
          </div>}
          <Stack direction="row" spacing={2}>
            <Button type='submit' onClick={handleCalculate} disabled={invalidprinciple||invalidRate||invalidYear} variant="contained"  style={{ width: '50%', height: '70px' }} className='bg-dark'>CALCULATE</Button>
            <Button variant="outlined" onClick={handleReset} style={{ width: '50%', height: '70px' }} className='border border-dark text-dark'>RESET</Button>
          </Stack>
        </form>
      </div>
    </div>
  )
}

export default App
