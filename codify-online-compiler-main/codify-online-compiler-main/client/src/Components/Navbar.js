import React, { useContext } from 'react'
import CodeContext from '../Context/CodeConext'
import defautCodeProvider from '../Context/DefaultCodeProvider'
import runsvg from '../imges/play_arrow_white_24dp.svg'

const Navbar = () => {
  const { lang, setLang, setDefaultCode, setCode, runCode, isRunning } =
    useContext(CodeContext)
  const handleChange = (lang) => {
    setLang(lang)
    setDefaultCode(defautCodeProvider[`${lang}`])
    setCode(defautCodeProvider[`${lang}`])
  }

  return (
    <nav>
      <div className='navLeft'>
        <h1 className='logo'>Codify</h1>
        <div className='langOption'>
          <label htmlFor='Language'>Select Language</label>
          <select value={lang} onChange={(e) => handleChange(e.target.value)}>
            <option value='cpp'>C++</option>
            <option value='nodejs'>JavaScript</option>
            <option value='java'>Java</option>
            <option value='python3'>Python</option>
          </select>
        </div>
        <button disabled={isRunning} className='button-19' onClick={runCode}>
          <img className='runimg' src={runsvg} alt='runImg' />
          Run
        </button>
      </div>
      {/* <div className='navRight'> */}
      {/* <button className='btn btnShare'>Share</button> */}
      {/* </div> */}
    </nav>
  )
}

export default Navbar
