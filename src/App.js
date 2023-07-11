import React, {useState} from 'react'
import './App.css';
import Top from '../src/components/Top'
import Bottom from '../src/components/Bottom'

function App() {

  const [name, setName] = useState('JANE APPLESEED')
  const [number, setNumber] = useState('0000 0000 0000 0000')
  const [month, setMonth] = useState('00')
  const [year, setYear] = useState('00')
  const [cvc, setCvc] = useState('000')

  if(name === '') {
    setName('JANE APPLESEED')
  }
  if(number === '' || number === '   ') {
    setNumber('0000 0000 0000 0000')
  }
  if (month === '') {
    setMonth('00')
  }
  if (year === '') {
    setYear('00')
  }
  if (cvc === '') {
    setCvc('000')
  }

  function recordName(recordName) {
    setName(recordName)
  }
  function recordNumber(recordNumber) {
    // break the number into quarter sections
    const numberArray = Array.from(recordNumber)
    const quarterIndex = Math.ceil(numberArray.length / 4)

    let firstQ = numberArray.splice(0, quarterIndex)
    let secondQ = numberArray.splice(0, quarterIndex)
    let thirdQ = numberArray.splice(0, quarterIndex)
    let fourthQ = numberArray.splice(0, quarterIndex)
    // turn each section into a string and remove the commas
    firstQ = firstQ.join('')
    secondQ = secondQ.join('')
    thirdQ = thirdQ.join('')
    fourthQ = fourthQ.join('')
    // concat the 4 sections with a space between each
    const fullNumber = firstQ + ' ' + secondQ + ' ' + thirdQ + ' ' + fourthQ
    // set the number to the original numbers but with a space between the sections
    setNumber(fullNumber)
  }
  function recordMonth(recordMonth) {
    setMonth(recordMonth)
  }
  function recordYear(recordYear) {
    setYear(recordYear)
  }
  function recordCvc(recordCvc){
    setCvc(recordCvc)
  }

let exp = month + '/' + year


// const numberArray = Array.from(number)
// const quarterIndex = Math.ceil(numberArray.length / 4)
// let firstQ = numberArray.splice(0, quarterIndex)
// let secondQ = numberArray.splice(0, quarterIndex)
// let thirdQ = numberArray.splice(0, quarterIndex)
// let fourthQ = numberArray.splice(0, quarterIndex)

// firstQ = firstQ.join('')
// secondQ = secondQ.join('')
// thirdQ = thirdQ.join('')
// fourthQ = fourthQ.join('')
// const fullNumber = firstQ + ' ' + secondQ + ' ' + thirdQ + ' ' + fourthQ
// console.log(fullNumber)


  return (
    <div className="App h-screen">
      <div id='mainWrapper' className='h-full flex justify-center'>
        <div id='mainContainer' className='h-full pb-[45px] max-w-[375px]'>
          <div id='topWrapper'>
            <Top name={name} number={number} exp={exp} cvc={cvc}/>
          </div>
          <div id='bottomWrapper'>
            <Bottom recordName={recordName} recordNumber={recordNumber} recordMonth={recordMonth} recordYear={recordYear} recordCvc={recordCvc}/>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
