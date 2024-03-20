
import './App.css'
import { TextField } from '@mui/material'
import { Button } from '@mui/material'
import { useState } from 'react'

function App() {
  //js code 
  const [principle, setPrinciple] = useState(0)            //individual state are used here to store here
  const [rate, setRate] = useState(0)                      //In coming projects singlre state is used and stored as objects
  const [year, setYear] = useState(0)                        //0 is because the data is ip data is number
  const [interest, setInterest] = useState(0)
  //for conditional rendering(code below)
  const [isPrinciple, setIsPrinciple] = useState(true)
  const [isRate, setIsRate] = useState(true)
  const [isYear, setIsYear] = useState(true)

  const Validate = (e) => {
    const { name, value } = e.target                      //object destructuring to write instead of console.log{e.target.value}
    console.log(name, value);                                                                  // cnsole.log{e.target.value}
    /*  reg exp =  /^0-9*$/
      match() - to check the pattern matches the value 
  -----console.log(value.match(/^[0-9]*$/));------
 
      if values matches return an array otherwise returns null
      - to covert the return of match method to boolean (true or false) !! is used
  */
    if (!!value.match(/^[0-9]*$/)) {                  //output will be true or false
      if (name === 'principle') {
        setPrinciple(value)
        setIsPrinciple(true)
      }
      else if (name === 'rate') {
        setRate(value)
        setIsRate(true)
      }
      else {
        setYear(value)
        setIsYear(true)
      }
    }
    else {
      if (name === 'principle') {
        setPrinciple(value)
        setIsPrinciple(false)
      }
      else if (name === 'rate') {
        setRate(value)
        setIsRate(false)
      }
      else {
        setYear(value)
        setIsYear(false)

      }
    }

  }

  //function to reset
  const handleReset = () => {
    setPrinciple(0)
    setRate(0)
    setYear(0)
    setIsPrinciple(true)
    setIsRate(true)
    setIsYear(true)
  }

//to calculate the interest
const handleCalculate =(e)=>{
  e.preventDefault()                      //prevent values from lost due to refreshing
  setInterest((principle*rate*year)/100)
}

  return (
    <>
      <div style={{ height: '100vh' }} className='bg-dark d-flex justify-content-center align-items-center'>
        <div className='bg-light p-5 rounded' style={{ width: '500px' }}>
          <h1>Simple Interest App</h1>
          <p>Calculate your simple interest Easily</p>
          <div style={{ height: '150px' }} className='bg-warning rounded mt-5 d-flex justify-content-center align-items-center flex-column'>
            <h1>{interest}</h1>
            <p>Total simple interest</p>
          </div>
          <form onSubmit={handleCalculate}>
            <div className="mb-3 mt-5">
              <TextField id="outlined-basic" name='principle' value={principle || ""} onChange={(e) => Validate(e)} label="₹ Principle Amount" variant="outlined" className='w-100' /> 
                                                          {/* value={principle || ""}--is for reset values in the ip field and "" is to remove thr zero after reset */}  
              {!isPrinciple &&                                               //truthy operator
                <p className='text-danger'>*Invalid Input</p>
              }
            </div>
            <div className="mb-3">
              <TextField id="outlined-basic" name='rate' value={rate || ""} onChange={(e) => Validate(e)} label="Rate of Interest (p.a)%" variant="outlined" className='w-100' />
              {!isRate &&
                <p className='text-danger'>*Invalid Input</p>
              }
            </div>
            <div className="mb-3">
              <TextField id="outlined-basic" name='year' value={year || ""} onChange={(e) => Validate(e)} label="Year (yr)" variant="outlined" className='w-100' />
              {!isYear &&
                <p className='text-danger'>*Invalid Input</p>
              }
            </div>
            <div className='mb-3 d-flex justify-content-between' >
              <Button variant="contained" color='success' style={{ height: '60px', width: '190px' }} disabled={isPrinciple&& isRate && isYear?false:true} type='submit'>Calculate</Button>
              <Button onClick={handleReset} variant="outlined" size='large' style={{ height: '60px', width: '190px' }}>Reset</Button>    {/* function don't need to be call cack since there is no value to return */}
            </div>
          </form>
        </div>

      </div>
    </>
  )
}

export default App
