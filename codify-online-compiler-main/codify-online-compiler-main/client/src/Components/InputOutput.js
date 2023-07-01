import React, { useContext } from 'react'
import CodeContext from '../Context/CodeConext'
const InputOutput = () => {
  const { input, setInput, output, setOutput } = useContext(CodeContext)
  return (
    <div className='container'>
      <div className='textareaContainer'>
        <h3>Input:</h3>
        <textarea
          name='input'
          id=''
          cols='30'
          rows='10'
          value={input}
          onChange={(e) => setInput(e.target.value)}
        ></textarea>
      </div>
      <div className='textareaContainer'>
        <h3>Output:</h3>
        <textarea
          name='input'
          id=''
          cols='30'
          rows='10'
          value={output}
          onChange={(e) => setOutput(e.target.value)}
        ></textarea>
      </div>
    </div>
  )
}

export default InputOutput
